using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace IRAAPI.Models
{
    public class CourseOutline
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Required]
        [Column("guid")]
        public Guid Guid { get; set; }
        [Required]
        [Column("subject_id")]
        [ForeignKey("Id")]

        public int SubjectId { get; set; }
        public virtual Subject Subject { get; set; }
        [Required]
        [Column("class_id")]
        [ForeignKey("Id")]

        public int ClassId { get; set; }
        public virtual Class Class { get; set; }
        [Required]
        [Column("session_id")]
        [ForeignKey("Id")]

        public int SessionId { get; set; }
        public virtual Session Session { get; set; }
        [Required]
        [Column("term_id")]
        [ForeignKey("Id")]

        public int TermsId { get; set; }

        public virtual Terms Terms { get; set; }
        [Required]
        [Column("title")]
        public string Title { get; set; }
        [Required]
        [Column("description")]
        public string Description { get; set; }
        [Required]
        [Column("date")]
        public DateTime Date { get; set; }
        [Required]
        [Column("status")]
        public bool Status { get; set; }
        [Required]
        [Column("references")]
        public string References { get; set; }





    }
}
