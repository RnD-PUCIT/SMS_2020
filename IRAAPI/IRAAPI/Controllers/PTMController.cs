using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IRAAPI.Dtos;
using IRAAPI.Models;
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
                meeting.Guid = new Guid();

                foreach (var item in model.Participants)
                {
                    int parentId = await _context.Parents.Where(p => p.Guid == item.ParentId).Select(p => p.Id).SingleAsync();

                    meeting.PTMParticipants.Add(
                        new PTMParticipants
                        {
                            Link = item.Link,
                            Date = item.Date,
                            StartTime = item.StartTime,
                            Duration = item.Duration,
                            ParentId = parentId,
                            Guid = new Guid()
                        }
                    );
                }

                _context.PTMs.Add(meeting);
                var result = await _context.SaveChangesAsync() > 0;

                if (!result)
                    return Ok();
            }
            catch (System.Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }

            return NotFound();
        }
    }
}