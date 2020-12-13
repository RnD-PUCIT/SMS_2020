using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using IRAAPI.BLL;
using IRAAPI.COMMON;
using IRAAPI.Models;


namespace IRAAPI.Controllers
{
    [Route("attendance")]
    [ApiController]
    public class AttendanceController : ControllerBase
    {
        [Authorize]
        [HttpGet]
        public Object GetAttendance(Guid studentId, Guid classId, Guid sessionId)
        {
            var claims = User.Claims;
            var parentId = claims.Where(p => p.Type == "parent_id").FirstOrDefault()?.Value;
            if (parentId == null)
                return Unauthorized();
            
            using IRAAPIContext context = new IRAAPIContext();

            try
            {
                int studentNumericId = context.Students.Where(a => a.Guid == studentId)
                    .Select(a => a.Id)
                    .SingleOrDefault();
                int classNumericId = context.Classes.Where(c => c.Guid == classId)
                    .Select(c => c.Id)
                    .SingleOrDefault();
                int sessionNumericId = context.Sessions.Where(s => s.Guid == sessionId)
                    .Select(s => s.Id)
                    .SingleOrDefault();

                var attendanceData = context.Attendances.Where(a => a.StudentId == studentNumericId && a.ClassId == classNumericId && a.SessionId == sessionNumericId)
                    .OrderBy(p => p.AttendanceDate)
                    .Select(p => new AttendanceDTO()
                    {
                        id = p.Guid,
                        attendanceDate = Convert.ToDateTime(p.AttendanceDate).ToString("MM/d/yyyy"),
                        status = p.Status
                    })
                    .ToList();
                
                if (attendanceData == null)
                    return NotFound();

                return new { Attendance = attendanceData };

            }
            catch (Exception)
            {

                throw;
            }

            //List<Attendance> attendances = new AttendanceBLL().GetAttendance(studentId, classId);
            //if (attendances == null)
            //    return NotFound();

            //return new AttendanceDTO(attendances);
        }
    }

    public class AttendanceDTO
    {
        public Guid id { get; set; }
        public string attendanceDate { get; set; }
        public string status { get; set; }
    }
}
