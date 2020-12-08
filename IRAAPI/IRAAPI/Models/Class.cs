using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace IRAAPI.Models
{
    public partial class Class
    {
        public Class()
        {
            Announcements = new HashSet<Announcement>();
            Attendances = new HashSet<Attendance>();
            Charges = new HashSet<Charge>();
            ClassSubjectAllocs = new HashSet<ClassSubjectAlloc>();
            Diaries = new HashSet<Diary>();
            Grades = new HashSet<Grade>();
            Students = new HashSet<Student>();
            SubjectGradeTypeAllocs = new HashSet<SubjectGradeTypeAlloc>();
            TeacherSubjectAllocs = new HashSet<TeacherSubjectAlloc>();
        }

        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Required]
        [Column("class_name")]
        [StringLength(50)]
        public string ClassName { get; set; }
        [Column("section")]
        [StringLength(50)]
        public string Section { get; set; }
        [Column("guid")]
        public Guid Guid { get; set; }

        [InverseProperty(nameof(Announcement.Class))]
        public virtual ICollection<Announcement> Announcements { get; set; }
        [InverseProperty(nameof(Attendance.Class))]
        public virtual ICollection<Attendance> Attendances { get; set; }
        [InverseProperty(nameof(Charge.Class))]
        public virtual ICollection<Charge> Charges { get; set; }
        [InverseProperty(nameof(ClassSubjectAlloc.Class))]
        public virtual ICollection<ClassSubjectAlloc> ClassSubjectAllocs { get; set; }
        [InverseProperty(nameof(Diary.Class))]
        public virtual ICollection<Diary> Diaries { get; set; }
        [InverseProperty(nameof(Grade.Class))]
        public virtual ICollection<Grade> Grades { get; set; }
        [InverseProperty(nameof(Student.Class))]
        public virtual ICollection<Student> Students { get; set; }
        [InverseProperty(nameof(SubjectGradeTypeAlloc.Class))]
        public virtual ICollection<SubjectGradeTypeAlloc> SubjectGradeTypeAllocs { get; set; }
        [InverseProperty(nameof(TeacherSubjectAlloc.Class))]
        public virtual ICollection<TeacherSubjectAlloc> TeacherSubjectAllocs { get; set; }
    }
}
