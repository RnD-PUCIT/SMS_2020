using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace IRAAPI.Models
{
    public partial class Session
    {
        public Session()
        {
            Announcements = new HashSet<Announcement>();
            Attendances = new HashSet<Attendance>();
            Diaries = new HashSet<Diary>();
            Grades = new HashSet<Grade>();
            Students = new HashSet<Student>();
        }

        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Required]
        [Column("session_year")]
        [StringLength(50)]
        public string SessionYear { get; set; }
        [Column("guid")]
        public Guid Guid { get; set; }

        [InverseProperty(nameof(Announcement.Session))]
        public virtual ICollection<Announcement> Announcements { get; set; }
        [InverseProperty(nameof(Attendance.Session))]
        public virtual ICollection<Attendance> Attendances { get; set; }
        [InverseProperty(nameof(Diary.Session))]
        public virtual ICollection<Diary> Diaries { get; set; }
        [InverseProperty(nameof(Grade.Session))]
        public virtual ICollection<Grade> Grades { get; set; }
        [InverseProperty(nameof(Student.Session))]
        public virtual ICollection<Student> Students { get; set; }
    }
}
