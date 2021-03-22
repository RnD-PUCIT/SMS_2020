using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace IRAAPI.Models
{
    [Table("Grade_Types")]
    public partial class GradeType
    {
        public GradeType()
        {
            //Grades = new HashSet<Grade>();
            SubjectGradeTypeAllocs = new HashSet<SubjectGradeTypeAlloc>();
        }

        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Required]
        [Column("grade_type")]
        [StringLength(100)]
        public string GradeType1 { get; set; }
        [Required]
        [Column("grade_type_slug")]
        [StringLength(100)]
        public string GradeTypeSlug { get; set; }
        [Column("guid")]
        public Guid Guid { get; set; }

        //[InverseProperty(nameof(Grade.GradeType))]
        //public virtual ICollection<Grade> Grades { get; set; }
        [InverseProperty(nameof(SubjectGradeTypeAlloc.GradeType))]
        public virtual ICollection<SubjectGradeTypeAlloc> SubjectGradeTypeAllocs { get; set; }

        [Column("class_id")]
        [ForeignKey("Id")]
        public int ClassId { get; set; }
        public virtual Class Class { get; set; }

        [Column("session_id")]
        [ForeignKey("Id")]
        public int SessionId { get; set; }
        public virtual Session Session { get; set; }

        [Column("subject_id")]
        [ForeignKey("Id")]
        public int SubjectId { get; set; }
        public virtual Subject Subject { get; set; }
    }
}
