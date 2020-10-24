using System;
using System.Collections.Generic;
using System.Text;
using IRAAPI.COMMON;
using IRAAPI.DAL;

namespace IRAAPI.BLL
{
    public class GradeBLL
    {
        public List<GradeType> GetGradeTypes(int classId, int subjectId)
        {
            return new GradeDAL().GetGradeTypes(classId, subjectId);
        }

        public List<Grade> GetGradeDetails(int studentId, int classId, int subjectId, int gradeTypeId)
        {
            return new GradeDAL().GetGradeDetails(studentId, classId, subjectId, gradeTypeId);
        }
    }
}
