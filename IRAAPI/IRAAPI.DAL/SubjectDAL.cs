using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using IRAAPI.COMMON;

namespace IRAAPI.DAL
{
    public class SubjectDAL
    {
        public List<Subject> GetSubjectsDetailsByClassId(int classId)
        {
            List<Subject> subjectsList = new List<Subject>();
            
            SqlConnection con = new SqlConnection(DBHelper.conStr);
            try
            {
                con.Open();
                string query = "SELECT alloc.subject_id, sub.subject_code, sub.subject_name, sub.subject_slug, teacher_alloc.teacher_id, (teacher.first_name + ' ' + teacher.last_name) as teacher_name "
                               + "FROM Class_Subject_Alloc AS alloc, Subjects AS sub, Teacher_Subject_Alloc AS teacher_alloc, Teachers AS teacher "
                               + "Where (alloc.subject_id = sub.id AND alloc.class_id = @classId AND teacher_alloc.class_id = @classId AND teacher_alloc.subject_id = alloc.subject_id AND teacher.id = teacher_alloc.teacher_id)";
                SqlCommand cmd = new SqlCommand(query, con);
                cmd.Parameters.AddWithValue("@classId", classId);
                SqlDataReader reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    Subject subject = new Subject();
                    subject.subjectId = (int)reader["subject_id"];
                    subject.subjectCode = reader["subject_code"].ToString();
                    subject.subjectName = reader["subject_name"].ToString();
                    subject.subjectSlug = reader["subject_slug"].ToString();
                    subject.teacherId = (int)reader["teacher_id"];
                    subject.teacherName = reader["teacher_name"].ToString();

                    subjectsList.Add(subject);
                }
                reader.Close();
                return subjectsList;
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

        public List<int> GetSubjectsIdsByClassId(int classId)
        {
            List<int> subjectIds = new List<int>();

            SqlConnection con = new SqlConnection(DBHelper.conStr);
            try
            {
                con.Open();
                string query = "select subject_id from Class_Subject_Alloc Where class_id = @classId";
                SqlCommand cmd = new SqlCommand(query, con);
                cmd.Parameters.AddWithValue("@classId", classId);
                SqlDataReader reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    int subjectId = (int)reader["subject_id"];
                    subjectIds.Add(subjectId);
                }
                reader.Close();
                return subjectIds;
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
