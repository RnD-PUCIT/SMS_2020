using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using IRAAPI.Dtos;
using IRAAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace IRAAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GradebookController : ControllerBase
    {
        private readonly IRAAPIContext _context;
        private readonly IMapper _mapper;
        public GradebookController(IRAAPIContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        [Authorize(Roles = "Teacher")]
        [Route("getGradebookActivities")]
        public async Task<ActionResult<List<GradebookDto>>> GetGradebookActivities(Guid classId, Guid subjectId)
        {
            int classIdNumeric = 0, subjectNumericId = 0;
            try
            {
                classIdNumeric = await _context.Classes
                .Where(c => c.Guid == classId)
                .Select(c => c.Id)
                .SingleOrDefaultAsync();

                subjectNumericId = await _context.Subjects
               .Where(s => s.Guid == subjectId)
               .Select(s => s.Id)
               .SingleOrDefaultAsync();
            }
            catch (System.Exception ex)
            {
                Console.Write(ex);
            }

            if (classIdNumeric == 0 || subjectNumericId == 0)
                return NotFound();

            List<GradebookDto> gradebook = new List<GradebookDto>();

            List<GradeType> gradeTypes = await _context.GradeTypes
                .Where(t => t.ClassId == classIdNumeric && t.SubjectId == subjectNumericId)
                .ToListAsync();

            foreach (GradeType gradeType in gradeTypes)
            {
                List<GradeActivity> activities = await _context.GradeActivities
                    .Where(a => a.GradeTypeId == gradeType.Id)
                    .ToListAsync();

                gradebook.Add(
                    new GradebookDto
                    {
                        Id = gradeType.Guid,
                        TestType = gradeType.GradeType1,
                        Activities = _mapper.Map<List<GradeActivity>, List<GradeActivityDto>>(activities)
                    }
                );
            }

            return gradebook;
        }
    }
}