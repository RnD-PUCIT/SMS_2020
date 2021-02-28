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
            SeedUsers(context, userManager);
            SeedTerms(context);
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

        private static void SeedUsers(IRAAPIContext context, UserManager<ApplicationUser> userManager)
        {
            SeedTeachers(context, userManager);
        }

        private static void SeedTeachers(IRAAPIContext context, UserManager<ApplicationUser> userManager)
        {
            // Seed Teacher Data
            if (userManager.FindByNameAsync("sohaib").Result == null)
            {
                // Create list of teachers
                List<TeacherRegisterModel> list = new List<TeacherRegisterModel>
                {
                     new TeacherRegisterModel
                     {
                        teacher = new Teacher
                        {
                            FirstName = "Iftikhar",
                            LastName = "BUtt",
                            Cnic = "1234567890112",
                            Dob = new DateTime(1980, 01, 12).Date,
                            Email = "iftikhar.butt@ira.com",
                            Address = "Lahore",
                            ContactPrimary = "",
                            Specialization = "Computer Science",
                            JoiningDate = DateTime.Now.Date,
                            Salary = 70000
                         },
                        aspNetUser = new RegisterModel
                        {
                            Username = "iftikhar.butt",
                            Email = "iftikhar.butt@ira.com",
                            Password = "Password@123",
                            Role = "Teacher",
                        }
                     },
                     new TeacherRegisterModel
                     {
                        teacher = new Teacher
                        {
                            FirstName = "Nadeem",
                            LastName = "Abbass",
                            Cnic = "3214567890112",
                            Dob = new DateTime(1980, 12, 31).Date,
                            Email = "nadeem.abbass@ira.com",
                            Address = "Lahore",
                            ContactPrimary = "",
                            Specialization = "Maths",
                            JoiningDate = DateTime.Now.Date,
                            Salary = 65000
                         },
                        aspNetUser = new RegisterModel
                        {
                            Username = "nadeem.abbass",
                            Email = "nadeem@ira.com",
                            Password = "Password@123",
                            Role = "Teacher",
                        }
                     },
                     new TeacherRegisterModel
                     {
                        teacher = new Teacher
                        {
                            FirstName = "Imran",
                            LastName = "Afzal",
                            Cnic = "321456789752",
                            Dob = new DateTime(1975, 8, 31).Date,
                            Email = "imran.afzal@ira.com",
                            Address = "Lahore",
                            ContactPrimary = "",
                            Specialization = "Physics",
                            JoiningDate = DateTime.Now.Date,
                            Salary = 45000
                         },
                        aspNetUser = new RegisterModel
                        {
                            Username = "imran.afzal",
                            Email = "imran.afzal@ira.com",
                            Password = "Password@123",
                            Role = "Teacher",
                        }
                     },
                     new TeacherRegisterModel
                     {
                        teacher = new Teacher
                        {
                            FirstName = "Samshad",
                            LastName = "Sheikh",
                            Cnic = "321402789752",
                            Dob = new DateTime(1975, 8, 31).Date,
                            Email = "samshad.sheikh@ira.com",
                            Address = "Lahore",
                            ContactPrimary = "",
                            Specialization = "English",
                            JoiningDate = DateTime.Now.Date,
                            Salary = 55000
                         },
                        aspNetUser = new RegisterModel
                        {
                            Username = "samshad.sheikh",
                            Email = "samshad.sheikh@ira.com",
                            Password = "Password@123",
                            Role = "Teacher",
                        }
                     },
                     new TeacherRegisterModel
                     {
                        teacher = new Teacher
                        {
                            FirstName = "Muhammad",
                            LastName = "Tahir",
                            Cnic = "321402797152",
                            Dob = new DateTime(1975, 8, 31).Date,
                            Email = "muhammad.tahir@ira.com",
                            Address = "Lahore",
                            ContactPrimary = "",
                            Specialization = "Urdu",
                            JoiningDate = DateTime.Now.Date,
                            Salary = 55000
                         },
                        aspNetUser = new RegisterModel
                        {
                            Username = "muhammad.tahir",
                            Email = "muhammad.tahir@ira.com",
                            Password = "Password@123",
                            Role = "Teacher",
                        }
                     },
                };

                // Add each teacher to Db
                foreach (var model in list)
                {
                    CreateASPNetUser(userManager, model.aspNetUser);
                    context.Teachers.Add(model.teacher);
                    context.SaveChanges();
                }
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

        private static void SeedTerms(IRAAPIContext context)
        {
            List<Terms> terms = new List<Terms>
            {
                new Terms { Name = "First Term" },
                new Terms { Name = "Second Term" },
                new Terms { Name = "Third Term" },
            };
            context.AddRange(terms);
            context.SaveChanges();
        }
    }
}
