using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IRAAPI.Models;
using Microsoft.AspNetCore.Hosting;
using System.IO;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;

namespace IRAAPI.Controllers
{
    [Route("course-outline")]
    [ApiController]
    public class CourseOutlinesController : ControllerBase
    {
        private readonly IRAAPIContext _context;
        private readonly IWebHostEnvironment _web;
        private readonly IMapper _mapper;

        public CourseOutlinesController(IRAAPIContext context, IWebHostEnvironment web, IMapper mapper)
        {
            _context = context;
            _web = web;
            _mapper = mapper;
        }


        // GET: api/CourseOutlines
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CourseOutline>>> GetCourseOutlines(Guid subject_id, Guid class_id, Guid session_id)
        {
            int subjectId = _context.Subjects.Where(a => a.Guid == subject_id).Select(a => a.Id).SingleOrDefault();
            int classId = _context.Classes.Where(a => a.Guid == class_id).Select(a => a.Id).SingleOrDefault();
            int sessiontId = _context.Sessions.Where(a => a.Guid == session_id).Select(a => a.Id).SingleOrDefault();
            if (subjectId == 0 || classId == 0 || sessiontId == 0)
            {
                return CreatedAtAction("Not Found", null);
            }
            List<CourseOutlinesWithFiles> ListOfCourseOutlinesWithFiles = new List<CourseOutlinesWithFiles>();
            List<CourseOutlinesWithFiles> ListOfCourseOutlinesWithFiles2 = new List<CourseOutlinesWithFiles>();
            List<CourseOutlinesWithFiles> ListOfCourseOutlinesWithFiles3 = new List<CourseOutlinesWithFiles>();


            List<CourseOutline> ListOfCourseOutlines = _context.CourseOutlines.Where(a => a.SessionId == sessiontId && a.ClassId == classId && a.SubjectId == subjectId).ToList();
            CourseOutlinesWithFiles sowf = new CourseOutlinesWithFiles();


            if (ListOfCourseOutlines == null)
            {
                return CreatedAtAction("Course Outlines Not found", null);
            }
            for (int i = 0; i < ListOfCourseOutlines.Count; i++)
            {
                if (ListOfCourseOutlines[i].TermsId == 1)
                {
                    sowf.courseOutlines = _mapper.Map<CourseOutlineDTO>(ListOfCourseOutlines[i]);
                    List<LectureContentFileDTO> getlectureContentFilesLists = _mapper.Map<List<LectureContentFileDTO>>(_context.LectureContentFiles.Where(a => a.CourseOutlineId == ListOfCourseOutlines[i].Id).ToList());


                    sowf.lectureContentFilesList = getlectureContentFilesLists;
                    ListOfCourseOutlinesWithFiles.Add(new CourseOutlinesWithFiles { courseOutlines = sowf.courseOutlines, lectureContentFilesList = sowf.lectureContentFilesList });
                }
                if (ListOfCourseOutlines[i].TermsId == 2)
                {
                    sowf.courseOutlines = _mapper.Map<CourseOutlineDTO>(ListOfCourseOutlines[i]);
                    List<LectureContentFileDTO> getlectureContentFilesLists = _mapper.Map<List<LectureContentFileDTO>>(_context.LectureContentFiles.Where(a => a.CourseOutlineId == ListOfCourseOutlines[i].Id).ToList());


                    sowf.lectureContentFilesList = getlectureContentFilesLists;
                    ListOfCourseOutlinesWithFiles2.Add(new CourseOutlinesWithFiles { courseOutlines = sowf.courseOutlines, lectureContentFilesList = sowf.lectureContentFilesList });
                }
                if (ListOfCourseOutlines[i].TermsId == 3)
                {
                    sowf.courseOutlines = _mapper.Map<CourseOutlineDTO>(ListOfCourseOutlines[i]);
                    List<LectureContentFileDTO> getlectureContentFilesLists = _mapper.Map<List<LectureContentFileDTO>>(_context.LectureContentFiles.Where(a => a.CourseOutlineId == ListOfCourseOutlines[i].Id).ToList());


                    sowf.lectureContentFilesList = getlectureContentFilesLists;
                    ListOfCourseOutlinesWithFiles3.Add(new CourseOutlinesWithFiles { courseOutlines = sowf.courseOutlines, lectureContentFilesList = sowf.lectureContentFilesList });
                }

            }
            TermWiseCourseOutlinesWithFiles firstTerm = new TermWiseCourseOutlinesWithFiles { termName = "First term", term_wiseCourseOutlineWithFiles = ListOfCourseOutlinesWithFiles };
            TermWiseCourseOutlinesWithFiles secondTerm = new TermWiseCourseOutlinesWithFiles { termName = "Second term", term_wiseCourseOutlineWithFiles = ListOfCourseOutlinesWithFiles2 };
            TermWiseCourseOutlinesWithFiles ThirdTerm = new TermWiseCourseOutlinesWithFiles { termName = "Third term", term_wiseCourseOutlineWithFiles = ListOfCourseOutlinesWithFiles3 };
            List<TermWiseCourseOutlinesWithFiles> listOfTermWiseCourseOutlineWithFile = new List<TermWiseCourseOutlinesWithFiles>();
            listOfTermWiseCourseOutlineWithFile.Add(firstTerm);
            listOfTermWiseCourseOutlineWithFile.Add(secondTerm);
            listOfTermWiseCourseOutlineWithFile.Add(ThirdTerm);

            return CreatedAtAction("200 OK", listOfTermWiseCourseOutlineWithFile);
        }

