using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using IRAAPI.Models;
using AutoMapper;

namespace IRAAPI.Controllers
{
    [Route("subjects")]
    [ApiController]
    public class SubjectsController : ControllerBase
    {
        private readonly IRAAPIContext context;
        private readonly IMapper _mapper;
        public SubjectsController(IRAAPIContext context, IMapper mapper)
        {
            this.context = context;
            _mapper = mapper;
        }

        [Authorize]
        [HttpGet]
        public Object GetDashboardSubjectsInfo()
        {
            var claims = User.Claims;
            var parentId = claims.Where(p => p.Type == "parent_id").FirstOrDefault()?.Value;
            if (parentId == null)
                return NotFound();
            Guid parentGuid = Guid.Parse(parentId);

            try
            {
                int parentNumericId = context.Parents.Where(p => p.Guid == parentGuid)
                    .Select(p => p.Id)
                    .SingleOrDefault();

                var parentData = context.Parents.Where(p => p.Guid == parentGuid)
                    .Select(p => new ParentDTO()
                    {
                        id = p.Guid,
                        firstName = p.FirstName,
                        lastName = p.LastName,
                        profilePic = p.ProfilePicture

                    }).SingleOrDefault();

                var studentsData = context.Students.Where(s => s.ParentId == parentNumericId && s.IsActive == true)
                    .OrderBy(s => s.Class.ClassName)
                    .Select(s => new StudentDTO()
                    {
                        id = s.Guid,
                        rollNo = s.RollNo,
                        firstName = s.FirstName,
                        lastName = s.LastName,
                        dob = Convert.ToDateTime(s.Dob).ToString("MM/d/yyyy"),
                        classId = context.Classes.Where(c => c.Id == s.ClassId).Select(s => s.Guid).SingleOrDefault(),
                        className = context.Classes.Where(c => c.Id == s.ClassId).Select(s => s.ClassName).SingleOrDefault(),
                        section = context.Classes.Where(c => c.Id == s.ClassId).Select(s => s.Section).SingleOrDefault(),
                        sessionId = s.Session.Guid,
                        sessionYear = s.Session.SessionYear,
                        isActive = s.IsActive,
                        profilePic = s.ProfilePicture

                    })
                    .ToList();
                List<Object> subjectsList = new List<Object>();
                foreach (var student in studentsData)
                {
                    var classNumericId = context.Classes.Where(c => c.Guid == student.classId)
                        .Select(s => s.Id).SingleOrDefault();

                    var subjectsIds = context.ClassSubjectAllocs.Where(c => c.ClassId == classNumericId).Select(s => s.SubjectId).ToList();

                    List<SubjectDTO> oneStudentSubjectsList = new List<SubjectDTO>();
                    foreach (var subjectId in subjectsIds)
                    {
                        int teacherNumericId = context.TeacherSubjectAllocs.Where(ts => ts.SubjectId == subjectId && ts.ClassId == classNumericId).Select(t => t.TeacherId).SingleOrDefault();
                        var teacherData = context.Teachers.Where(t => t.Id == teacherNumericId).SingleOrDefault();
                        var subjectData = context.Subjects.Where(s => s.Id == subjectId).
                            Select(sb => new SubjectDTO()
                            {
                                subjectId = sb.Guid,
                                subjectCode = sb.SubjectCode,
                                subjectName = sb.SubjectName,
                                subjectSlug = sb.SubjectSlug,
                                teacherId = teacherData.Guid,
                                teacherName = teacherData.FirstName + " " + teacherData.LastName,

                            }).SingleOrDefault();
                        oneStudentSubjectsList.Add(subjectData);
                    }
                    subjectsList.Add(oneStudentSubjectsList);
                }

                DashboardDTO dashboard = new DashboardDTO();
                dashboard.parentInfo = parentData;
                dashboard.students = studentsData;
                dashboard.subjects = subjectsList;

                return new { Dashboard = dashboard };
            }
            catch (Exception)
            {

                throw;
            }


        }
        [Authorize]
        [HttpGet("{subject-name}")]
        public Object GetGradeTypesAndDiary(Guid studentId, Guid classId, Guid subjectId, Guid sessionId)
        {
            var claims = User.Claims;
            var parentId = claims.Where(p => p.Type == "parent_id").FirstOrDefault()?.Value;
            if (parentId == null)
                return Unauthorized();

            try
            {


                int studentNumericId = context.Students.Where(a => a.Guid == studentId)
                    .Select(a => a.Id)
                    .SingleOrDefault();
                int classNumericId = context.Classes.Where(c => c.Guid == classId)
                    .Select(c => c.Id)
                    .SingleOrDefault();
                int subjectNumericId = context.Subjects.Where(s => s.Guid == subjectId)
                    .Select(s => s.Id)
                    .SingleOrDefault();
                int sessionNumericId = context.Sessions.Where(s => s.Guid == sessionId)
                    .Select(s => s.Id)
                    .SingleOrDefault();
                if (subjectNumericId == 0 || classNumericId == 0 || sessionNumericId == 0)
                {
                    return CreatedAtAction("Not Found", null);
                }
                List<CourseOutlinesWithFiles> ListOfCourseOutlinesWithFiles = new List<CourseOutlinesWithFiles>();
                List<CourseOutlinesWithFiles> ListOfCourseOutlinesWithFiles2 = new List<CourseOutlinesWithFiles>();
                List<CourseOutlinesWithFiles> ListOfCourseOutlinesWithFiles3 = new List<CourseOutlinesWithFiles>();


                List<CourseOutline> ListOfCourseOutlines = context.CourseOutlines.Where(a => a.SessionId == sessionNumericId && a.ClassId == classNumericId && a.SubjectId == subjectNumericId).ToList();
                CourseOutlinesWithFiles sowf = new CourseOutlinesWithFiles();
                List<TermWiseCourseOutlinesWithFiles> listOfTermWiseCourseOutlineWithFile = new List<TermWiseCourseOutlinesWithFiles>();

                if (ListOfCourseOutlines == null)
                {
                    listOfTermWiseCourseOutlineWithFile = null;
                }
                else
                {
                    for (int i = 0; i < ListOfCourseOutlines.Count; i++)
                    {
                        if (ListOfCourseOutlines[i].TermsId == 1)
                        {
                            sowf.courseOutlines = _mapper.Map<CourseOutlineDTO>(ListOfCourseOutlines[i]);
                            List<LectureContentFileDTO> getlectureContentFilesLists = _mapper.Map<List<LectureContentFileDTO>>(context.LectureContentFiles.Where(a => a.CourseOutlineId == ListOfCourseOutlines[i].Id).ToList());


                            sowf.lectureContentFilesList = getlectureContentFilesLists;
                            ListOfCourseOutlinesWithFiles.Add(new CourseOutlinesWithFiles { courseOutlines = sowf.courseOutlines, lectureContentFilesList = sowf.lectureContentFilesList });
                        }
                        if (ListOfCourseOutlines[i].TermsId == 2)
                        {
                            sowf.courseOutlines = _mapper.Map<CourseOutlineDTO>(ListOfCourseOutlines[i]);
                            List<LectureContentFileDTO> getlectureContentFilesLists = _mapper.Map<List<LectureContentFileDTO>>(context.LectureContentFiles.Where(a => a.CourseOutlineId == ListOfCourseOutlines[i].Id).ToList());


                            sowf.lectureContentFilesList = getlectureContentFilesLists;
                            ListOfCourseOutlinesWithFiles2.Add(new CourseOutlinesWithFiles { courseOutlines = sowf.courseOutlines, lectureContentFilesList = sowf.lectureContentFilesList });
                        }
                        if (ListOfCourseOutlines[i].TermsId == 3)
                        {
                            sowf.courseOutlines = _mapper.Map<CourseOutlineDTO>(ListOfCourseOutlines[i]);
                            List<LectureContentFileDTO> getlectureContentFilesLists = _mapper.Map<List<LectureContentFileDTO>>(context.LectureContentFiles.Where(a => a.CourseOutlineId == ListOfCourseOutlines[i].Id).ToList());


                            sowf.lectureContentFilesList = getlectureContentFilesLists;
                            ListOfCourseOutlinesWithFiles3.Add(new CourseOutlinesWithFiles { courseOutlines = sowf.courseOutlines, lectureContentFilesList = sowf.lectureContentFilesList });
                        }

                        //sowf.courseOutlines = _mapper.Map<CourseOutlineDTO>(ListOfCourseOutlines[i]);
                        //List<LectureContentFileDTO> getlectureContentFilesLists = _mapper.Map<List<LectureContentFileDTO>>(_context.LectureContentFiles.Where(a => a.CourseOutlineId == ListOfCourseOutlines[i].Id).ToList());


                        //sowf.lectureContentFilesList = getlectureContentFilesLists;
                        //ListOfCourseOutlinesWithFiles.Add(new CourseOutlinesWithFiles { courseOutlines=sowf.courseOutlines,lectureContentFilesList=sowf.lectureContentFilesList});

                    }
                    TermWiseCourseOutlinesWithFiles firstTerm = new TermWiseCourseOutlinesWithFiles { termName = "First term", term_wiseCourseOutlineWithFiles = ListOfCourseOutlinesWithFiles };
                    TermWiseCourseOutlinesWithFiles secondTerm = new TermWiseCourseOutlinesWithFiles { termName = "Second term", term_wiseCourseOutlineWithFiles = ListOfCourseOutlinesWithFiles2 };
                    TermWiseCourseOutlinesWithFiles ThirdTerm = new TermWiseCourseOutlinesWithFiles { termName = "Third term", term_wiseCourseOutlineWithFiles = ListOfCourseOutlinesWithFiles3 };

                    listOfTermWiseCourseOutlineWithFile.Add(firstTerm);
                    listOfTermWiseCourseOutlineWithFile.Add(secondTerm);
                    listOfTermWiseCourseOutlineWithFile.Add(ThirdTerm);

                }



                int teacherNumericId = context.TeacherSubjectAllocs.Where(ts => ts.SubjectId == subjectNumericId && ts.ClassId == classNumericId)
                    .Select(t => t.TeacherId).SingleOrDefault();
                var teacherData = context.Teachers.Where(t => t.Id == teacherNumericId).SingleOrDefault();
                var subjectData = context.Subjects.Where(s => s.Id == subjectNumericId)
                    .Select(sb => new SubjectDTO()
                    {
                        subjectId = sb.Guid,
                        subjectCode = sb.SubjectCode,
                        subjectName = sb.SubjectName,
                        subjectSlug = sb.SubjectSlug,
                        teacherId = teacherData.Guid,
                        teacherName = teacherData.FirstName + " " + teacherData.LastName,

                    }).SingleOrDefault();

                var gradeTypesData = context.SubjectGradeTypeAllocs.Where(g => g.ClassId == classNumericId && g.SubjectId == subjectNumericId)
                    .Select(g => new GradeTypeDTO()
                    {
                        gradeTypeId = g.GradeType.Guid,
                        gradeTypeName = g.GradeType.GradeType1,
                        gradeTypeSlug = g.GradeType.GradeTypeSlug

                    }).ToList();

                var diaryData = context.Diaries.Where(d => d.SubjectId == subjectNumericId && d.SessionId == sessionNumericId && d.ClassId == classNumericId)
                    .Select(d => new DiaryDTO()
                    {
                        id = d.Guid,
                        diaryDate = Convert.ToDateTime(d.DiaryDate).ToString("MM/d/yyyy"),
                        diaryTitle = d.DiaryTitle,
                        diaryContent = d.DiaryContent
                    }).ToList();


                SubjectServiceDTO subjectService = new SubjectServiceDTO();
                subjectService.subject = subjectData;
                subjectService.gradeTypeNames = gradeTypesData;
                subjectService.diary = diaryData;
                subjectService.termWiseCourseOutlinesfromCourseContent = listOfTermWiseCourseOutlineWithFile;

                return new { SubjectService = subjectService };

            }
            catch (Exception)
            {
                throw;
            }

        }
    }

