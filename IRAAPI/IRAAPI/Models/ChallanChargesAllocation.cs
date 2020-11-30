using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace IRAAPI.Models
{
    [Table("Challan_Charges_Allocation")]
    public partial class ChallanChargesAllocation
    {
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Column("challan_id")]
        public int ChallanId { get; set; }
        [Column("charges_id")]
        public int ChargesId { get; set; }
        [Column("amount")]
        public int Amount { get; set; }

        [ForeignKey(nameof(ChallanId))]
        [InverseProperty(nameof(FeeChallan.ChallanChargesAllocations))]
        public virtual FeeChallan Challan { get; set; }
        [ForeignKey(nameof(ChargesId))]
        [InverseProperty(nameof(Charge.ChallanChargesAllocations))]
        public virtual Charge Charges { get; set; }
    }
}
