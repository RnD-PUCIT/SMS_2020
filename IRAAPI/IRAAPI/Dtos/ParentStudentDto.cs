
using System;

namespace IRAAPI.Dtos
{
    public class ParentStudentDto
    {
        public Guid ParentId { get; set; }
        public string ParentName { get; set; }
        public string ParentPicture { get; set; }
        public string StudentName { get; set; }
        public string StudentRollNumber { get; set; }
    }
}