    public class SubjectServiceDTO
    {
        public SubjectDTO subject { get; set; }
        public List<GradeTypeDTO> gradeTypeNames { get; set; }
        public List<DiaryDTO> diary { get; set; }
        public List<TermWiseCourseOutlinesWithFiles> termWiseCourseOutlinesfromCourseContent { get; set; }


    }

    public class GradeTypeDTO
    {
        public Guid gradeTypeId { get; set; }
        public string gradeTypeName { get; set; }
        public string gradeTypeSlug { get; set; }
    }

    public class DiaryDTO
    {
        public Guid id { get; set; }
        public string diaryDate { get; set; }
        public string diaryTitle { get; set; }
        public string diaryContent { get; set; }
    }
    public class ParentDTO
    {
        public Guid id { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string profilePic { get; set; }
    }

    public class StudentDTO
    {
        public Guid id { get; set; }
        public string rollNo { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string dob { get; set; }
        public Guid classId { get; set; }
        public string className { get; set; }
        public string section { get; set; }
        public Guid sessionId { get; set; }
        public string sessionYear { get; set; }
        public bool isActive { get; set; }
        public string profilePic { get; set; }
    }

    public class DashboardDTO
    {
        public ParentDTO parentInfo { get; set; }
        public List<StudentDTO> students { get; set; }
        public List<Object> subjects { get; set; }
    }
    public class SubjectDTO
    {
        public Guid subjectId { get; set; }
        public string subjectCode { get; set; }
        public string subjectName { get; set; }
        public string subjectSlug { get; set; }
        public Guid teacherId { get; set; }
        public string teacherName { get; set; }
    }


}
