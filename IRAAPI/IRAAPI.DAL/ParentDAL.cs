using System;
using System.Data;
using System.Data.SqlClient;
using BCrypt.Net;
using IRAAPI.COMMON;

namespace IRAAPI.DAL
{
    public class ParentDAL
    {
       
        public int VerifyParent(string cnic, string password)
        {
            int parentId = -1;
            string parentPassword = "";
            bool passwordVerified = false;

            SqlConnection con = new SqlConnection(DBHelper.conStr);
            try
            {
                con.Open();
                string query = "select parent_id, password From Parent_Login Where cnic = @cnic";
                SqlCommand cmd = new SqlCommand(query, con);
                cmd.Parameters.AddWithValue("@cnic", cnic);
                SqlDataReader reader = cmd.ExecuteReader();
            
                while (reader.Read())
                {
                    parentId = (int)reader["parent_id"];
                    parentPassword = reader["password"].ToString();
                }
                reader.Close();
                if(parentId != -1 && parentPassword != "")
                {
                    passwordVerified = BCrypt.Net.BCrypt.Verify(password, parentPassword);
                }

                if (passwordVerified)
                    return parentId;
                else
                    return -1;
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

        public Parent GetParentInfoById(int parent_Id)
        {
            Parent parent = new Parent();
            SqlConnection con = new SqlConnection(DBHelper.conStr);
            try
            {
                con.Open();
                string query = "select * from Parents Where id = @parentId";
                SqlCommand cmd = new SqlCommand(query, con);
                cmd.Parameters.AddWithValue("@parentId", parent_Id);
                SqlDataReader reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    parent.id = (int)reader["id"];
                    parent.firstName = reader["first_name"].ToString();
                    parent.lastName = reader["last_name"].ToString();
                    parent.email = reader["email"].ToString();
                    parent.cnic = reader["cnic"].ToString();
                    parent.address = reader["address"].ToString();
                    parent.contactPrimary = reader["contact_primary"].ToString();
                    parent.contactSecondary = reader["contact_secondary"].ToString();
                    parent.occupation = reader["occupation"].ToString();
                    parent.jobAddress = reader["job_address"].ToString();
                    parent.profilePic = reader["profile_picture"].ToString();
                }
                reader.Close();
                return parent;
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
