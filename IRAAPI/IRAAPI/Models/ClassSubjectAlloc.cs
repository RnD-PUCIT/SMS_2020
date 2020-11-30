using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace IRAAPI.Models
{
    [Table("Class_Subject_Alloc")]
    public partial class ClassSubjectAlloc
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Column("class_id")]
        public int ClassId { get; set; }
        [Column("subject_id")]
        public int SubjectId { get; set; }

        [ForeignKey(nameof(ClassId))]
        [InverseProperty("ClassSubjectAllocs")]
        public virtual Class Class { get; set; }
        [ForeignKey(nameof(SubjectId))]
        [InverseProperty("ClassSubjectAllocs")]
        public virtual Subject Subject { get; set; }
    }
}
