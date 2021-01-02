using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using IRAAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace IRAAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class StudentApplicationController : ControllerBase
    {
        private readonly IRAAPIContext _db;
        private readonly IWebHostEnvironment _web;
        StudentApplicationController(IRAAPIContext db, IWebHostEnvironment web)
        {
            _db = db;
            _web = web;
        }

        [Authorize]
        [HttpPost]
        public async Task<Object> CreateApplication(IFormCollection form)
        {
            try
            {
                StudentApplication studentApplication = new StudentApplication();
                //I will use thid guid to get id of application after inerting data in StudentApplications Table
                Guid applicationGuid = Guid.NewGuid();
                studentApplication.guid = applicationGuid;

                var studentGuid = JsonConvert.DeserializeObject<Guid>(form["studentId"]);
                studentApplication.Subject = JsonConvert.DeserializeObject<string>(form["subjectLine"].ToString());
                studentApplication.Content = JsonConvert.DeserializeObject<string>(form["applicationBody"].ToString());
                var startDate = JsonConvert.DeserializeObject<DateTime>(form["startDate"].ToString());
                var endDate = JsonConvert.DeserializeObject<DateTime>(form["endDate"].ToString());

                var studentNumericId = _db.Students.Where(s => s.Guid == studentGuid).Select(s => s.Id).FirstOrDefault();
                studentApplication.StudentId = studentNumericId;

                if (startDate != null && endDate != null)
                {
                    studentApplication.StartDate = startDate;
                    studentApplication.EndDate = endDate;
                }

                await _db.StudentApplications.AddRangeAsync(studentApplication);
                await _db.SaveChangesAsync();

                var applicationId = _db.StudentApplications.Where(a => a.guid == applicationGuid).Select(a => a.Id).FirstOrDefault();

                var files = Request.Form.Files;
                string logicalFilename, fileExtension;
                if (files != null)
                {
                    string UploadFolder = Path.Combine(_web.WebRootPath, "Students_Applications");

                    if (!Directory.Exists(UploadFolder))
                    {
                        Directory.CreateDirectory(UploadFolder);
                    }
                    foreach (var file in files)
                    {
                        StudentApplicationFile studentApplicationFile = new StudentApplicationFile();

                        fileExtension = System.IO.Path.GetExtension(file.FileName);
                        logicalFilename = Guid.NewGuid().ToString() + "_" + file.FileName + fileExtension;
                        string filePath = Path.Combine(UploadFolder, logicalFilename);
                        file.CopyTo(new FileStream(filePath, FileMode.Create));

                        studentApplicationFile.OrignalName = file.FileName;
                        studentApplicationFile.LogicalName = logicalFilename;
                        studentApplicationFile.Path = filePath;
                        studentApplicationFile.ApplicationId = applicationId;
                        studentApplicationFile.Extension = fileExtension;
                        studentApplicationFile.Size = file.Length;

                        await _db.StudentApplicationFiles.AddRangeAsync(studentApplicationFile);
                        await _db.SaveChangesAsync();
                    }
                }
                return "Success" ;
            }
            catch (Exception e)
            {
                return "Error, Something went wrong \n" + e;
            }
        }
    }
}