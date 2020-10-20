using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Filters;
using System.IO;
using IRAAPI.BLL;
using IRAAPI.COMMON;


namespace IRAAPI.Controllers
{

    [ApiController]
    [Route("login")]
    public class LoginController : ControllerBase
    { 
        [HttpPost]
        public Object Login()
        {
            string cnic = HttpContext.Request.Form["cnic"];
            string pass = HttpContext.Request.Form["pass"];
            int parentId = new ParentBLL().VerifyParent(cnic, pass);
            //Password Hashing 
            if ( parentId == -1)
            {
                return BadRequest("Invalid Credentials");
            }
            else if (parentId == -2)
            {
                return NotFound();
            }
            else
            {
                return getToken(parentId);
            }
            
        }

        [NonAction]
        public Object getToken(int parentId)
        {
            string key = "ADSTZ_1226404119";
            var issuer = "http://ira.com";
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var permClaims = new List<Claim>();
            permClaims.Add(new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()));
            permClaims.Add(new Claim("parent_id", parentId.ToString()));
            

            var token = new JwtSecurityToken(issuer,
                            issuer,
                            permClaims,
                            expires: DateTime.Now.AddDays(1),
                            signingCredentials: credentials);
            var jwt_token = new JwtSecurityTokenHandler().WriteToken(token);

            return new { data = jwt_token };
        }
    }
}
