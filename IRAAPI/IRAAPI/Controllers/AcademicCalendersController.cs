using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IRAAPI.Models;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;

namespace IRAAPI.Controllers
{
    [Route("academiccalender")]
    [ApiController]
    public class AcademicCalendersController : ControllerBase
    {
        private readonly IRAAPIContext _context = new IRAAPIContext();

        private readonly IMapper _mapper;
        public AcademicCalendersController(IMapper mapper)
        {
            _mapper = mapper;
        }

        
        // GET: api/AcademicCalenders/5
        [Authorize]
        [HttpGet]
        public Object GetAcademicCalender(int session_id)
        {
            List<AcademicCalender> academicCalender =  _context.AcademicCalenders.Where(a=>a.SessionId==session_id).ToList();

            if (academicCalender == null)
            {
                return NotFound();
            }
            List<AcademicCalenderDTO> academicCalenderListforsession = _mapper.Map<List<AcademicCalenderDTO>>(academicCalender);

            return academicCalenderListforsession;
        }

        // PUT: api/AcademicCalenders/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAcademicCalender(int id, AcademicCalender academicCalender)
        {
            if (id != academicCalender.Id)
            {
                return BadRequest();
            }

            _context.Entry(academicCalender).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AcademicCalenderExists(id))
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

        // POST: api/AcademicCalenders
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<AcademicCalender>> PostAcademicCalender(AcademicCalender academicCalender)
        {
            _context.AcademicCalenders.Add(academicCalender);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAcademicCalender", new { id = academicCalender.Id }, academicCalender);
        }

        // DELETE: api/AcademicCalenders/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<AcademicCalender>> DeleteAcademicCalender(int id)
        {
            var academicCalender = await _context.AcademicCalenders.FindAsync(id);
            if (academicCalender == null)
            {
                return NotFound();
            }

            _context.AcademicCalenders.Remove(academicCalender);
            await _context.SaveChangesAsync();

            return academicCalender;
        }

        private bool AcademicCalenderExists(int id)
        {
            return _context.AcademicCalenders.Any(e => e.Id == id);
        }
    }
}
