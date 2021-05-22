using AutoMapper;
using IRAAPI.Dtos;
using IRAAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IRAAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ClassesController : ControllerBase
    {
        private readonly IRAAPIContext _context;
        private readonly IMapper _mapper;

        public ClassesController(IRAAPIContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("getClassesList")]
        public async Task<ActionResult<List<Class>>> GetClassesList()
        {
            return await _context.Classes.ToListAsync();
        }

        [HttpPost]
        [Route("createClass")]
        public async Task<ActionResult> CreateClass(ClassDTO model)
        {
            Class classData = new Class
            {
                ClassName = model.ClassName,
                Section = model.Section
            };

            _context.Classes.Add(classData);
            var success = await _context.SaveChangesAsync() > 0;

            if (!success)
                return StatusCode(StatusCodes.Status500InternalServerError);

            return Ok();
        }

        [HttpGet]
        [Route("getAllocatedSubjects")]
        public async Task<ActionResult<List<string>>> GetAllocatedSubjects(int classId)
        {
            List<string> subjectsList = new List<string>();
            List<ClassSubjectAlloc> classSubjectList = await _context.ClassSubjectAllocs.Where(c => c.ClassId == classId).ToListAsync();

            foreach (var item in classSubjectList)
            {
                Subject subject = await _context.Subjects.SingleOrDefaultAsync(s => s.Id == item.SubjectId);
                subjectsList.Add(subject.SubjectName);
            }

            return subjectsList;
        }

        [HttpPost]
        [Route("allocateSubject")]
        public async Task<ActionResult> AllocateSubject(ClassAllocationDto model)
        {
            foreach (var subjectId in model.SubjectIds)
            {
                ClassSubjectAlloc allocation = new ClassSubjectAlloc
                {
                    ClassId = model.ClassId,
                    SubjectId = subjectId
                };

                _context.ClassSubjectAllocs.Add(allocation);
                var result = await _context.SaveChangesAsync() > 0;

                if (!result)
                    return StatusCode(StatusCodes.Status500InternalServerError);
            }

            return Ok();
        }

        [HttpGet]
        [Route("getTeacherClasses")]
        [Authorize(Roles = "Teacher")]
        public async Task<ActionResult<List<ClassDto>>> GetTeacherClasses()
        {
            var claims = User.Claims;
            var userId = claims.Where(p => p.Type == "userId").FirstOrDefault()?.Value;

            if (userId == null)
                return NotFound();

            Guid teacherGuid = Guid.Parse(userId);
            List<ClassDto> classes = null;

            try
            {
                // Get numeric teacher id
                int id = await _context.Teachers.Where(t => t.UserId == teacherGuid)
                .Select(t => t.Id)
                .SingleOrDefaultAsync();

                List<Class> list = await _context.TeacherSubjectAllocs.Include(t => t.Class)
                .Where(t => t.TeacherId == id).Select(t => t.Class).Distinct().ToListAsync();

                classes = _mapper.Map<List<Class>, List<ClassDto>>(list);
            }
            catch (System.Exception ex)
            {
                Console.Write(ex);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }

            return classes;
        }
    }
}
