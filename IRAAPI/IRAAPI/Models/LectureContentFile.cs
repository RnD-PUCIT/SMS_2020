using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace IRAAPI.Models
{
   
    public class LectureContentFile
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Required]
        [Column("guid")]
        public Guid Guid { get; set; }
        [Required]
        [Column("original_name")]
        public string Orginal_Name { get; set; }
        [Required]
        [Column("logical_name")]
        public string Logical_Name { get; set; }
        [Required]
        [Column("extension")]
        public string Extension { get; set; }
        [Required]
        [Column("date")]
        public DateTime Date { get; set; }
        [Required]
        [Column("size")]
        public int Size { get; set; }
        [Required]
        [Column("path")]
        public string Path { get; set; }
        [Required]
        [Column("course_outline_id")]
        [ForeignKey("Id")]
        public int CourseOutlineId{ get; set; }
        public virtual CourseOutline CourseOutline { get; set; }




    }
    public class LectureContentFileDTO
    {
        public string Orginal_Name { get; set; }
        public string Extension { get; set; }
        public DateTime Date { get; set; }
        public string Path { get; set; }


    }
}
