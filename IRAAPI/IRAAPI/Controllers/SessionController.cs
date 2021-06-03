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
    public class SessionController : ControllerBase
    {
        private readonly IRAAPIContext _context;

        public SessionController(IRAAPIContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("getSessionsList")]
        public async Task<ActionResult<List<Session>>> GetSessionsList()
        {
            return await _context.Sessions.ToListAsync();
        }

        [HttpGet]
        public async Task<ActionResult> CreateSession(SessionDto model)
        {
            Session session = new Session
            {
                SessionYear = model.SessionYear
            };

            await _context.Sessions.AddAsync(session);
            bool result = await _context.SaveChangesAsync() > 0;

            if (!result)
                return StatusCode(StatusCodes.Status500InternalServerError);

            return Ok();
        }
    }
}
