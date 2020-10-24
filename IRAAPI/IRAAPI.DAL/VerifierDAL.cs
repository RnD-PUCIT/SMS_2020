using System;
using System.Data;
using System.Data.SqlClient;
using IRAAPI.COMMON;

namespace IRAAPI.DAL
{
    public class VerifierDAL
    {
        public int VerifyStudentByParentId(int parentId, int studentId)
        {
            SqlConnection con = new SqlConnection(DBHelper.conStr);
            try
            {
                con.Open();
                string query = "select parent_id from Students Where id = @studentId";
                SqlCommand cmd = new SqlCommand(query, con);
                cmd.Parameters.AddWithValue("@studentId", studentId);
                SqlDataReader reader = cmd.ExecuteReader();
                int id = -1;
                while (reader.Read())
                {
                    id = (int)reader["parent_id"];
                }
                reader.Close();
                return id;
            }
            catch (Exception ex)
            {
                return -2;
            }
            finally
            {
                if (con.State == ConnectionState.Open)
                {
                    con.Close();
                }
            }
        }

        public int VerifyClassByStudentId(int studentId, int classId)
        {
            SqlConnection con = new SqlConnection(DBHelper.conStr);
            try
            {
                con.Open();
                string query = "select class_id from Students Where id = @studentId";
                SqlCommand cmd = new SqlCommand(query, con);
                cmd.Parameters.AddWithValue("@studentId", studentId);
                SqlDataReader reader = cmd.ExecuteReader();
                int id = -1;
                while (reader.Read())
                {
                    id = (int)reader["class_id"];
                }
                reader.Close();
                return id;
            }
            catch (Exception ex)
            {
                return -2;
            }
            finally
            {
                if (con.State == ConnectionState.Open)
                {
                    con.Close();
                }
            }
        }

        public int VerifySubjectByClassId(int classId, int subjectId)
        {
            SqlConnection con = new SqlConnection(DBHelper.conStr);
            try
            {
                con.Open();
                string query = "Select subject_id From Class_Subject_Alloc Where class_id = @classId AND subject_id = @subjectId";
                SqlCommand cmd = new SqlCommand(query, con);
                cmd.Parameters.AddWithValue("@classId", classId);
                cmd.Parameters.AddWithValue("@subjectId", subjectId);
                SqlDataReader reader = cmd.ExecuteReader();
                int id = -1;
                while (reader.Read())
                {
                    id = (int)reader["subject_id"];
                }
                reader.Close();
                return id;
            }
            catch (Exception ex)
            {
                return -2;
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
