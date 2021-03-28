using IRAAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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

        public ClassesController(IRAAPIContext context)
        {
            _context = context;
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

    }
}
