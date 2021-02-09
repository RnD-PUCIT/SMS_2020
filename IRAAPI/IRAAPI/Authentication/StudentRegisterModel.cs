using IRAAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IRAAPI.Authentication
{
    public class StudentRegisterModel
    {
        public Student student { get; set; }
        public RegisterModel aspNetUser { get; set; }
    }
}
