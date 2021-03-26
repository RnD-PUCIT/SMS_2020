using IRAAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace IRAAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SessionController : ControllerBase
    {
        private readonly IRAAPIContext _context;

        public SessionController(IRAAPIContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("getClassesList")]
        public async Task<ActionResult<List<Session>>> GetClassesList()
        {
            return await _context.Sessions.ToListAsync();
        }
    }
}
