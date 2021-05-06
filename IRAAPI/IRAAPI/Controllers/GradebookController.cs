using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IRAAPI.Dtos;
using IRAAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace IRAAPI.Controllers
{
    public class GradebookController : ControllerBase
    {
        private readonly IRAAPIContext _context;
        public GradebookController(IRAAPIContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Authorize(Roles = "Teacher")]
        [Route("getGradebookActivities")]
        public async Task<ActionResult<List<GradebookDto>>> GetGradebookActivities(Guid classId, Guid subjectId)
        {
            int classIdNumeric = await _context.Classes.Where(c => c.Guid == classId).Select(c => c.Id).SingleOrDefaultAsync();
            List<GradebookDto> gradebook = null;


            return gradebook;
        }
    }
}