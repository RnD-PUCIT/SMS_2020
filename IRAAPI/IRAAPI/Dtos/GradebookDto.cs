using System;
using System.Collections.Generic;

namespace IRAAPI.Dtos
{
    public class GradebookDto
    {
        public Guid Id { get; set; }
        public string TestType { get; set; }
        public List<GradeActivityDto> Activities { get; set; }
    }
}