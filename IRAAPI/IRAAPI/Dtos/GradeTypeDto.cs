using System;

namespace IRAAPI.Dtos
{
    public class GradeTypeDto
    {
        public Guid Id { get; set; }
        public string GradeType { get; set; }
        public string GradeTypeSlug { get; set; }
        public int ClassId { get; set; }
        public int SubjectId { get; set; }
    }
}