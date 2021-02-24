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
        [ForeignKey("Id")]
        public int StudentId { get; set; }
        public virtual Student Student { get; set; }

        [Column("obtained_marks")]
        public int ObtainedMarks { get; set; }

        [Column("grade_activity_id")]
        [ForeignKey("Id")]
        public Guid GradeActivityId { get; set; }
        public virtual GradeActivity GradeActivity { get; set; }

        [Required]
        [Column("remarks")]
        public string Remarks { get; set; }
        [Column("guid")]
        public Guid Guid { get; set; }


    }
}
