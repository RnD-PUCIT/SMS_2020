using Cassandra;
using System;
using System.Data;
using System.Data.SqlClient;
using IRAAPI.COMMON;
using System.Collections.Generic;

namespace IRAAPI.DAL
{   
    public class StudentDAL
    {
        public Student GetStudentById(int studentId)
        {
            Student student = new Student();
            SqlConnection con = new SqlConnection(DBHelper.conStr);
            try
            {
                con.Open();
                string query = "select * from Students Where id = @studentId";
                SqlCommand cmd = new SqlCommand(query, con);
                cmd.Parameters.AddWithValue("@studentId", studentId);
                SqlDataReader reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    student.id = (int)reader["id"];
                    student.rollNo = reader["roll_no"].ToString();
                    student.firstName = reader["first_name"].ToString();
                    student.lastName = reader["last_name"].ToString();
                    student.dob = Convert.ToDateTime(reader["dob"]).ToString("MM/dd/yyyy");
                    student.parentId = (int)reader["parent_id"];
                    student.classId = (int)reader["class_id"];
                    student.isActive = Convert.ToBoolean(reader["is_active"]);
                    student.profilePic = reader["profile_picture"].ToString();
                }
                reader.Close();
                return student;
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

        public List<Student> GetStudentsByParentId(int parentId)
        {
            List<Student> studentsList = new List<Student>();
            SqlConnection con = new SqlConnection(DBHelper.conStr);
            try
            {
                con.Open();
                string query = "Select std.id, std.roll_no, std.first_name, std.last_name, std.dob, std.parent_id, std.class_id, class.class_name, class.section, std.is_active, std.profile_picture"
                              + " From Students AS std, Classes AS class" 
                              + " Where std.parent_id = @parentId AND class.id = std.class_id";
                SqlCommand cmd = new SqlCommand(query, con);
                cmd.Parameters.AddWithValue("@parentId", parentId);
                SqlDataReader reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    Student student = new Student();
                    student.id = (int)reader["id"];
                    student.rollNo = reader["roll_no"].ToString();
                    student.firstName = reader["first_name"].ToString();
                    student.lastName = reader["last_name"].ToString();
                    student.dob = Convert.ToDateTime(reader["dob"]).ToString("MM/dd/yyyy");
                    student.parentId = (int)reader["parent_id"];
                    student.classId = (int)reader["class_id"];
                    student.className = reader["class_name"].ToString();
                    student.section = reader["section"].ToString();
                    student.isActive = Convert.ToBoolean(reader["is_active"]);
                    student.profilePic = reader["profile_picture"].ToString();

                    studentsList.Add(student);
                }
                reader.Close();
                return studentsList;
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
        public int UpdateStudent(Student u)
        {
            //Step 1 connection String
            // string conStr = @"server=HAIER-PC\SQLEXPRESS;database=TMS;Integrated Security=SSPI;";
            //step 2 open the connection
            SqlConnection con = new SqlConnection(DBHelper.conStr);
            try
            {

                con.Open();
                //Step 3
                string query = "Update Students set id=@id,rollNo=@rollNo,firstName=@firstName,lastName=@lastName,dob=@dob,parentId=@parentId,classId=@classId,className=@className,section=@section,isActive=@isActive,profilePic=@profilePic";
                //step 4 using sqlCommand
                SqlCommand cmd = new SqlCommand(query, con);
                cmd.Parameters.AddWithValue("@id", u.id);
                cmd.Parameters.AddWithValue("@rollNo", u.rollNo);
                cmd.Parameters.AddWithValue("@firstName", u.firstName);
                cmd.Parameters.AddWithValue("@lastName", u.lastName);
                cmd.Parameters.AddWithValue("@dob", u.dob);
                cmd.Parameters.AddWithValue("@parentId", u.parentId);
                cmd.Parameters.AddWithValue("@classid", u.classId);
                cmd.Parameters.AddWithValue("@className", u.className);
                cmd.Parameters.AddWithValue("@section", u.section);
                cmd.Parameters.AddWithValue("@isActive", u.isActive);
                cmd.Parameters.AddWithValue("@profilePic", u.profilePic);
                var result = cmd.ExecuteNonQuery();      //if any function returns an  integer then it uses nion querry like insert update delete


                cmd.Dispose();
                con.Dispose();
                return result;
            }
            catch (SqlException ex)
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
