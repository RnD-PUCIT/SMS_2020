using System;
using System.Collections.Generic;
using IRAAPI.COMMON;
using IRAAPI.DAL;

namespace IRAAPI.BLL
{
    public class StudentBLL
    {
        public Student GetStudentById(int studentId)
        {
            return new StudentDAL().GetStudentById(studentId);
        }

        public List<Student> GetStudentsByParentId(int parentId)
        {
            return new StudentDAL().GetStudentsByParentId(parentId);
        }
    }
}
