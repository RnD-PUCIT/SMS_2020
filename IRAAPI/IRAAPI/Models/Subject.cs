using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace IRAAPI.Models
{
    public partial class Subject
    {
        public Subject()
        {
            ClassSubjectAllocs = new HashSet<ClassSubjectAlloc>();
            Diaries = new HashSet<Diary>();
            Grades = new HashSet<Grade>();
            SubjectGradeTypeAllocs = new HashSet<SubjectGradeTypeAlloc>();
            TeacherSubjectAllocs = new HashSet<TeacherSubjectAlloc>();
        }

        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Required]
        [Column("subject_code")]
        [StringLength(50)]
        public string SubjectCode { get; set; }
        [Required]
        [Column("subject_name")]
        [StringLength(100)]
        public string SubjectName { get; set; }
        [Required]
        [Column("subject_slug")]
        [StringLength(100)]
        public string SubjectSlug { get; set; }
        [Column("guid")]
        public Guid Guid { get; set; }

        [InverseProperty(nameof(ClassSubjectAlloc.Subject))]
        public virtual ICollection<ClassSubjectAlloc> ClassSubjectAllocs { get; set; }
        [InverseProperty(nameof(Diary.Subject))]
        public virtual ICollection<Diary> Diaries { get; set; }
        [InverseProperty(nameof(Grade.Subject))]
        public virtual ICollection<Grade> Grades { get; set; }
        [InverseProperty(nameof(SubjectGradeTypeAlloc.Subject))]
        public virtual ICollection<SubjectGradeTypeAlloc> SubjectGradeTypeAllocs { get; set; }
        [InverseProperty(nameof(TeacherSubjectAlloc.Subject))]
        public virtual ICollection<TeacherSubjectAlloc> TeacherSubjectAllocs { get; set; }
    }
}
