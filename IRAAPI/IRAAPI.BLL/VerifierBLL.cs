using System;
using System.Collections.Generic;
using System.Text;
using IRAAPI.DAL;

namespace IRAAPI.BLL
{
    public class VerifierBLL
    {
        public Boolean verifyStudentByParentId(int parentId, int studentId)
        {
            int id = new VerifierDAL().verifyStudentByParentId(parentId, studentId);
            if (id == parentId)
                return true;
            else
                return false;
        }

        public Boolean verifyClassByStudentId(int studentId, int classId)
        {
            int id = new VerifierDAL().verifyClassByStudentId(studentId, classId);
            if (id == classId)
                return true;
            else
                return false;
        }
        public Boolean verifySubjectByClassId(int classId, int subjectId)
        {
            int id = new VerifierDAL().verifySubjectByClassId(classId, subjectId);
            if (id == subjectId)
                return true;
            else
                return false;
        }
    }
}
