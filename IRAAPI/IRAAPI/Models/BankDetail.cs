using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace IRAAPI.Models
{
    [Table("Bank_Details")]
    public partial class BankDetail
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Required]
        [Column("bank_name")]
        public string BankName { get; set; }
        [Required]
        [Column("bank_branch")]
        public string BankBranch { get; set; }
        [Column("account_no")]
        public long AccountNo { get; set; }
        [Column("guid")]
        public Guid Guid { get; set; }
    }
}
