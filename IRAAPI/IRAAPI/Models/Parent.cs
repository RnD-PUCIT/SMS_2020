using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace IRAAPI.Models
{
    public partial class Parent
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Required]
        [Column("first_name")]
        [StringLength(75)]
        public string FirstName { get; set; }
        [Required]
        [Column("last_name")]
        [StringLength(75)]
        public string LastName { get; set; }
        [Column("email")]
        [StringLength(100)]
        public string Email { get; set; }
        [Required]
        [Column("cnic")]
        [StringLength(20)]
        public string Cnic { get; set; }
        [Required]
        [Column("address")]
        public string Address { get; set; }
        [Required]
        [Column("contact_primary")]
        [StringLength(50)]
        public string ContactPrimary { get; set; }
        [Column("contact_secondary")]
        [StringLength(20)]
        public string ContactSecondary { get; set; }
        [Required]
        [Column("occupation")]
        [StringLength(50)]
        public string Occupation { get; set; }
        [Column("job_address")]
        public string JobAddress { get; set; }
        [Column("profile_picture")]
        [StringLength(100)]
        public string ProfilePicture { get; set; }
    }
}
