using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace IRAAPI.Models
{
    public class GradeActivity
    {
        [Key]
        [Column("id")]
        public Guid Id { get; set; } = new Guid();

        [Column("grade_type_id")]
        [ForeignKey("Id")]
        public int GradeTypeId { get; set; }
        public virtual GradeType GradeType { get; set; }

        [Required]
        [Column("grade_title")]
        public string GradeTitle { get; set; }

        [Column("grade_date", TypeName = "date")]
        public DateTime GradeDate { get; set; }
        
        [Column("total_marks")]
        public int TotalMarks { get; set; }
    }
}
