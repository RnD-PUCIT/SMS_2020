using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IRAAPI.Models;

namespace IRAAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseOutlinesController : ControllerBase
    {
        private readonly IRAAPIContext _context;

        public CourseOutlinesController(IRAAPIContext context)
        {
            _context = context;
        }

        // GET: api/CourseOutlines
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CourseOutline>>> GetCourseOutlines()
        {
            return await _context.CourseOutlines.ToListAsync();
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
        public async Task<ActionResult<CourseOutline>> PostCourseOutline(CourseOutline courseOutline)
        {
            _context.CourseOutlines.Add(courseOutline);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCourseOutline", new { id = courseOutline.Id }, courseOutline);
        }

        // DELETE: api/CourseOutlines/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<CourseOutline>> DeleteCourseOutline(int id)
        {
            var courseOutline = await _context.CourseOutlines.FindAsync(id);
            if (courseOutline == null)
            {
                return NotFound();
            }

            _context.CourseOutlines.Remove(courseOutline);
            await _context.SaveChangesAsync();

            return courseOutline;
        }

        private bool CourseOutlineExists(int id)
        {
            return _context.CourseOutlines.Any(e => e.Id == id);
        }
    }
}
