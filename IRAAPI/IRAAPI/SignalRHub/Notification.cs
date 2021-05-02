using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IRAAPI.SignalRHub
{
    public class Notification
    {
        public int userId { get; set; }
        public DateTime CreatedAt { get; set; }
        public bool isAlert { get; set; }
    }
}
