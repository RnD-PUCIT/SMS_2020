using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace IRAAPI.Models
{
    [Table("Diary")]
    public partial class Diary
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Column("class_id")]
        public int ClassId { get; set; }
        [Column("subject_id")]
        public int SubjectId { get; set; }
        [Column("diary_date", TypeName = "date")]
        public DateTime DiaryDate { get; set; }
        [Required]
        [Column("diary_title")]
        [StringLength(200)]
        public string DiaryTitle { get; set; }
        [Column("diary_content")]
        public string DiaryContent { get; set; }
        [Column("session_id")]
        public int SessionId { get; set; }
        [Column("guid")]
        public Guid Guid { get; set; }

        [ForeignKey(nameof(ClassId))]
        [InverseProperty("Diaries")]
        public virtual Class Class { get; set; }
        [ForeignKey(nameof(SessionId))]
        [InverseProperty("Diaries")]
        public virtual Session Session { get; set; }
        [ForeignKey(nameof(SubjectId))]
        [InverseProperty("Diaries")]
        public virtual Subject Subject { get; set; }
    }
}
