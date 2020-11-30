using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

#nullable disable

namespace IRAAPI.Models
{
    public partial class Charge
    {
        public Charge()
        {
            ChallanChargesAllocations = new HashSet<ChallanChargesAllocation>();
        }

        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Required]
        [Column("charges_name")]
        public string ChargesName { get; set; }

        [InverseProperty(nameof(ChallanChargesAllocation.Charges))]
        public virtual ICollection<ChallanChargesAllocation> ChallanChargesAllocations { get; set; }
    }
}
