using IRAAPI.Authentication;
using IRAAPI.Models;
using Microsoft.AspNetCore.Identity;
using System;

namespace IRAAPI
{
    public class Seed
    {
        public static void SeedUsers(UserManager<ApplicationUser> userManager)
        {
            // Seed Teacher Data
            if (userManager.FindByNameAsync("sohaib").Result == null)
            {
                TeacherRegisterModel model = new TeacherRegisterModel
                {
                    teacher = new Teacher
                    {
                        FirstName = "Sohaib",
                        LastName = "Salman",
                        Cnic = "1234567890112",
                        Dob = new DateTime(1999, 01, 12).Date,
                        Email = "sohaib@ira.com",
                        Address = "Lahore",
                        ContactPrimary = "03164141068",
                        Specialization = "Computer Science",
                        JoiningDate = DateTime.Now.Date,
                        Salary = 50000
                    },
                    aspNetUser = new RegisterModel
                    {
                        Username = "sohaib",
                        Email = "sohaib@ira.com",
                        Password = "Password@123",
                        Role = "Teacher",
                    }
                };

                ApplicationUser user = new ApplicationUser()
                {
                    Email = model.aspNetUser.Email,
                    SecurityStamp = Guid.NewGuid().ToString(),
                    UserName = model.aspNetUser.Username
                };

                var result = userManager.CreateAsync(user, model.aspNetUser.Password).Result;

                if(result.Succeeded)
                    userManager.AddToRoleAsync(user, model.aspNetUser.Role);
            }
        }
    }
}
