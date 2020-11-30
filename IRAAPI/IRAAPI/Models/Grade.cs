using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace IRAAPI.Models
{
    public partial class Grade
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Column("student_id")]
        public int StudentId { get; set; }
        [Column("class_id")]
        public int ClassId { get; set; }
        [Column("subject_id")]
        public int SubjectId { get; set; }
        [Column("grade_date", TypeName = "date")]
        public DateTime GradeDate { get; set; }
        [Column("total_marks")]
        public int TotalMarks { get; set; }
        [Column("obtained_marks")]
        public int ObtainedMarks { get; set; }
        [Column("grade_type_id")]
        public int GradeTypeId { get; set; }
        [Required]
        [Column("grade_title")]
        [StringLength(50)]
        public string GradeTitle { get; set; }
        [Column("remarks")]
        public string Remarks { get; set; }
        [Column("session_id")]
        public int SessionId { get; set; }

        [ForeignKey(nameof(ClassId))]
        [InverseProperty("Grades")]
        public virtual Class Class { get; set; }
        [ForeignKey(nameof(GradeTypeId))]
        [InverseProperty("Grades")]
        public virtual GradeType GradeType { get; set; }
        [ForeignKey(nameof(SessionId))]
        [InverseProperty("Grades")]
        public virtual Session Session { get; set; }
        [ForeignKey(nameof(StudentId))]
        [InverseProperty("Grades")]
        public virtual Student Student { get; set; }
        [ForeignKey(nameof(SubjectId))]
        [InverseProperty("Grades")]
        public virtual Subject Subject { get; set; }
    }
}
