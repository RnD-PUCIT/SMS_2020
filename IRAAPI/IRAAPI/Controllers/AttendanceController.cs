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
        public Object GetAttendance(int studentId, int classId)
        {
            var claims = User.Claims;
            var parentId = claims.Where(p => p.Type == "parent_id").FirstOrDefault()?.Value;
            if (parentId == null)
                return Unauthorized();

            VerifierBLL verifier = new VerifierBLL();
            if (!(verifier.VerifyStudentByParentId(Convert.ToInt32(parentId), studentId) && verifier.VerifyClassByStudentId(studentId, classId)))
                return Unauthorized();

            List<Attendance> attendances = new AttendanceBLL().GetAttendance(studentId, classId);
            if (attendances == null)
            {
                return NotFound();
            }
            return attendances;
        }
    }
}
