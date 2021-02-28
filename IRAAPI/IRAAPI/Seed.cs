using IRAAPI.Authentication;
using IRAAPI.Models;
using Microsoft.AspNetCore.Identity;
using System;

namespace IRAAPI
{
    public class Seed
    {
        public static void SeedData(IRAAPIContext context, UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            SeedRoles(roleManager);
            SeedUsers(context, userManager);
        }

        private static void SeedRoles(RoleManager<IdentityRole> roleManager)
        {
            // Create Parent Role
            if (!roleManager.RoleExistsAsync("Parent").Result)
                roleManager.CreateAsync(new IdentityRole("Parent")).Wait();

            // Create Teacher Role
            if (!roleManager.RoleExistsAsync("Teacher").Result)
                roleManager.CreateAsync(new IdentityRole("Teacher")).Wait();

        }

        private static void SeedUsers(IRAAPIContext context, UserManager<ApplicationUser> userManager)
        {
            SeedTeachers(context, userManager);
        }

        private static void SeedTeachers(IRAAPIContext context, UserManager<ApplicationUser> userManager)
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

                CreateASPNetUser(userManager, model.aspNetUser);
                
                context.Teachers.Add(model.teacher);
                context.SaveChanges();
            }
        }

        private static void CreateASPNetUser(UserManager<ApplicationUser> userManager, RegisterModel model)
        {
            ApplicationUser user = new ApplicationUser()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.Username
            };

            var result = userManager.CreateAsync(user, model.Password).Result;

            if (result.Succeeded)
                userManager.AddToRoleAsync(user, model.Role).Wait();
        }
    }
}
