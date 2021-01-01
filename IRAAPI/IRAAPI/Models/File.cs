using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace IRAAPI.Models
{
    public class File
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Required]
        [Column("guid")]
        public Guid Guid { get; set; }
        [Required]
        [Column("original_name")]
        public string Orginal_Name { get; set; }
        [Required]
        [Column("extension")]
        public string Extension { get; set; }
        [Required]
        [Column("date")]
        public DateTime Date { get; set; }
        [Required]
        [Column("size")]
        public int Size { get; set; }
        [Required]
        [Column("path")]
        public string Path { get; set; }




    }
}
