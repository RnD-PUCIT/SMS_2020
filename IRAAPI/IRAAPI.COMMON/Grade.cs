using System;
using System.Collections.Generic;
using System.Text;

namespace IRAAPI.COMMON
{
    public class Grade
    {
        public int id { get; set; }
        public int studentId { get; set; }
        public int classId { get; set; }
        public int subjectId { get; set; }
        public string gradeDate { get; set; }
        public int totalMarks { get; set; }
        public int obtainedMarks { get; set; }
        public int gradeTypeId { get; set; }
        public string gradeTitle { get; set; }
        public string remarks { get; set; }
    }
}
