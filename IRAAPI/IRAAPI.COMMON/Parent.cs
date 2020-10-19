using System;
using System.ComponentModel.DataAnnotations;

namespace IRAAPI.COMMON
{
    public class Parent
    {
        public int id { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public string email { get; set; }
        public string cnic { get; set; }
        public string address { get; set; }
        public string contact_primary { get; set; }
        public string contact_secondary { get; set; }
        public string occupation { get; set; }
        public string job_address { get; set; }
        public string profile_pic { get; set; }
    }
}
