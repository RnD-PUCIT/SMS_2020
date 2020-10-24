using System;
using System.Collections.Generic;
using System.Text;
using IRAAPI.DAL;

namespace IRAAPI.BLL
{
    public class VerifierBLL
    {
        public Boolean VerifyStudentByParentId(int parentId, int studentId)
        {
            int id = new VerifierDAL().VerifyStudentByParentId(parentId, studentId);
            if (id == parentId)
                return true;
            else
                return false;
        }

        public Boolean VerifyClassByStudentId(int studentId, int classId)
        {
            int id = new VerifierDAL().VerifyClassByStudentId(studentId, classId);
            if (id == classId)
                return true;
            else
                return false;
        }
        public Boolean VerifySubjectByClassId(int classId, int subjectId)
        {
            int id = new VerifierDAL().VerifySubjectByClassId(classId, subjectId);
            if (id == subjectId)
                return true;
            else
                return false;
        }
    }
}
