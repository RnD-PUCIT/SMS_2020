using Cassandra;
using System;
using System.Data;
using System.Data.SqlClient;
using IRAAPI.COMMON;
using System.Collections.Generic;

namespace IRAAPI.DAL
{
    public class AttendanceDAL
    {
        public List<Attendance> GetAttendance(int stdId, int classId)
        {
            SqlConnection con = new SqlConnection(DBHelper.conStr);
            try
            {
                List<Attendance> attendanceList = new List<Attendance>();
                con.Open();
                string query = "select * from Attendance Where student_id = @stdId AND class_id = @classId";
                SqlCommand cmd = new SqlCommand(query, con);
                cmd.Parameters.AddWithValue("@stdId", stdId);
                cmd.Parameters.AddWithValue("@classId", classId);
                SqlDataReader reader = cmd.ExecuteReader();
                while (reader.Read())
                {
                    Attendance attendance = new Attendance();
                    attendance.id = (int)reader["id"];
                    attendance.studentId = (int)reader["student_id"];
                    attendance.classId = (int)reader["class_id"];
                    if (reader["subject_id"].ToString() == "")
                    {
                        attendance.subjectId = -1;
                    }
                    else
                    {
                        attendance.subjectId = (int)reader["subject_id"];
                    }
                    attendance.attendanceDate = Convert.ToDateTime(reader["attendance_date"]).ToString("MM/dd/yyyy");
                    attendance.status = Convert.ToChar(reader["status"]);

                    attendanceList.Add(attendance);
                }
                reader.Close();
                return attendanceList;
            }
            catch (Exception ex)
            {
                return null;
            }
            finally
            {
                if (con.State == ConnectionState.Open)
                {
                    con.Close();
                }
            }
        }
    }
}
