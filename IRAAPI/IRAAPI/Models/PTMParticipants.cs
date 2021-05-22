using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IRAAPI.Models
{
    [Table("PTM_Participants")]
    public class PTMParticipants
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Column("guid")]
        public Guid Guid { get; set; }

        [Column("ptm_id")]
        public int PTMId { get; set; }

        [ForeignKey(nameof(PTMId))]
        public PTM PTM { get; set; }

        [Column("parent_id")]
        public int ParentId { get; set; }

        [ForeignKey(nameof(ParentId))]
        public Parent Parent { get; set; }

        [Column("link")]
        public string Link { get; set; }

        [Column("date")]
        public DateTime Date { get; set; }

        [Column("start_time")]
        public string StartTime { get; set; }

        [Column("duration")]
        public int Duration { get; set; }
    }
}