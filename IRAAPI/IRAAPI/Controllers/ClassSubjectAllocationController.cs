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
    public class ClassSubjectAllocationController : ControllerBase
    {
        private readonly IRAAPIContext _context;

        public ClassSubjectAllocationController(IRAAPIContext context)
        {
            _context = context;
        }

        // GET: api/ClassSubjectAllocation
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ClassSubjectAlloc>>> GetClassSubjectAllocs()
        {
            return await _context.ClassSubjectAllocs.ToListAsync();
        }

        // GET: api/ClassSubjectAllocation/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ClassSubjectAlloc>> GetClassSubjectAlloc(int id)
        {
            var classSubjectAlloc = await _context.ClassSubjectAllocs.FindAsync(id);

            if (classSubjectAlloc == null)
            {
                return NotFound();
            }

            return classSubjectAlloc;
        }

        // PUT: api/ClassSubjectAllocation/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClassSubjectAlloc(int id, ClassSubjectAlloc classSubjectAlloc)
        {
            if (id != classSubjectAlloc.Id)
            {
                return BadRequest();
            }

            _context.Entry(classSubjectAlloc).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClassSubjectAllocExists(id))
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

        // POST: api/ClassSubjectAllocation
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ClassSubjectAlloc>> CreateClassSubjectAlloc(ClassSubjectAllocDTO classsubjectAlloc)
        {
            if(classsubjectAlloc==null)
            {
                return CreatedAtAction("Request Not Valid", BadRequest());
            }
      
            ClassSubjectAlloc class_subject_alloc = new ClassSubjectAlloc();
            for(int i=0;i<classsubjectAlloc.subject_ids.Count;i++)
            {
                
                class_subject_alloc.ClassId = classsubjectAlloc.class_id;
                class_subject_alloc.SubjectId = classsubjectAlloc.subject_ids[i];
       
                _context.ClassSubjectAllocs.Add(class_subject_alloc);
                await _context.SaveChangesAsync();


            }
            // _context.ClassSubjectAllocs.Add(classSubjectAlloc);

            return CreatedAtAction("200 OK",class_subject_alloc);
            //return CreatedAtAction("GetClassSubjectAlloc", new { id = classSubjectAlloc.Id }, classSubjectAlloc);
        }

        // DELETE: api/ClassSubjectAllocation/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ClassSubjectAlloc>> DeleteClassSubjectAlloc(int id)
        {
            var classSubjectAlloc = await _context.ClassSubjectAllocs.FindAsync(id);
            if (classSubjectAlloc == null)
            {
                return NotFound();
            }

            _context.ClassSubjectAllocs.Remove(classSubjectAlloc);
            await _context.SaveChangesAsync();

            return classSubjectAlloc;
        }

        private bool ClassSubjectAllocExists(int id)
        {
            return _context.ClassSubjectAllocs.Any(e => e.Id == id);
        }
    }
    public class ClassSubjectAllocDTO
    {
        public int class_id { get; set; }
        public List<int> subject_ids { get; set; }
    }
}
