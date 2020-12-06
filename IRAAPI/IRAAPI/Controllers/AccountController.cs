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
using IRAAPI.BLL;
using IRAAPI.COMMON;
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
                var parentData = context.ParentLogins.Where(a => a.Cnic == cnic).SingleOrDefault();
                if (parentData != null)
                {
                    passwordVerified = BCrypt.Net.BCrypt.Verify(password, parentData.Password);
                    if (passwordVerified)
                    {
                        return getToken(parentData.Id);
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


            //int parentId = new ParentBLL().VerifyParent(cnic, password);

            //if ( parentId == -1)
            //{
            //    return BadRequest("Invalid Credentials");

            //}
            //else if (parentId == -2)
            //{
            //    return NotFound();
            //}
            //else
            //{
            //    return getToken(parentId);
            //}            
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

            return new { token = jwt_token };
        }
    }
}
