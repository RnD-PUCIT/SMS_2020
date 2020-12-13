using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace IRAAPI.Models
{
    [Table("Parent_Login")]
    public partial class ParentLogin
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Required]
        [Column("cnic")]
        [StringLength(20)]
        public string Cnic { get; set; }
        [Required]
        [Column("password")]
        [StringLength(200)]
        public string Password { get; set; }
        [Column("parent_id")]
        public int ParentId { get; set; }
        [Column("sq_id")]
        public int? SqId { get; set; }
        [Column("sq_answer")]
        [StringLength(50)]
        public string SqAnswer { get; set; }

        [ForeignKey(nameof(SqId))]
        [InverseProperty(nameof(SecurityQuestion.ParentLogins))]
        public virtual SecurityQuestion Sq { get; set; }
    }
}
