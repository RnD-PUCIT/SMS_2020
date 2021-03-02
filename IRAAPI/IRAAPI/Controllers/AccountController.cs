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
using Microsoft.AspNetCore.Identity;
using IRAAPI.Authentication;

namespace IRAAPI.Controllers
{
    [ApiController]
    [Route("account")]
    public class AccountController : ControllerBase
    {
        private readonly IRAAPIContext context;
        private readonly UserManager<ApplicationUser> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        public AccountController(IRAAPIContext context, UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            this.context = context;
            this.userManager = userManager;
            this.roleManager = roleManager;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login()
        {
            var username = HttpContext.Request.Form["username"];
            var password = HttpContext.Request.Form["password"];
            var user = await userManager.FindByNameAsync(username);
            if (user != null && await userManager.CheckPasswordAsync(user, password))
            {
                var userRoles = await userManager.GetRolesAsync(user);

                var authClaims = new List<Claim>
                {
                    new Claim("userId", user.Id),
                    new Claim("userName", user.UserName),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                };

                foreach (var userRole in userRoles)
                {
                    authClaims.Add(new Claim(ClaimTypes.Role, userRole));
                    authClaims.Add(new Claim("role", userRole));
                }

                string key = "ADSTZ_1226404119";
                var issuer = "http://ira.com";
                var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
                var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
                var token = new JwtSecurityToken(issuer,
                            issuer,
                            authClaims,
                            expires: DateTime.Now.AddDays(1),
                            signingCredentials: credentials);
                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token),
                    expiration = token.ValidTo
                });
            }
            return Unauthorized();
        }

        [HttpPost]
        [Route("registerStudent")]
        public async Task<IActionResult> RegisterStudent([FromBody] StudentRegisterModel model)
        {
            var aspNetUser = await RegisterAspNetUser(model.aspNetUser);
            if (aspNetUser != null)
            {
                model.student.UserId = Guid.Parse(aspNetUser);
                await context.Students.AddAsync(model.student);
                await context.SaveChangesAsync();
                return Ok(new Response { Status = "Success", Message = "User created successfully!" });
            }
            return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Something went wrong!" });
        }

        [HttpPost]
        [Route("registerTeacher")]
        public async Task<IActionResult> RegisterTeacher([FromBody] TeacherRegisterModel model)
        {
            var aspNetUser = await RegisterAspNetUser(model.aspNetUser);
            if (aspNetUser != null)
            {
                model.teacher.UserId = Guid.Parse(aspNetUser);
                await context.Teachers.AddAsync(model.teacher);
                await context.SaveChangesAsync();
                return Ok(new Response { Status = "Success", Message = "User created successfully!" });
            }
            return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Something went wrong!" });
        }

        [HttpPost]
        [Route("registerParent")]
        public async Task<IActionResult> RegisterParent([FromBody] ParentRegisterModel model)
        {
            var aspNetUser = await RegisterAspNetUser(model.aspNetUser);
            if ( aspNetUser!= null)
            {
                model.parent.UserId = Guid.Parse(aspNetUser);
                await context.Parents.AddAsync(model.parent);
                await context.SaveChangesAsync();
                return Ok(new Response { Status = "Success", Message = "User created successfully!" });
            }
            return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Something went wrong!" });
        }

        [NonAction]
        public async Task<string> RegisterAspNetUser(RegisterModel model)
        {
            var userExists = await userManager.FindByNameAsync(model.Username);
            if (userExists != null)
                return null;

            ApplicationUser user = new ApplicationUser()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.Username
            };
            var result = await userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
                return null;

            if (!await roleManager.RoleExistsAsync(model.Role))
            {
                await roleManager.CreateAsync(new IdentityRole(model.Role));
            }
            await userManager.AddToRoleAsync(user, model.Role);
            return user.Id;
        }

        [HttpPost]
        [Route("createRole")]
        public async Task<IActionResult> CreateRole([FromBody] string role)
        {
            try
            {
                if (!await roleManager.RoleExistsAsync(role))
                    await roleManager.CreateAsync(new IdentityRole(role));
                else
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Role already exists!" });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = ex.ToString() });
            }
            return Ok(new Response { Status = "Success", Message = "Role created successfully!" });
        }
    }
}
