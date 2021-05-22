using AutoMapper;
using IRAAPI.Dtos;
using IRAAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace IRAAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TeachersController : ControllerBase
    {
        private readonly IRAAPIContext _context;
        private readonly IMapper _mapper;

        public TeachersController(IRAAPIContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("getTeachersList")]
        public async Task<ActionResult<List<Teacher>>> GetTeachersList()
        {
            return await _context.Teachers.ToListAsync();
        }

        [HttpPost]
        [Route("allocateClassAndSubjects")]

        public async Task<ActionResult> AllocateClassAndSubjects(List<TeacherSubjectAllocationDto> model)
        {
            try
            {
                var teacherSubjects = _mapper.Map<List<TeacherSubjectAlloc>>(model);

                await _context.TeacherSubjectAllocs.AddRangeAsync(teacherSubjects);
                var result = await _context.SaveChangesAsync() > 0;

                if (!result)
                    return StatusCode(StatusCodes.Status500InternalServerError);

                return Ok();
            }
            catch (System.Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
    }
}

