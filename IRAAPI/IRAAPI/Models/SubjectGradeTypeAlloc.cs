using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace IRAAPI.Models
{
    [Table("Subject_GradeType_Alloc")]
    public partial class SubjectGradeTypeAlloc
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Column("class_id")]
        public int ClassId { get; set; }
        [Column("subject_id")]
        public int SubjectId { get; set; }
        [Column("grade_type_id")]
        public int GradeTypeId { get; set; }

        [ForeignKey(nameof(ClassId))]
        [InverseProperty("SubjectGradeTypeAllocs")]
        public virtual Class Class { get; set; }
        [ForeignKey(nameof(GradeTypeId))]
        [InverseProperty("SubjectGradeTypeAllocs")]
        public virtual GradeType GradeType { get; set; }
        [ForeignKey(nameof(SubjectId))]
        [InverseProperty("SubjectGradeTypeAllocs")]
        public virtual Subject Subject { get; set; }
    }
}
