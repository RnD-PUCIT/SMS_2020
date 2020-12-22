using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace IRAAPI.Models
{
    public class AcademicCalender
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Required]
        [Column("event")]
        public string Event { get; set; }
        [Required]
        [Column("date")]
        public DateTime Date { get; set; }
        [Required]
        [Column("session_id")]
        [ForeignKey("Id")]
       
        public int SessionId { get; set; }
        public virtual Session Session { get; set; }

       

    }
    public class AcademicCalenderDTO
    {
        public string Event { get; set; }
        public DateTime Date { get; set; }
    }
}
