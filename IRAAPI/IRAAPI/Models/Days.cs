using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace IRAAPI.Models
{
    public class Days
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }

        [Required]
        [Column("day")]
        public string Day { get; set; }
    }
}
