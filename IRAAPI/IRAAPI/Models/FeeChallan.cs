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
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Column("student_id")]
        public int StudentId { get; set; }
        [Column("issue_date", TypeName = "date")]
        public DateTime IssueDate { get; set; }
        [Column("due_date", TypeName = "date")]
        public DateTime DueDate { get; set; }
        [Column("bank_id")]
        public int BankId { get; set; }
        [Column("instructions")]
        public string Instructions { get; set; }
        [Column("is_paid")]
        public bool IsPaid { get; set; }
        [Column("unpaid_charges")]
        public int UnpaidCharges { get; set; }
        [Column("guid")]
        public Guid Guid { get; set; }

        [ForeignKey(nameof(StudentId))]
        [InverseProperty("FeeChallans")]
        public virtual Student Student { get; set; }
    }
    public class FeeChallanDTO
    {
        public Guid Guid { get; set; }

        public DateTime IssueDate { get; set; }
        public DateTime DueDate { get; set; }
        public string Instructions { get; set; }
        public bool IsPaid { get; set; }
        public int UnpaidCharges { get; set; }

        public static implicit operator FeeChallanDTO(ChargeDTO v)
        {
            throw new NotImplementedException();
        }
    }
}
