using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace IRAAPI.Models
{
    public class StudentApplication
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Required]
        [Column("guid")]
        public Guid guid { get; set; } = Guid.NewGuid();

        [Column("student_id")]
        [ForeignKey("Id")]
        public int StudentId { get; set; }
        public virtual Student Student { get; set; }

        [Required]
        [Column("date")]
        public DateTime Date { get; set; } = DateTime.Now;

        [Required]
        [Column("subject")]
        public string Subject { get; set; }
        
        [Required]
        [Column("content")]
        public string Content { get; set; }
        
        [Column("start_date")]
        public DateTime StartDate { get; set; }

        [Column("end_date")]
        public DateTime EndDate { get; set; }

        [Required]
        [Column("status")]
        public string Status { get; set; } = "Pending";

    }
}
