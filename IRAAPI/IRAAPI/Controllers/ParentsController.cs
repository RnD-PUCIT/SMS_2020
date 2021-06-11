using IRAAPI.Dtos;
using IRAAPI.Models;
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
    public class ParentsController : ControllerBase
    {
        private readonly IRAAPIContext _context;

        public ParentsController(IRAAPIContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("getParentsList")]
        public async Task<ActionResult<List<Parent>>> GetParentsList()
        {
            return await _context.Parents.ToListAsync();
        }

        [HttpGet]
        [Route("getParentsListForClass")]
        public async Task<ActionResult<List<ParentStudentDto>>> GetParentsListForClass(Guid classId)
        {
            var classInDb = await _context.Classes
            .SingleOrDefaultAsync(c => c.Guid == classId);

            if (classInDb == null)
                return NotFound();

            List<Student> students = await _context.Students
            .Where(s => s.ClassId == classInDb.Id).ToListAsync();

            List<ParentStudentDto> list = new List<ParentStudentDto>();

            foreach (Student student in students)
            {
                // Get parent info of a student
                Parent parent = _context.Parents.Single(p => p.Id == student.ParentId);

                list.Add(new ParentStudentDto
                {
                    ParentId = parent.Guid,
                    ParentName = parent.FirstName + " " + parent.LastName,
                    ParentPicture = parent.ProfilePicture,
                    StudentName = student.FirstName + " " + student.LastName,
                    StudentRollNumber = student.RollNo,
                });
            }

            return list;
        }
    }
}
