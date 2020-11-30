using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace IRAAPI.Models
{
    [Table("Security_Questions")]
    public partial class SecurityQuestion
    {
        public SecurityQuestion()
        {
            ParentLogins = new HashSet<ParentLogin>();
        }

        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Required]
        [Column("question")]
        [StringLength(150)]
        public string Question { get; set; }

        [InverseProperty(nameof(ParentLogin.Sq))]
        public virtual ICollection<ParentLogin> ParentLogins { get; set; }
    }
}
