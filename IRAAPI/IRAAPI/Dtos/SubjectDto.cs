using System;

namespace IRAAPI.Dtos
{
    public class SubjectDto
    {
        public Guid Id { get; set; }
        public string SubjectName { get; set; }
        public string SubjectCode { get; set; }
        public string SubjectSlug { get; set; }
    }
}
