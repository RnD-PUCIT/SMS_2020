using System;
namespace IRAAPI.COMMON
{
    public class Attendance
    {
        public int id { get; set; }
        public int studentId { get; set; }
        public int classId { get; set; }
        public int subjectId { get; set; }
        public string attendanceDate { get; set; }
        public char status { get; set; }
    }
}
