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
        [Key]
        [Column("id")]
        public int Id { get; set; }
        [Column("amount")]
        public int Amount { get; set; }
        [Column("class_id")]
        public int ClassId { get; set; }
        [Column("guid")]
        public Guid Guid { get; set; }

        [ForeignKey(nameof(ClassId))]
        [InverseProperty("Charges")]
        public virtual Class Class { get; set; }
    }
}
