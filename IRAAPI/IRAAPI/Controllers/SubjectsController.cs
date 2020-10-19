using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Filters;
using System.IO;
using IRAAPI.BLL;
using IRAAPI.COMMON;


namespace IRAAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubjectsController : ControllerBase
    {

        [Authorize]
        [HttpGet("subjects")]
        public Object Subjects()
        {
            var claims = User.Claims;
            var parentId = claims.Where(p => p.Type == "parent_id").FirstOrDefault()?.Value;
            Parent parent = new ParentBLL().GetParentInfoById(Convert.ToInt32(parentId));
            return parent;
        }


        //[Authorize]
        //[HttpGet("subjects")]
        //public Object Subjects(int std_id, int class_id, int subj_id)
        //{
        //  return 1;
        //}

    }
}
