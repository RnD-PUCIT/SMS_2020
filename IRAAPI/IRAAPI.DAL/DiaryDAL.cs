using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using IRAAPI.COMMON;


namespace IRAAPI.DAL
{
    public class DiaryDAL
    {
        public List<Diary> GetDiary(int classId, int subjectId)
        {
            List<Diary> diaryList = new List<Diary>();
            SqlConnection con = new SqlConnection(DBHelper.conStr);
            try
            {
                con.Open();
                string query = "Select * from Diary Where class_id = @classId AND subject_id = @subjectId order by diary_date desc";
                SqlCommand cmd = new SqlCommand(query, con);
                cmd.Parameters.AddWithValue("@classId", classId);
                cmd.Parameters.AddWithValue("@subjectId", subjectId);
                SqlDataReader reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    Diary diary = new Diary();
                    diary.id = (int)reader["id"];
                    diary.classId = (int)reader["class_id"];
                    diary.subjectId = (int)reader["subject_id"];
                    diary.diaryDate = Convert.ToDateTime(reader["diary_date"]).ToString("MM/d/yyyy");
                    diary.diaryTitle = reader["diary_title"].ToString();
                    diary.diaryContent = reader["diary_content"].ToString();

                    diaryList.Add(diary);
                }
                reader.Close();
                return diaryList;
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
