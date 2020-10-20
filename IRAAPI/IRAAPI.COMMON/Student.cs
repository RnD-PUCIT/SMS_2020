using System;

namespace IRAAPI.COMMON
{
    public class Student
    {   
        public int id { get; set; }
        public string rollNo { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string dob { get; set; }
        public int parentId { get; set; }
        public int classId { get; set; }
        public string className { get; set; }
        public string section { get; set; }
        public bool isActive { get; set; }
        public string profilePic { get; set; }
    }
}
