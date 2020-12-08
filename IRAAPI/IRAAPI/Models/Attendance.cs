using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace IRAAPI.Models
{
    [Table("Attendance")]
    public partial class Attendance
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Column("student_id")]
        public int StudentId { get; set; }
        [Column("class_id")]
        public int ClassId { get; set; }
        [Column("subject_id")]
        public int? SubjectId { get; set; }
        [Column("attendance_date", TypeName = "date")]
        public DateTime AttendanceDate { get; set; }
        [Required]
        [Column("status")]
        [StringLength(1)]
        public string Status { get; set; }
        [Column("session_id")]
        public int SessionId { get; set; }
        [Column("guid")]
        public Guid Guid { get; set; }

        [ForeignKey(nameof(ClassId))]
        [InverseProperty("Attendances")]
        public virtual Class Class { get; set; }
        [ForeignKey(nameof(SessionId))]
        [InverseProperty("Attendances")]
        public virtual Session Session { get; set; }
        [ForeignKey(nameof(StudentId))]
        [InverseProperty("Attendances")]
        public virtual Student Student { get; set; }
    }
}
