using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace IRAAPI.Models
{
    [Table("Teacher_Subject_Alloc")]
    public partial class TeacherSubjectAlloc
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Column("teacher_id")]
        public int TeacherId { get; set; }
        [Column("subject_id")]
        public int SubjectId { get; set; }
        [Column("class_id")]
        public int ClassId { get; set; }

        [ForeignKey(nameof(ClassId))]
        [InverseProperty("TeacherSubjectAllocs")]
        public virtual Class Class { get; set; }
        [ForeignKey(nameof(SubjectId))]
        [InverseProperty("TeacherSubjectAllocs")]
        public virtual Subject Subject { get; set; }
        [ForeignKey(nameof(TeacherId))]
        [InverseProperty("TeacherSubjectAllocs")]
        public virtual Teacher Teacher { get; set; }
    }
}
