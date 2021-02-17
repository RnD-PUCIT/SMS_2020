using IRAAPI.Authentication;
using IRAAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IRAAPI.Controllers
{
    [Route("diary")] 
    [ApiController]
    public class DiaryController : ControllerBase
    {
        private readonly IRAAPIContext context;
        public DiaryController(IRAAPIContext context)
        {
            this.context = context;
        }

        [Authorize(Roles = "Teacher")]
        [HttpGet]
        public async Task<Object> GetDiaries(Guid ClassId, Guid SubjectId, Guid SessionId)
        {
            try
            {
                if (ClassId != null && SubjectId != null && SessionId != null)
                {
                    int classNumericId = context.Classes.Where(c => c.Guid == ClassId)
                        .Select(c => c.Id)
                        .SingleOrDefault();
                    int subjectNumericId = context.Subjects.Where(c => c.Guid == SubjectId)
                        .Select(c => c.Id)
                        .SingleOrDefault();
                    int sessionNumericId = context.Sessions.Where(s => s.Guid == SessionId)
                        .Select(s => s.Id)
                        .SingleOrDefault();

                    if (sessionNumericId != 0 && classNumericId != 0 && subjectNumericId != 0)
                    {
                        var diaries = await context.Diaries.Select(x => new
                        {
                            Id = x.Guid,
                            DiaryTitle = x.DiaryTitle,
                            DiaryContent = x.DiaryContent
                        }).ToListAsync();
                        return new { diary = diaries };
                    }
                    else
                    {
                        return BadRequest(new Response { Status = "Error", Message = "Invalid reference data!" });
                    }
                }
                return BadRequest(new Response { Status = "Error", Message = "Content is null!" });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = ex.ToString() });
            }
        }

        [Authorize(Roles = "Teacher")]
        [HttpPost]
        public async Task<IActionResult> CreateDiary([FromBody] DiaryDTO DiaryDTO)
        {
            try
            {
                if (DiaryDTO != null)
                {
                    int classNumericId = context.Classes.Where(c => c.Guid == DiaryDTO.ClassId)
                        .Select(c => c.Id)
                        .SingleOrDefault();
                    int subjectNumericId = context.Subjects.Where(c => c.Guid == DiaryDTO.SubjectId)
                        .Select(c => c.Id)
                        .SingleOrDefault();
                    int sessionNumericId = context.Sessions.Where(s => s.Guid == DiaryDTO.SessionId)
                        .Select(s => s.Id)
                        .SingleOrDefault();

                    if(sessionNumericId != 0 && classNumericId != 0 && subjectNumericId != 0)
                    {
                        DiaryDTO.DiaryDate = DateTime.Now;

                        Diary diary = new Diary { ClassId = classNumericId, SubjectId = subjectNumericId, SessionId = sessionNumericId, DiaryTitle = DiaryDTO.DiaryTitle, DiaryContent = DiaryDTO.DiaryContent, DiaryDate = DiaryDTO.DiaryDate };
                        await context.Diaries.AddAsync(diary);
                        await context.SaveChangesAsync();
                        return Ok(new Response { Status = "Success", Message = "Diary created successfully!" });
                    }
                    else
                    {
                        return BadRequest(new Response { Status = "Error", Message = "Invalid reference data!" });
                    }
                }
                return BadRequest(new Response { Status = "Error", Message = "Content is null!" });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = ex.ToString() });
            }
        }


        [Authorize(Roles = "Teacher")]
        [HttpPut]
        public async Task<IActionResult> EditDiary([FromBody] DiaryDTO DiaryDTO)
        {
            try
            {
                if (DiaryDTO != null)
                {
                    Diary diary = context.Diaries.FirstOrDefault(b => b.Guid == DiaryDTO.Id);
                    if(diary!=null)
                    {
                        diary.DiaryTitle = DiaryDTO.DiaryTitle;
                        diary.DiaryContent = DiaryDTO.DiaryContent;

                        context.Diaries.Update(diary);
                        await context.SaveChangesAsync();
                        return Ok(new Response { Status = "Success", Message = "Diary updated successfully!" });
                    }
                    else
                    {
                        return BadRequest(new Response { Status = "Error", Message = "Data not exists!" });
                    }
                }
                return BadRequest(new Response { Status = "Error", Message = "Content is null!" });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = ex.ToString() });
            }
        }

        [Authorize(Roles = "Teacher")]
        [HttpDelete]
        public async Task<IActionResult> DeleteDiary(Guid Id)
        {
            try
            {
                if (Id != null)
                {
                    Diary diary = context.Diaries.FirstOrDefault(b => b.Guid == Id);
                    if (diary != null)
                    {
                        context.Remove(diary);
                        await context.SaveChangesAsync();
                        return Ok(new Response { Status = "Success", Message = "Diary deleted successfully!" });
                    }
                    else
                    {
                        return BadRequest(new Response { Status = "Error", Message = "Data not exists!" });
                    }
                }
                return BadRequest(new Response { Status = "Error", Message = "Id is null!" });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = ex.ToString() });
            }
        }

        public class DiaryDTO
        {   
            public Guid Id { get; set; }
            public Guid ClassId { get; set; }
            public Guid SubjectId { get; set; }
            public Guid SessionId { get; set; }
            public DateTime DiaryDate { get; set; }
            public string DiaryTitle { get; set; }
            public string DiaryContent { get; set; }
        }
    }
}
