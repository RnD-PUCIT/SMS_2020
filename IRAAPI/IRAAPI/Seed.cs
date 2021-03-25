using IRAAPI.Authentication;
using IRAAPI.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;

namespace IRAAPI
{
    public class Seed
    {

        public static void SeedData(IRAAPIContext context, UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            SeedRoles(roleManager);
            SeedAdmin(context, userManager);
        }

        private static void SeedAdmin(IRAAPIContext context, UserManager<ApplicationUser> userManager)
        {
            if(userManager.FindByNameAsync("admin").Result == null)
            {
                CreateASPNetUser(userManager,
                    new RegisterModel
                    {
                        Username = "admin",
                        Email = "admin@ira.com",
                        Password = "Password@123",
                        Role = "Admin"
                    });
                Admin admin = new Admin
                {
                    FirstName = "Admin",
                    LastName = "Admin",
                    Email = "admin@ira.com",
                    Cnic = "1234-1231231-1",
                    Address = "Lahore",
                    ContactPrimary = "03164141068",
                };
                context.Admins.Add(admin);
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

        private static void SeedRoles(RoleManager<IdentityRole> roleManager)
        {
            // Create List of Roles
            List<string> roles = new List<string>
            {
                "Admin",
                "Teacher",
                "Parent",
                "Student",
            };

            // Add each role in DB
            foreach (string role in roles)
            {
                if (!roleManager.RoleExistsAsync(role).Result)
                    roleManager.CreateAsync(new IdentityRole(role)).Wait();
            }
        }
    }
}
