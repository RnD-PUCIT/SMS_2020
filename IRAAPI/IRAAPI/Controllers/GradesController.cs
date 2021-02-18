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
        //Old //public Object GetGradeDetails(Guid studentId, Guid classId, Guid subjectId,  Guid gradeTypeId, Guid sessionId)
        public Object GetGradeDetails(Guid studentId, Guid gradeTypeId)//Updated
        {
            try
            {
                int studentNumericId = context.Students.Where(a => a.Guid == studentId)
                    .Select(a => a.Id)
                    .SingleOrDefault();
                int gradeTypeNumericId = context.GradeTypes.Where(g => g.Guid == gradeTypeId)
                    .Select(g => g.Id)
                    .SingleOrDefault();

                List<GradeActivity> gradeActivities = context.GradeActivities.Where(a => a.GradeTypeId == gradeTypeNumericId)
                    .OrderByDescending(p => p.GradeDate)
                    .ToList();

                List<GradeDTO> gradesData = null;
                foreach (var activity in gradeActivities)
                {
                    GradeDTO singleGradesData = null;
                    singleGradesData = context.Grades.Where(a => a.GradeActivityId == activity.Id && a.StudentId == studentNumericId)
                    .Select(p => new GradeDTO()
                    {
                        id = p.Guid,
                        gradeDate = Convert.ToDateTime(activity.GradeDate).ToString("MM/d/yyyy"),
                        totalMarks = activity.TotalMarks,
                        obtainedMarks = p.ObtainedMarks,
                        gradeTitle = activity.GradeTitle,
                        remarks = p.Remarks
                    })
                    .FirstOrDefault();
                    if (singleGradesData != null)
                        gradesData.Add(singleGradesData);
                }
                
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
