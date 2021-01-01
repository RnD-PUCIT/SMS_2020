using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace IRAAPI.Models
{
    public class LectureContent
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Required]
        [Column("guid")]
        public Guid Guid { get; set; }
        [Required]
        [Column("file_id")]
        [ForeignKey("Id")]

        public int FileId { get; set; }
        public virtual File File { get; set; }
        [Required]
        [Column("references")]
        public string References { get; set; }



    }
}
