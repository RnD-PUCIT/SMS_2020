using IRAAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IRAAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DiaryController : ControllerBase
    {
        private readonly IRAAPIContext context;
        public DiaryController(IRAAPIContext context)
        {
            this.context = context;
        }

        //[HttpPost]
        //public async Task<Object> CreateDiary(Diary diary)
        //{

        //}
    }
}
