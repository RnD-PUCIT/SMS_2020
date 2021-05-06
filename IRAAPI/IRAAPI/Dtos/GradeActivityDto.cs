using System;

namespace IRAAPI.Dtos
{
    public class GradeActivityDto
    {
        public Guid Id { get; set; }
        public string GradeTitle { get; set; }
        public DateTime GradeDate { get; set; }
        public int TotalMarks { get; set; }
    }
}