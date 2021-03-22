using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace IRAAPI.Models
{
    public class StudentApplicationFile
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Required]
        [Column("guid")]
        public Guid guid { get; set; } = Guid.NewGuid();

        [Required]
        [Column("date")]
        public DateTime Date { get; set; } = DateTime.Now;

        [Required]
        [Column("orignal_name")]
        public string OrignalName { get; set; }

        [Required]
        [Column("logical_name")]
        public string LogicalName { get; set; }

        [Required]
        [Column("extension")]
        public string Extension { get; set; }

        [Required]
        [Column("content_type")]
        public string ContentType { get; set; }

        [Column("size")]
        public double Size { get; set; }

        [Column("application_id")]
        [ForeignKey("Id")]
        public int ApplicationId { get; set; }

        [NotMapped]
        public virtual StudentApplication StudentApplication { get; set; }
    }
}
