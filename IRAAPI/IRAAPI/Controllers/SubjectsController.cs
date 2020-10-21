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
            if (parentId == null)
                return NotFound();

            Parent parent = new ParentBLL().GetParentInfoById(Convert.ToInt32(parentId));
            if(parent == null)
                return NotFound();
            
            ParentDTO parentDTO = new ParentDTO(parent.id, parent.firstName, parent.lastName, parent.profilePic);
            
            List<Student> students = new StudentBLL().GetStudentsByParentId(Convert.ToInt32(parentId));
            if(students == null)
                return NotFound();
            

            List<Object> subjectsList = new List<Object>();
            for (int i = 0; i < students.Count; i++)
            {
                List<Subject> subjects = new List<Subject>();
                subjects = new SubjectBLL().GetSubjectsDetailsByClassId(students[i].classId);
                if (subjects == null)
                    return NotFound();

                subjectsList.Add(subjects);
            }

            DashboardDTO dashboardDTO = new DashboardDTO(parentDTO, students, subjectsList);

            return new { dashboard = dashboardDTO};
        }

        [Authorize]
        [HttpGet("{subject-name}")]
        public Object GetGradeTypesAndDiary(int studentId, int classId, int subjectId)
        {
            var claims = User.Claims;
            var parentId = claims.Where(p => p.Type == "parent_id").FirstOrDefault()?.Value;
            if (parentId == null)
                return Unauthorized();

            VerifierBLL verifier = new VerifierBLL();
            if (!(verifier.VerifyStudentByParentId(Convert.ToInt32(parentId), studentId) && verifier.VerifyClassByStudentId(studentId, classId) && verifier.VerifySubjectByClassId(classId, subjectId)))
                return Unauthorized();

            Subject subject = new SubjectBLL().GetSubjectDetails(classId, subjectId);
            if (subject == null)
                return NotFound();

            List<GradeType> gradeTypeNames = new GradeBLL().GetGradeTypes(classId, subjectId);
            if (gradeTypeNames == null)
                return NotFound();

            List<Diary> diary = new DiaryBLL().GetDiary(classId, subjectId);
            if(diary == null)
                return NotFound();

            SubjectDTO subjectDTO = new SubjectDTO(subject, gradeTypeNames, diary);
            return new { subjectService = subjectDTO };
        }
    }

    public class DashboardDTO
    {
        public ParentDTO parentInfo { get; set; }
        public List<Student> students { get; set; }
        public List<Object> subjects { get; set; }
        public DashboardDTO(ParentDTO parentInfo, List<Student> students, List<Object> subjects)
        {
            this.parentInfo = parentInfo;
            this.students = students;
            this.subjects = subjects;
        }
    }
    public class SubjectDTO
    {
        public Subject subjectInfo { get; set; }
        public List<GradeType> gradeTypes { get; set; }
        public List<Diary> diary { get; set; }
        public SubjectDTO(Subject subjectInfo, List<GradeType> gradeTypes, List<Diary> diary)
        {
            this.subjectInfo = subjectInfo;
            this.gradeTypes = gradeTypes;
            this.diary = diary;
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
