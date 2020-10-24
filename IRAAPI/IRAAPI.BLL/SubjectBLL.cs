using System;
using System.Collections.Generic;
using IRAAPI.COMMON;
using IRAAPI.DAL;

namespace IRAAPI.BLL
{
    public class SubjectBLL
    {
        public List<Subject> GetSubjectsDetailsByClassId(int classId)
        {
            return new SubjectDAL().GetSubjectsDetailsByClassId(classId);
        }
        public Subject GetSubjectDetails(int classId, int subjectId)
        {
            return new SubjectDAL().GetSubjectDetails(classId, subjectId);
        }
    }
}
