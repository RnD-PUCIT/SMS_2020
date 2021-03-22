using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using IRAAPI.Authentication;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace IRAAPI.Models
{
    public partial class Teacher
    {
        public Teacher()
        {
            TeacherSubjectAllocs = new HashSet<TeacherSubjectAlloc>();
        }

        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Required]
        [Column("first_name")]
        [StringLength(70)]
        public string FirstName { get; set; }
        [Required]
        [Column("last_name")]
        [StringLength(75)]
        public string LastName { get; set; }
        [Required]
        [Column("cnic")]
        [StringLength(20)]
        public string Cnic { get; set; }
        [Column("dob", TypeName = "date")]
        public DateTime Dob { get; set; }
        [Column("email")]
        [StringLength(100)]
        public string Email { get; set; }
        [Required]
        [Column("address")]
        public string Address { get; set; }
        [Required]
        [Column("contact_primary")]
        [StringLength(20)]
        public string ContactPrimary { get; set; }
        [Column("contact_secondary")]
        [StringLength(20)]
        public string ContactSecondary { get; set; }
        [Column("specialization")]
        [StringLength(100)]
        public string Specialization { get; set; }
        [Column("joining_date", TypeName = "date")]
        public DateTime JoiningDate { get; set; }
        [Column("salary")]
        public int? Salary { get; set; }
        [Column("profile_picture")]
        [StringLength(200)]
        public string ProfilePicture { get; set; }
        [Column("guid")]
        public Guid Guid { get; set; }

        [InverseProperty(nameof(TeacherSubjectAlloc.Teacher))]
        public virtual ICollection<TeacherSubjectAlloc> TeacherSubjectAllocs { get; set; }

        [Required]
        [Column("user_id")]
        [ForeignKey("Id")]
        public Guid UserId { get; set; }
        public virtual ApplicationUser User { get; set; }


    }
}
