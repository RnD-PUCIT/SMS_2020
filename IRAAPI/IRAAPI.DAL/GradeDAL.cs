using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using IRAAPI.COMMON;


namespace IRAAPI.DAL
{
    public class GradeDAL
    {
        public List<GradeType> GetGradeTypes(int classId, int subjectId)
        {
            List<GradeType> gradeTypes = new List<GradeType>();
            SqlConnection con = new SqlConnection(DBHelper.conStr);
            try
            {
                con.Open();
                string query = "Select grade.id, grade.grade_type" +
                    " from Grade_Types AS grade, Subject_GradeType_Alloc AS alloc" +
                    " Where alloc.class_id = @classId AND alloc.subject_id = @subjectId AND grade.id = alloc.grade_type_id";
                
                SqlCommand cmd = new SqlCommand(query, con);
                cmd.Parameters.AddWithValue("@classId", classId);
                cmd.Parameters.AddWithValue("@subjectId", subjectId);
                SqlDataReader reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    GradeType gradeType = new GradeType();
                    gradeType.gradeTypeId = (int)reader["id"];
                    gradeType.gradeTypeName = reader["grade_type"].ToString();

                    gradeTypes.Add(gradeType);
                }
                reader.Close();
                return gradeTypes;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                if (con.State == ConnectionState.Open)
                {
                    con.Close();
                }
            }
        }

        public List<Grade> GetGradeDetails(int studentId, int classId, int subjectId, int gradeTypeId)
        {
            List<Grade> gradeDetailList = new List<Grade>();
            SqlConnection con = new SqlConnection(DBHelper.conStr);
            try
            {
                con.Open();
                string query = "Select * From Grades Where student_id = @studentId AND class_id = @classId AND subject_id = @subjectId AND grade_type_id = @gradeTypeId order by grade_date desc";

                SqlCommand cmd = new SqlCommand(query, con);
                cmd.Parameters.AddWithValue("@studentId", studentId);
                cmd.Parameters.AddWithValue("@classId", classId);
                cmd.Parameters.AddWithValue("@subjectId", subjectId);
                cmd.Parameters.AddWithValue("@gradeTypeId", gradeTypeId);
                SqlDataReader reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    Grade gradeDetail = new Grade();
                    gradeDetail.id = (int)reader["id"];
                    gradeDetail.studentId = (int)reader["student_id"];
                    gradeDetail.classId = (int)reader["class_id"];
                    gradeDetail.subjectId = (int)reader["subject_id"];
                    gradeDetail.gradeDate = Convert.ToDateTime(reader["grade_date"]).ToString("MM/dd/yyyy");
                    gradeDetail.totalMarks = (int)reader["total_marks"];
                    gradeDetail.obtainedMarks = (int)reader["obtained_marks"];
                    gradeDetail.gradeTypeId = (int)reader["grade_type_id"];
                    gradeDetail.gradeTitle = reader["grade_title"].ToString();
                    gradeDetail.remarks = reader["remarks"].ToString();

                    gradeDetailList.Add(gradeDetail);
                }
                reader.Close();
                return gradeDetailList;
            }
            catch (Exception ex)
            {
                throw ex;
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
