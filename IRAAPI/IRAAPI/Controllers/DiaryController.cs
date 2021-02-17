using IRAAPI.Authentication;
using IRAAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IRAAPI.Controllers
{
    [Route("diary")] 
    [ApiController]
    public class DiaryController : ControllerBase
    {
        private readonly IRAAPIContext context;
        public DiaryController(IRAAPIContext context)
        {
            this.context = context;
        }

        [HttpPost]
        public async Task<IActionResult> CreateDiary([FromBody] Diary diary)
        {
            try
            {
                if (diary != null)
                {
                    diary.DiaryDate  = DateTime.Now; ;
                    await context.Diaries.AddAsync(diary);
                    await context.SaveChangesAsync();
                    return Ok(new Response { Status = "Success", Message = "Diary created successfully!"  });
                }
                return BadRequest(new Response { Status = "Error", Message = "Content is null" });
            }
            catch (Exception ex)
            {

                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = ex.ToString() });
            }
            
            
        }
    }
}
