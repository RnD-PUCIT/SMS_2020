using IRAAPI.Models;
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

        public TeachersController(IRAAPIContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("getTeachersList")]
        public async Task<ActionResult<List<Teacher>>> GetTeachersList()
        {
            return await _context.Teachers.ToListAsync();
        }
    }
}
