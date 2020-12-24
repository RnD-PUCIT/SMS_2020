using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IRAAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IRAAPI.Controllers
{
    [Route("timetable")]
    [ApiController]
    public class TimetableController : ControllerBase
    {
        [Authorize]
        [HttpGet]
        public Object GetTimeTable(Guid classId, Guid sessionId)
        {
            var claims = User.Claims;
            var parentId = claims.Where(p => p.Type == "parent_id").FirstOrDefault()?.Value;
            if (parentId == null)
                return Unauthorized();

            using IRAAPIContext context = new IRAAPIContext();

            try
            {
                int classNumericId = context.Classes.Where(c => c.Guid == classId)
                    .Select(c => c.Id)
                    .SingleOrDefault();
                int sessionNumericId = context.Sessions.Where(s => s.Guid == sessionId)
                    .Select(s => s.Id)
                    .SingleOrDefault();

                var timetableData = context.TimeTables.Where(a => a.ClassId == classNumericId && a.SessionId == sessionNumericId)
                    .OrderBy(p => p.DayId)
                    .Select(p => new TimetableDTO
                    {
                        id = p.guid,
                        day = p.Day.Day,
                        subject = p.Subject.SubjectName,
                        teacher = (context.TeacherSubjectAllocs.Where(t=> t.SubjectId == p.SubjectId && t.ClassId == p.ClassId).Select(a=> a.Teacher)).FirstOrDefault().FirstName + " " + (context.TeacherSubjectAllocs.Where(t => t.SubjectId == p.SubjectId).Select(a => a.Teacher)).FirstOrDefault().LastName,
                        timeSlot = p.TimeSlot
                    })
                    .ToList();

                if (timetableData == null)
                    return NotFound();

                return new { Timetable = timetableData };
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
    public class TimetableDTO
    {
        public Guid id { get; set; }
        public string day { get; set; }
        public string subject { get; set; }
        public string teacher { get; set; }
        public string timeSlot { get; set; }
    }
}
