using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using IRAAPI.Models;


namespace IRAAPI.Controllers
{
    [Route("subjects/{subject-name}/{grade-type-name}")]
    [ApiController]
    public class GradesController : ControllerBase
    {
        private readonly IRAAPIContext context;
        public GradesController(IRAAPIContext context)
        {
            this.context = context;
        }
        [Authorize]
        [HttpGet]
        public Object GetGradeDetails(Guid studentId, Guid classId, Guid subjectId,  Guid gradeTypeId, Guid sessionId)
        {
            try
            {
                int studentNumericId = context.Students.Where(a => a.Guid == studentId)
                    .Select(a => a.Id)
                    .SingleOrDefault();
                int classNumericId = context.Classes.Where(c => c.Guid == classId)
                    .Select(c => c.Id)
                    .SingleOrDefault();
                int subjectNumericId = context.Subjects.Where(s => s.Guid == subjectId)
                    .Select(s => s.Id)
                    .SingleOrDefault();
                int gradeTypeNumericId = context.GradeTypes.Where(g => g.Guid == gradeTypeId)
                    .Select(g => g.Id)
                    .SingleOrDefault();
                int sessionNumericId = context.Sessions.Where(s => s.Guid == sessionId)
                    .Select(s => s.Id)
                    .SingleOrDefault();

                var gradesData = context.Grades.Where(a => a.StudentId == studentNumericId && a.ClassId == classNumericId && a.SubjectId == subjectNumericId && a.SessionId == sessionNumericId && a.GradeTypeId == gradeTypeNumericId)
                    .OrderByDescending(p => p.GradeDate)
                    .Select(p => new GradeDTO()
                    {
                        id = p.Guid,
                        gradeDate = Convert.ToDateTime(p.GradeDate).ToString("MM/d/yyyy"),
                        totalMarks = p.TotalMarks,
                        obtainedMarks = p.ObtainedMarks,
                        gradeTitle = p.GradeTitle,
                        remarks = p.Remarks
                    })
                    .ToList();
                if (gradesData == null)
                    return NotFound();

                return new { Grades = gradesData };

            }
            catch (Exception)
            {

                throw;
            }
        }
    }

    public class GradeDTO
    {
        public Guid id { get; set; }
        public string gradeDate { get; set; }
        public int totalMarks { get; set; }
        public int obtainedMarks { get; set; }
        public string gradeTitle { get; set; }
        public string remarks { get; set; }
        
    }
}
