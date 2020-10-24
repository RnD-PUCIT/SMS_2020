using IRAAPI.COMMON;
using IRAAPI.DAL;
using System;
using System.Collections.Generic;
using System.Text;

namespace IRAAPI.BLL
{
    public class DiaryBLL
    {
        public List<Diary> GetDiary(int classId, int subjectId)
        {
            return new DiaryDAL().GetDiary(classId, subjectId);
        }
    }
}
