using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace IRAAPI.Models
{
    public partial class Announcement
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Column("student_id")]
        public int? StudentId { get; set; }
        [Column("class_id")]
        public int? ClassId { get; set; }
        [Required]
        [Column("title")]
        [StringLength(200)]
        public string Title { get; set; }
        [Required]
        [Column("announcment")]
        public string Announcment { get; set; }
        [Column("read")]
        public bool Read { get; set; }
        [Column("session_id")]
        public int SessionId { get; set; }
        [Column("guid")]
        public Guid Guid { get; set; }

        [ForeignKey(nameof(ClassId))]
        [InverseProperty("Announcements")]
        public virtual Class Class { get; set; }
        [ForeignKey(nameof(SessionId))]
        [InverseProperty("Announcements")]
        public virtual Session Session { get; set; }
        [ForeignKey(nameof(StudentId))]
        [InverseProperty("Announcements")]
        public virtual Student Student { get; set; }
    }
}
