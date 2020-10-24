using Microsoft.VisualBasic.CompilerServices;
using System;
using System.Collections.Generic;
using System.Text;

namespace IRAAPI.COMMON
{
    public class Subject
    {
        public int subjectId { get; set; }
        public string subjectCode { get; set; }
        public string subjectName { get; set; }
        public string subjectSlug { get; set; }
        public int teacherId { get; set; }
        public string teacherName { get; set; }
    }
}
