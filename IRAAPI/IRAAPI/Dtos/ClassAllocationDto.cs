using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IRAAPI.Dtos
{
    public class ClassAllocationDto
    {
        public int ClassId { get; set; }
        public List<int> SubjectIds { get; set; }
    }
}
