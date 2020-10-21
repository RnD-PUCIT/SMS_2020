using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using IRAAPI.BLL;
using IRAAPI.COMMON;


namespace IRAAPI.Controllers
{
    [Route("subjects/{subject-name}/{grade-type-name}")]
    [ApiController]
    public class GradesController : ControllerBase
    {
        [Authorize]
        [HttpGet]
        public Object GetGradeDetails(int studentId, int classId, int subjectId, int gradeTypeId)
        {
            var claims = User.Claims;
            var parentId = claims.Where(p => p.Type == "parent_id").FirstOrDefault()?.Value;
            if (parentId == null)
                return Unauthorized();

            VerifierBLL verifier = new VerifierBLL();
            if (!(verifier.VerifyStudentByParentId(Convert.ToInt32(parentId), studentId) && verifier.VerifyClassByStudentId(studentId, classId) && verifier.VerifySubjectByClassId(classId, subjectId)))
                return Unauthorized();

            List<Grade> gradeDetails = new GradeBLL().GetGradeDetails(studentId, classId, subjectId, gradeTypeId);
            if (gradeDetails == null)
                return NotFound();

            return new { grades = gradeDetails};
        }
    }

}
