using IRAAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IRAAPI.Authentication
{
    public class ParentRegisterModel
    {
        public Parent parent { get; set; }
        public RegisterModel registerModel { get; set; }
    }
}
