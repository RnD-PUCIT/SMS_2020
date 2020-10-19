using Cassandra;
using System;
using System.Data;
using System.Data.SqlClient;
using IRAAPI.COMMON;

namespace IRAAPI.DAL
{
    public class ParentDAL
    {
        public int VerifyParent(string cnic, string password)
        {
            int parentId = -1;

            SqlConnection con = new SqlConnection(DBHelper.conStr);
            try
            {

                con.Open();

                string query = "select parent_id from Parent_Login Where cnic = @cnic AND password = @password";
                SqlCommand cmd = new SqlCommand(query, con);
                cmd.Parameters.AddWithValue("@cnic", cnic);
                cmd.Parameters.AddWithValue("@password", password);
                SqlDataReader reader = cmd.ExecuteReader();
            
                
                while (reader.Read())
                {
                    parentId = (int)reader["parent_id"];
                }
                reader.Close();
                return parentId;
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
                    parent.first_name = reader["first_name"].ToString();
                    parent.last_name = reader["last_name"].ToString();
                    parent.email = reader["email"].ToString();
                    parent.cnic = reader["cnic"].ToString();
                    parent.address = reader["address"].ToString();
                }
                reader.Close();
                return parent;
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
