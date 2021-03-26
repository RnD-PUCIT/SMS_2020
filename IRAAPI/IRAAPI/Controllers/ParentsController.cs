using IRAAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace IRAAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ParentsController : ControllerBase
    {
        private readonly IRAAPIContext _context;

        public ParentsController(IRAAPIContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("getParentsList")]
        public async Task<ActionResult<List<Parent>>> GetParentsList()
        {
            return await _context.Parents.ToListAsync();
        }
    }
}
