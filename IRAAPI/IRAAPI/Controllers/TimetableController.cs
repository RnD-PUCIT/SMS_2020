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
        private readonly IRAAPIContext context;
        public TimetableController(IRAAPIContext context)
        {
            this.context = context;
        }

        [Authorize]
        [HttpGet]
        public Object GetTimeTable(Guid classId, Guid sessionId)
        {
            try
            {
                int classNumericId = context.Classes.Where(c => c.Guid == classId)
                    .Select(c => c.Id)
                    .SingleOrDefault();
                int sessionNumericId = context.Sessions.Where(s => s.Guid == sessionId)
                    .Select(s => s.Id)
                    .SingleOrDefault();

                ClassInfoDTO classInfo = context.Classes.Where(c => c.Id == classNumericId)
                    .Select(s => new ClassInfoDTO
                    {
                        name = s.ClassName,
                        section = s.Section
                    }).FirstOrDefault();

                List<Days> dayData = context.Days.ToList();
                List<TimetableInfoDTO> timetableInfo = new List<TimetableInfoDTO>();

                foreach (var day in dayData)
                {
                    List<ScheduleDTO> scheduleList = context.TimeTables.Where(a => a.ClassId == classNumericId && a.SessionId == sessionNumericId && a.DayId == day.Id)
                        .Select(s=> new ScheduleDTO
                        {
                            subjectName = s.Subject.SubjectName,
                            teacherName = (context.TeacherSubjectAllocs.Where(t => t.SubjectId == s.SubjectId && t.ClassId == s.ClassId).Select(a => a.Teacher).FirstOrDefault()).FirstName + " " + (context.TeacherSubjectAllocs.Where(t => t.SubjectId == s.SubjectId).Select(a => a.Teacher).FirstOrDefault()).LastName,
                            timeSlot = s.TimeSlot
                        })
                        .ToList();
                    TimetableInfoDTO timeTableInfoSingleObject = new TimetableInfoDTO();
                    timeTableInfoSingleObject.dayName = day.Day;
                    timeTableInfoSingleObject.schedule = scheduleList;

                    timetableInfo.Add(timeTableInfoSingleObject);

                }

                TimetableMainDTO timeTableData = new TimetableMainDTO();
                timeTableData.classInfo = classInfo;
                timeTableData.timeTableInfo = timetableInfo;

                if (timeTableData == null)
                    return NotFound();

                return new { TimeTable = timeTableData };
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
    public class TimetableMainDTO
    {

        public ClassInfoDTO classInfo { get; set; }
        public List<TimetableInfoDTO> timeTableInfo { get; set; }
    }

    public class ClassInfoDTO
    {
        public string name { get; set; }
        public string section { get; set; }
    }

    public class TimetableInfoDTO
    {
        public string dayName { get; set; }
        public List<ScheduleDTO> schedule { get; set; }
    }

    public class ScheduleDTO
    {
        public string subjectName { get; set; }
        public string teacherName { get; set; }
        public string timeSlot { get; set; }
    }
}