        // GET: api/CourseOutlines/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CourseOutline>> GetCourseOutline(int id)
        {
            var courseOutline = await _context.CourseOutlines.FindAsync(id);

            if (courseOutline == null)
            {
                return NotFound();
            }

            return courseOutline;
        }

        // PUT: api/CourseOutlines/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCourseOutline(int id, CourseOutline courseOutline)
        {
            if (id != courseOutline.Id)
            {
                return BadRequest();
            }

            _context.Entry(courseOutline).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CourseOutlineExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CourseOutlines
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<CourseOutline>> CreateCourseOutline([FromForm] OutlineDto course_outline)
        {
            try
            {
                int subjectId = _context.Subjects.Where(a => a.Guid == course_outline.SubjectId).Select(a => a.Id).SingleOrDefault();
                int classId = _context.Classes.Where(a => a.Guid == course_outline.ClassId).Select(a => a.Id).SingleOrDefault();
                int sessiontId = _context.Sessions.Where(a => a.Guid == course_outline.SessionId).Select(a => a.Id).SingleOrDefault();
                if (subjectId == 0 || classId == 0 || sessiontId == 0)
                {
                    return CreatedAtAction("Not Found", null);
                }
                CourseOutline courseOutline = new CourseOutline();

                Guid courseOutlineGuid = Guid.NewGuid();
                courseOutline.Guid = courseOutlineGuid;
                courseOutline.TermsId = course_outline.TermsId;
                courseOutline.SubjectId = subjectId;
                courseOutline.ClassId = classId;
                courseOutline.SessionId = sessiontId;
                courseOutline.Title = course_outline.Title;
                courseOutline.Description = course_outline.Description;
                courseOutline.Date = course_outline.Date;
                courseOutline.Status = course_outline.Status;
                courseOutline.References = course_outline.References;
                await _context.CourseOutlines.AddRangeAsync(courseOutline);
                await _context.SaveChangesAsync();

                var course_outline_id = _context.CourseOutlines.Where(a => a.Guid == courseOutlineGuid).Select(a => a.Id).FirstOrDefault();

                var files = Request.Form.Files;
                string logicalFilename, fileExtension;
                if (files != null)
                {
                    string UploadFolder = Path.Combine(_web.ContentRootPath, "wwwroot\\Documents");

                    if (!Directory.Exists(UploadFolder))
                    {
                        Directory.CreateDirectory(UploadFolder);
                    }
                    foreach (var file in files)
                    {
                        LectureContentFile lectureContentFile = new LectureContentFile();

                        fileExtension = System.IO.Path.GetExtension(file.FileName);
                        logicalFilename = Guid.NewGuid().ToString() + "_" + new string(Path.
                                            GetFileNameWithoutExtension(file.FileName).
                                            Take(10).
                                            ToArray()).Replace(" ", "-");

                        string filePath = Path.Combine(UploadFolder, logicalFilename + fileExtension);
                        file.CopyTo(new FileStream(filePath, FileMode.Create));
                        lectureContentFile.Path = filePath;

                        lectureContentFile.Orginal_Name = file.FileName;
                        lectureContentFile.Logical_Name = logicalFilename;
                        // lectureContentFile.ContentType = file.ContentType;
                        lectureContentFile.CourseOutlineId = course_outline_id;
                        lectureContentFile.Extension = fileExtension;
                        lectureContentFile.Size = Convert.ToInt32(file.Length);
                        lectureContentFile.Date = DateTime.Now;

                        await _context.LectureContentFiles.AddRangeAsync(lectureContentFile);
                        await _context.SaveChangesAsync();
                    }
                }
                return Ok();
            }
            catch (Exception e)
            {
                return CreatedAtAction("Something went wrong", e);
            }

        }


        //try
        //{
        //    foreach (var lfile in Files)
        //    {
        //        var file = Request.Form.Files[0];
        //        if (file != null)
        //        {
        //            string fileExtension = Path.GetExtension(file.FileName);
        //            string Documents = Path.Combine(_iwebhost.WebRootPath, "Documents");

        //            if (!Directory.Exists(Documents))
        //            {
        //                Directory.CreateDirectory(Documents);
        //            }

        //            string fileLogicalName = Guid.NewGuid().ToString() + "" + file.FileName + fileExtension;
        //            string filePath = Path.Combine(Documents, fileLogicalName);
        //            int fileSize = (int)file.Length;
        //            DateTime date = DateTime.Now;
        //            int courseoutlineid = courseOutlineObj.Id;

        //            await file.CopyToAsync(new FileStream(filePath, FileMode.Create));
        //            icfile.Orginal_Name = file.FileName;
        //            icfile.Logical_Name = fileLogicalName;
        //            icfile.Path = filePath;
        //            icfile.Date = date;
        //            icfile.Size = fileSize;
        //            icfile.CourseOutlineId = courseoutlineid;
        //            icfile.Extension = fileExtension;
        //            await _context.LectureContentFiles.AddAsync(icfile);
        //            await _context.SaveChangesAsync();

        //        }

        //    }


        //    return Ok(HttpContext.Response.StatusCode = 200);

        //}
        //catch (Exception)
        //{
        //    return CreatedAtAction("Files not saved", null);

        //}
    

    // DELETE: api/CourseOutlines/5

    [HttpDelete("{delete-course-outline}")]
    public async Task<ActionResult<CourseOutline>> DeleteCourseOutline(Guid id)
    {

        int course_outline_Id = _context.CourseOutlines.Where(a => a.Guid == id).Select(a => a.Id).SingleOrDefault();
        CourseOutline course_outline = await _context.CourseOutlines.FindAsync(course_outline_Id);
        if (course_outline == null)
        {
            return NotFound();
        }
        List<LectureContentFile> respective_content_files=_context.LectureContentFiles.Where(a => a.CourseOutlineId == course_outline_Id).ToList();
        _context.CourseOutlines.Remove(course_outline);
        await _context.SaveChangesAsync();
        if (respective_content_files.Count>0)
        {
             _context.LectureContentFiles.RemoveRange(respective_content_files);
             _context.SaveChanges();
        }
       

        return course_outline;
    }

    private bool CourseOutlineExists(int id)
    {
        return _context.CourseOutlines.Any(e => e.Id == id);
    }

    }
    public class CourseOutlinesWithFiles
    {
        public CourseOutlineDTO courseOutlines { get; set; }
        public List<LectureContentFileDTO> lectureContentFilesList { get; set; }
    }
    public class TermWiseCourseOutlinesWithFiles
    {
        public string termName { get; set; }
        public List<CourseOutlinesWithFiles> term_wiseCourseOutlineWithFiles { get; set; }
    }
    public class OutlineDto
    {
        public Guid SubjectId { get; set; }
        public Guid ClassId { get; set; }
        public Guid SessionId { get; set; }
        public int TermsId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime Date { get; set; }
        public bool Status { get; set; }
        public string References { get; set; }
        public IFormFile Files { get; set; }
    }
}
