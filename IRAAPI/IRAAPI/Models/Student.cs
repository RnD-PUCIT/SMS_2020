using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace IRAAPI.Models
{
    public partial class Student
    {
        public Student()
        {
            Announcements = new HashSet<Announcement>();
            Attendances = new HashSet<Attendance>();
            FeeChallans = new HashSet<FeeChallan>();
            Grades = new HashSet<Grade>();
        }

        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Required]
        [Column("roll_no")]
        [StringLength(50)]
        public string RollNo { get; set; }
        [Required]
        [Column("first_name")]
        [StringLength(75)]
        public string FirstName { get; set; }
        [Required]
        [Column("last_name")]
        [StringLength(75)]
        public string LastName { get; set; }
        [Column("dob", TypeName = "date")]
        public DateTime Dob { get; set; }
        [Column("parent_id")]
        public int ParentId { get; set; }
        [Column("class_id")]
        public int ClassId { get; set; }
        [Column("is_active")]
        public bool IsActive { get; set; }
        [Column("profile_picture")]
        [StringLength(200)]
        public string ProfilePicture { get; set; }
        [Column("session_id")]
        public int SessionId { get; set; }
        [Column("enrollment_date", TypeName = "date")]
        public DateTime EnrollmentDate { get; set; }

        [ForeignKey(nameof(ClassId))]
        [InverseProperty("Students")]
        public virtual Class Class { get; set; }
        [InverseProperty(nameof(Announcement.Student))]
        public virtual ICollection<Announcement> Announcements { get; set; }
        [InverseProperty(nameof(Attendance.Student))]
        public virtual ICollection<Attendance> Attendances { get; set; }
        [InverseProperty(nameof(FeeChallan.Student))]
        public virtual ICollection<FeeChallan> FeeChallans { get; set; }
        [InverseProperty(nameof(Grade.Student))]
        public virtual ICollection<Grade> Grades { get; set; }
    }
}
