using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using IRAAPI.BLL;
using IRAAPI.COMMON;

namespace IRAAPI.Controllers
{
    [Route("attendance")]
    [ApiController]
    public class AttendanceController : ControllerBase
    {
        [Authorize]
        [HttpGet]
        public Object GetAttendance(int std_id, int class_id)
        {
            List<Attendance> attendances = new AttendanceBLL().GetAttendance(std_id, class_id);
            if (attendances == null)
            {
                return NotFound();
            }
            return attendances;
        }
    }
}
