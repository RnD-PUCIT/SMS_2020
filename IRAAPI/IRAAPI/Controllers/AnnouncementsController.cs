using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IRAAPI.Models;
using Microsoft.AspNetCore.Authorization;
using AutoMapper;


namespace IRAAPI.Controllers
{

    [Route("announcements")]
    [ApiController]
    public class AnnouncementsController : ControllerBase
    {
        //private readonly IRAAPIContext _context;

        private readonly IMapper _mapper;
        public AnnouncementsController(IMapper mapper)
        {
            _mapper = mapper;
        }



        IRAAPIContext _context = new IRAAPIContext();


     
     
        // GET: api/Announcements/5
        [Authorize]
        [HttpGet]

        public Object GetAnnouncement(Guid stdId, Guid clsId, Guid sesnId)
        { 
            try
            {
                List<AnnouncementDTO> InstAnnouncementList = new List<AnnouncementDTO>();
                List<AnnouncementDTO> ClassAnnouncementList = new List<AnnouncementDTO>();
                List<AnnouncementDTO> StudentAnnouncementList = new List<AnnouncementDTO>();
             
                int studentId=   _context.Students.Where(a => a.Guid == stdId).Select(a => a.Id).SingleOrDefault();
              int classId=_context.Classes.Where(a => a.Guid == clsId).Select(a=>a.Id).SingleOrDefault();
                int sessionId = _context.Sessions.Where(a => a.Guid == sesnId).Select(a => a.Id).SingleOrDefault();

                var institutionAnnouncments = _context.Announcements.Where(a => a.SessionId == sessionId && a.ClassId == null && a.StudentId == null).ToList();
              InstAnnouncementList = _mapper.Map<List<AnnouncementDTO>>(institutionAnnouncments);


              var classAnnouncments = _context.Announcements.Where(a => a.SessionId == sessionId && a.ClassId == classId && a.StudentId == null).ToList();    
              ClassAnnouncementList = _mapper.Map<List<AnnouncementDTO>>(classAnnouncments);

              var studentAnnouncments = _context.Announcements.Where(a => a.SessionId == sessionId && a.ClassId == classId && a.StudentId == studentId).ToList();
              StudentAnnouncementList = _mapper.Map<List<AnnouncementDTO>>(studentAnnouncments); ;
              AnnouncementsObjects rr = new AnnouncementsObjects { classs = ClassAnnouncementList, stdnt = StudentAnnouncementList, ins = InstAnnouncementList };

                return rr;
            }
            catch(Exception )
            {
                return BadRequest("Announcements may not exist");
            }



        }

        private object AnnouncementsObjects(List<AnnouncementDTO> instAnnouncementList, List<AnnouncementDTO> clAnn, List<AnnouncementDTO> stdAnn)
        {
            throw new NotImplementedException();
        }



        // PUT: api/Announcements/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAnnouncement(int id, Announcement announcement)
        {
            if (id != announcement.Id)
            {
                return BadRequest();
            }

            _context.Entry(announcement).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AnnouncementExists(id))
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

        // POST: api/Announcements
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        //[HttpPost]
        //public async Task<ActionResult<Announcement>> PostAnnouncement(Announcement announcement)
        //{
        //    _context.Announcements.Add(announcement);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction("GetAnnouncement", new { id = announcement.Id }, announcement);
        //}

        // DELETE: api/Announcements/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Announcement>> DeleteAnnouncement(int id)
        {
            var announcement = await _context.Announcements.FindAsync(id);
            if (announcement == null)
            {
                return NotFound();
            }

            _context.Announcements.Remove(announcement);
            await _context.SaveChangesAsync();

            return announcement;
        }

        private bool AnnouncementExists(int id)
        {
            return _context.Announcements.Any(e => e.Id == id);
        }
    }

    public class AnnouncementsObjects
    {
        public List<AnnouncementDTO> ins { get; set; }
        public List<AnnouncementDTO> classs { get; set; }
        public List<AnnouncementDTO> stdnt { get; set; }
    }

}
