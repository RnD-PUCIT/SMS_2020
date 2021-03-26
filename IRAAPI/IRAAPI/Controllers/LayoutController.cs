using IRAAPI.Dtos;
using IRAAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace IRAAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class LayoutController : ControllerBase
    {
        private readonly IRAAPIContext _context;

        public LayoutController(IRAAPIContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<UserInfoDto>> UserInfo()
        {
            var claims = User.Claims;
            string claimID = claims.Where(u => u.Type == "userId").FirstOrDefault()?.Value;
            if (claimID == null)
                return Unauthorized();

            Guid guid = Guid.Parse(claimID);
            string role = claims.Where(u => u.Type == ClaimTypes.Role).FirstOrDefault()?.Value;

            UserInfoDto userInfoDto = new UserInfoDto();

            if (role.Trim().ToLower() == "parent")
            {
                int parentNumericId = await _context.Parents.Where(p => p.UserId == guid)
                    .Select(p => p.Id)
                    .SingleOrDefaultAsync();

                Parent parentData = await _context.Parents.SingleOrDefaultAsync(p => p.UserId == guid);

                if (parentData == null)
                    return NotFound();

                userInfoDto.Id = parentData.UserId;
                userInfoDto.FirstName = parentData.FirstName;
                userInfoDto.LastName = parentData.LastName;
                userInfoDto.ProfilePic = parentData.ProfilePicture;
            }
            else if (role.Trim().ToLower() == "teacher")
            {
                int teacherNumericId = await _context.Teachers.Where(p => p.UserId == guid)
                    .Select(p => p.Id)
                    .SingleOrDefaultAsync();

                Teacher teacherData = await _context.Teachers.SingleOrDefaultAsync(p => p.UserId == guid);

                if (teacherData == null)
                    return NotFound();

                userInfoDto.Id = teacherData.UserId;
                userInfoDto.FirstName = teacherData.FirstName;
                userInfoDto.LastName = teacherData.LastName;
                userInfoDto.ProfilePic = teacherData.ProfilePicture;
            }
            return userInfoDto;
        }
    }
}
