using System.Collections.Generic;
using IRAAPI.COMMON;
using IRAAPI.DAL;


namespace IRAAPI.BLL
{
    public class AttendanceBLL
    {
        public List<Attendance> GetAttendance(int stdId, int classId)
        {
            return new AttendanceDAL().GetAttendance(stdId, classId);
        }
    }
}
