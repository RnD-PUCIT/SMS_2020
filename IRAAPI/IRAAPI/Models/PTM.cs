using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace IRAAPI.Models
{
    [Table("PTM")]
    public class PTM
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Column("guid")]
        public Guid Guid { get; set; }

        [Required]
        [Column("title")]
        public string Title { get; set; }

        [Column("class_id")]
        public int ClassId { get; set; }

        [ForeignKey(nameof(ClassId))]
        public virtual Class Class { get; set; }

        [Column("teacher_id")]
        public int TeacherId { get; set; }

        [ForeignKey(nameof(TeacherId))]
        public virtual Teacher Teacher { get; set; }
    }
}