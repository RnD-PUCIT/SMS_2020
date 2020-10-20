using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
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
        [HttpGet("{subject-name}")]
        public Object GetGradeTypesAndDiary(int studentId, int classId, int subjectId)
        {
            List<Diary> diary = new DiaryBLL().GetDiary(classId, subjectId);
            if(diary == null)
            {
                return NotFound();
            }
            List<GradeType> gradeTypeNames = new GradeBLL().GetGradeTypes(classId, subjectId);
            if (gradeTypeNames == null)
            {
                return NotFound();
            }
            List<Object> data = new List<object>();
            data.Add(gradeTypeNames);
            data.Add(diary);
            return data;
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
