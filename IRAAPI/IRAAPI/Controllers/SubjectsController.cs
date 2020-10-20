using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Filters;
using System.IO;
using IRAAPI.BLL;
using IRAAPI.COMMON;


namespace IRAAPI.Controllers
{
    [Route("subjects")]
    [ApiController]
    public class SubjectsController : ControllerBase
    {
        [Authorize]
        [HttpGet]
        public Object GetDashboardSubjectsInfo()
        {
            var claims = User.Claims;
            var parentId = claims.Where(p => p.Type == "parent_id").FirstOrDefault()?.Value;
            Parent parent = new ParentBLL().GetParentInfoById(Convert.ToInt32(parentId));
            if(parent == null)
            {
                return NotFound();
            }
            
            ParentDTO parentDTO = new ParentDTO(parent.id, parent.firstName, parent.lastName, parent.profilePic);
            
            List<Student> students = new StudentBLL().GetStudentsByParentId(Convert.ToInt32(parentId));
            if(students == null)
            {
                return NotFound();
            }

            List<Object> subjectsList = new List<Object>();
            for (int i = 0; i < students.Count; i++)
            {
                List<Subject> subjects = new List<Subject>();
                subjects = new SubjectBLL().GetSubjectsDetailsByClassId(students[i].classId);
                if (subjects == null)
                {
                    return NotFound();
                }
                subjectsList.Add(subjects);
            }

            List<Object> data = new List<Object>();
            data.Add(parentDTO);
            data.Add(students);
            data.Add(subjectsList);
            if (data == null)
            {
                return NotFound();
            }
            return new { dashboard = data };
        }

        [Authorize]
        [HttpGet("{subject-name}/grades/{grade-type}")]
        public Object GetGradeTypes(int std_id, int class_id, int subj_id)
        {
            return 1;
        }

        
    }
    
    public class ParentDTO
    {
        public int id { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string profilePic { get; set; }
        public ParentDTO(int id, string firstName, string lastName, string profilePic)
        {
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.profilePic = profilePic;
        }
    }
}
