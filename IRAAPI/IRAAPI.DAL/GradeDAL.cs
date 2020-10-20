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
    }
}
