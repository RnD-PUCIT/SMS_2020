using IRAAPI.Authentication;
using IRAAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IRAAPI
{
    public class Seed
    {
        public static void SeedData(IRAAPIContext context)
        {
            // Seed Teacher Data
            //if(!context.Teachers.Any())
            //{
            //    TeacherRegisterModel model = new TeacherRegisterModel
            //    {
            //        teacher = new Teacher
            //        {
            //            FirstName = "Sohaib",
            //            LastName = "Salman",
            //            Cnic = "1234567890112",
            //            Dob = new DateTime(1999, 01, 12).Date,
            //            Email = "sohaib@ira.com",
            //            Address = "Pak Arab",
            //            ContactPrimary = "03164141068",
            //            Specialization = "Computer Science",
            //            JoiningDate = DateTime.Now.Date,
            //            Salary = 50000
            //        },
            //        aspNetUser = new RegisterModel
            //        {
            //            Email = "sohaib@ira.com",
            //            Password = "Password@123",
            //            Role = "Teacher",
            //        }
            //    };
            //}
        }
    }
}
