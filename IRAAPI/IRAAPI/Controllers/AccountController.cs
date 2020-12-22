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
using IRAAPI.Models;


namespace IRAAPI.Controllers
{
    [ApiController]
    [Route("account")]
    public class AccountController : ControllerBase
    {
        [HttpPost("login")]
        public Object Login()
        {
            string cnic = HttpContext.Request.Form["cnic"];
            string password = HttpContext.Request.Form["password"];
            bool passwordVerified = false;

            using IRAAPIContext context = new IRAAPIContext();

            try
            {
                var parentData = context.ParentLogins.Where(a => a.Cnic == cnic)
                    .SingleOrDefault();
                if (parentData != null)
                {
                    passwordVerified = BCrypt.Net.BCrypt.Verify(password, parentData.Password);
                    if (passwordVerified)
                    {
                        return getToken(context.Parents.Where(a=> a.Id == parentData.Id).Select(a=> a.Guid).SingleOrDefault().ToString());
                    }
                    else
                    {
                        return BadRequest("Invalid Credentials");
                    }
                }
                else
                {
                    return BadRequest("User Not Registered");
                }
            }
            catch (Exception)
            {

                throw;
            }


            
        }

        [NonAction]
        public Object getToken(string parentId)
        {
            string key = "ADSTZ_1226404119";
            var issuer = "http://ira.com";
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var permClaims = new List<Claim>();
            permClaims.Add(new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()));

            permClaims.Add(new Claim("parent_id", parentId));
            



            var token = new JwtSecurityToken(issuer,
                            issuer,
                            permClaims,
                            expires: DateTime.Now.AddDays(1),
                            signingCredentials: credentials);
            var jwt_token = new JwtSecurityTokenHandler().WriteToken(token);

            return new { token = jwt_token };
        }
    }
}
