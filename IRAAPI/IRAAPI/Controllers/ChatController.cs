using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IRAAPI.Authentication;
using IRAAPI.Dtos;
using IRAAPI.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace IRAAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ChatController : ControllerBase
    {
        private readonly IRAAPIContext _context;
        private readonly UserManager<ApplicationUser> _userManager;
        public ChatController(IRAAPIContext context, UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<ContactDto>> SearchContact(string text)
        {
            var user = await _userManager.FindByNameAsync(text);

            if (user == null)
                return NotFound();

            var role = await _userManager.GetRolesAsync(user);

            ContactDto contact = null;

            if (role.Contains("Teacher"))
            {
                var teacher = await _context.Teachers.SingleOrDefaultAsync(t => t.UserId == new Guid(user.Id));
                contact = new ContactDto
                {
                    Id = teacher.UserId,
                    FirstName = teacher.FirstName,
                    LastName = teacher.LastName,
                    ProfilePic = teacher.ProfilePicture,
                    Username = user.UserName,
                };
            }

            else if (role.Contains("Parent"))
            {
                var parent = await _context.Parents.SingleOrDefaultAsync(p => p.UserId == new Guid(user.Id));
                contact = new ContactDto
                {
                    Id = parent.UserId,
                    FirstName = parent.FirstName,
                    LastName = parent.LastName,
                    ProfilePic = parent.ProfilePicture,
                    Username = user.UserName,
                };
            }

            else if (role.Contains("Admin"))
            {
                var admin = await _context.Admins.SingleOrDefaultAsync(a => a.UserId == new Guid(user.Id));
                contact = new ContactDto
                {
                    Id = admin.UserId,
                    FirstName = admin.FirstName,
                    LastName = admin.LastName,
                    ProfilePic = admin.ProfilePicture,
                    Username = user.UserName,
                };
            }

            return contact;
        }
    }
}