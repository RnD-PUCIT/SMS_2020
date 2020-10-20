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
    }
}
