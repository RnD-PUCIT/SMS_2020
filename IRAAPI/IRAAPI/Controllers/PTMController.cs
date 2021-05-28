using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IRAAPI.Dtos;
using IRAAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace IRAAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PTMController : ControllerBase
    {
        private readonly IRAAPIContext _context;

        public PTMController(IRAAPIContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("createPTM")]
        public async Task<ActionResult> CreatePTM(PTMDto model)
        {
            var claims = User.Claims;

            var userId = claims.Where(p => p.Type == "userId").FirstOrDefault()?.Value;

            if (userId == null)
                return NotFound();

            Guid teacherGuid = Guid.Parse(userId);

            try
            {
                // Get teacher id
                int teacherId = await _context.Teachers.Where(t => t.UserId == teacherGuid)
                .Select(t => t.Id)
                .SingleOrDefaultAsync();

                // Get class id
                int classId = await _context.Classes
                .Where(c => c.Guid == model.ClassId)
                .Select(c => c.Id).SingleAsync();


                PTM meeting = new PTM();
                meeting.PTMParticipants = new List<PTMParticipants>();

                meeting.Title = model.Title;
                meeting.TeacherId = teacherId;
                meeting.ClassId = classId;
                meeting.Guid = Guid.NewGuid();

                foreach (var item in model.Participants)
                {
                    int parentId = await _context.Parents.Where(p => p.Guid == item.ParentId).Select(p => p.Id).SingleAsync();

                    meeting.PTMParticipants.Add(
                        new PTMParticipants
                        {
                            Link = "ira-" + Guid.NewGuid().ToString(),
                            Date = item.Date,
                            StartTime = item.StartTime,
                            Duration = item.Duration,
                            ParentId = parentId,
                            Guid = Guid.NewGuid()
                        }
                    );
                }

                _context.PTMs.Add(meeting);
                var result = await _context.SaveChangesAsync() > 0;

                if (!result)
                    return StatusCode(StatusCodes.Status503ServiceUnavailable);
            }
            catch (System.Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }

            return Ok();
        }

        [HttpGet]
        [Route("getTeacherMeetings")]
        [Authorize(Roles = "Teacher")]
        public async Task<ActionResult<List<MeetingDto>>> GetTeacherMeetings()
        {
            var claims = User.Claims;

            var userId = claims.Where(p => p.Type == "userId").FirstOrDefault()?.Value;

            if (userId == null)
                return NotFound();

            Guid teacherGuid = Guid.Parse(userId);

            int teacherId = 0;

            try
            {
                // Get teacher id
                teacherId = await _context.Teachers.Where(t => t.UserId == teacherGuid)
                .Select(t => t.Id)
                .SingleOrDefaultAsync();
            }
            catch (System.Exception ex)
            {
                Console.WriteLine(ex);
            }

            List<MeetingDto> meetings = new List<MeetingDto>();

            List<PTM> ptms = await _context.PTMs.Include(p => p.Class)
            .Where(p => p.TeacherId == teacherId).ToListAsync();

            if (ptms == null)
                return NotFound();

            foreach (var ptm in ptms)
            {
                List<PTMParticipants> participants = await _context.PTMParticipants
                .Include(p => p.Parent).Where(p => p.PTMId == ptm.Id)
                .ToListAsync();

                foreach (var participant in participants)
                {
                    meetings.Add(new MeetingDto
                    {
                        Id = participant.Guid,
                        Title = ptm.Title,
                        Date = participant.Date,
                        StartTime = participant.StartTime,
                        Link = participant.Link,
                        ParticipantId = participant.Parent.Guid,
                        ParticipantName = participant.Parent.FirstName + " " + participant.Parent.LastName,
                        Class = new ClassDto
                        {
                            Id = ptm.Guid,
                            ClassName = ptm.Class.ClassName,
                            Section = ptm.Class.Section
                        }
                    });
                }
            }

            return meetings;
        }
    }
}