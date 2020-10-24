using System;
using System.Collections.Generic;
using System.Text;

namespace IRAAPI.COMMON
{
    public class Diary
    {
        public int id { get; set; }
        public int classId { get; set; }
        public int subjectId { get; set; }
        public string diaryDate { get; set; }
        public string diaryTitle { get; set; }
        public string diaryContent { get; set; }
    }
}
