using IRAAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IRAAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly IRAAPIContext _context;

        public StudentsController(IRAAPIContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("getStudentsList")]
        public async Task<ActionResult<List<Student>>> GetStudentsList()
        {
            return await _context.Students.ToListAsync();
        }
    }
}
