using IRAAPI.Authentication;
using IRAAPI.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;

namespace IRAAPI
{
    public class Seed
    {
        public static void SeedData(IRAAPIContext context, UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            SeedRoles(roleManager);
            SeedUsers(context, userManager);

            SeedClasses(context);
            SeedTerms(context);
            SeedDays(context);
            SeedBankDetails(context);

            // Add Admin user
            CreateASPNetUser(userManager,
                new RegisterModel
                {
                    Username = "admin",
                    Email = "admin@ira.com",
                    Password = "Password@123",
                    Role = "Admin"
                },
                true);
        }

        private static void SeedBankDetails(IRAAPIContext context)
        {
            if(!context.BankDetails.Any())
            {
                BankDetail bankDetail = new BankDetail
                {
                    BankName = "Bank Al Habib",
                    BankBranch = "Mall Road, Lahore",
                    AccountNo = 12345
                };
                context.Add(bankDetail);
                context.SaveChanges();
            }
        }

        private static void SeedClasses(IRAAPIContext context)
        {
            if(!context.Classes.Any())
            {
                List<Class> classes = new List<Class>
                {
                    new Class {ClassName = "8th", Section = "Blue"},
                    new Class {ClassName = "8th", Section = "Red"},
                    new Class {ClassName = "9th", Section = "Blue"},
                    new Class {ClassName = "9th", Section = "Red"},
                    new Class {ClassName = "10th", Section = "Blue"},
                    new Class {ClassName = "10th", Section = "Red"},
                };
                context.Classes.AddRange(classes);
                context.SaveChanges();
            }
        }

        private static void SeedDays(IRAAPIContext context)
        {
            if(!context.Days.Any())
            {
                List<Days> days = new List<Days>
                {
                    new Days {Day = "Monday"},
                    new Days {Day = "Tuesday"},
                    new Days {Day = "Wednesday"},
                    new Days {Day = "Thursday"},
                    new Days {Day = "Friday"},
                    new Days {Day = "Saturday"},
                    new Days {Day = "Sunday"},
                };

                context.AddRange(days);
                context.SaveChanges();
            }
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
            if (userManager.FindByNameAsync("admin").Result == null)
            {
                SeedTeachers(context, userManager);
            }
        }

        private static void SeedTeachers(IRAAPIContext context, UserManager<ApplicationUser> userManager)
        {
            // Seed Teacher Data

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

        private static void CreateASPNetUser(UserManager<ApplicationUser> userManager, RegisterModel model, bool isDefaultUser = false)
        {
            if (isDefaultUser)
            {
                /*
                    Check if the user to be created is default or not.
                    If it is default, then check that if it already exists in DB
                    or not. If it exists, then we will not create another default user,
                    and simply return.
                 */
                if (userManager.FindByNameAsync("admin").Result != null)
                    return;
            }
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
            if (!context.Terms.Any())
            {
                List<Terms> terms = new List<Terms>
                {
                    new Terms { Name = "First Term", Guid = Guid.NewGuid() },
                    new Terms { Name = "Second Term", Guid = Guid.NewGuid() },
                    new Terms { Name = "Third Term", Guid = Guid.NewGuid() },
                };
                context.AddRange(terms);
                context.SaveChanges();
            }
        }
    }
}
