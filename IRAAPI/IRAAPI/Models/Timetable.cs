using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace IRAAPI.Models
{
    public class Timetable
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Required]
        [Column("guid")]
        public Guid guid { get; set; }

        [Column("class_id")]
        [ForeignKey("Id")]
        public int ClassId { get; set; }
        public virtual Class Class { get; set; }

        [Column("session_id")]
        [ForeignKey("Id")] 
        public int SessionId { get; set; }
        public virtual Session Session { get; set; }

        [Column("subject_id")]
        [ForeignKey("Id")]
        public int SubjectId { get; set; }
        public virtual Subject Subject { get; set; }

        [Column("day_id")]
        [ForeignKey("Id")]
        public int DayId { get; set; }
        public virtual Days Day { get; set; }

        [Required]
        [Column("time_slot")]
        public string TimeSlot { get; set; }
    }
}
