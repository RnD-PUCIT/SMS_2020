using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace IRAAPI.Models
{
    [Table("Fee_Challan")]
    public partial class FeeChallan
    {
        public FeeChallan()
        {
            ChallanChargesAllocations = new HashSet<ChallanChargesAllocation>();
        }

        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Column("student_id")]
        public int StudentId { get; set; }
        [Column("issue_date", TypeName = "date")]
        public DateTime IssueDate { get; set; }
        [Column("due_date", TypeName = "date")]
        public DateTime DueDate { get; set; }

        [ForeignKey(nameof(StudentId))]
        [InverseProperty("FeeChallans")]
        public virtual Student Student { get; set; }
        [InverseProperty(nameof(ChallanChargesAllocation.Challan))]
        public virtual ICollection<ChallanChargesAllocation> ChallanChargesAllocations { get; set; }
    }
}
