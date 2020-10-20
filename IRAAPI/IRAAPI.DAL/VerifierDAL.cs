using System;
using System.Data;
using System.Data.SqlClient;
using IRAAPI.COMMON;

namespace IRAAPI.DAL
{
    public class VerifierDAL
    {
        //public Boolean verifyStudentByParentId(int parentId, int studentId)
        //{
        //    SqlConnection con = new SqlConnection(DBHelper.conStr);
        //    try
        //    {
        //        con.Open();
        //        string query = "select parent_id from Students Where id = @studentId";
        //        SqlCommand cmd = new SqlCommand(query, con);
        //        cmd.Parameters.AddWithValue("@studentId", studentId);
        //        SqlDataReader reader = cmd.ExecuteReader();

        //        while (reader.Read())
        //        {
        //            parent.id = (int)reader["id"];
        //            parent.firstName = reader["first_name"].ToString();
        //            parent.lastName = reader["last_name"].ToString();
        //            parent.email = reader["email"].ToString();
        //            parent.cnic = reader["cnic"].ToString();
        //            parent.address = reader["address"].ToString();
        //            parent.contactPrimary = reader["contact_primary"].ToString();
        //            parent.contactSecondary = reader["contact_secondary"].ToString();
        //            parent.occupation = reader["occupation"].ToString();
        //            parent.jobAddress = reader["job_address"].ToString();
        //            parent.profilePic = reader["profile_picture"].ToString();
        //        }
        //        reader.Close();
        //        return parent;
        //    }
        //    catch (Exception ex)
        //    {
        //        return null;
        //    }
        //    finally
        //    {
        //        if (con.State == ConnectionState.Open)
        //        {
        //            con.Close();
        //        }
        //    }
        //}
    }
}
