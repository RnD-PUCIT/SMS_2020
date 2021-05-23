using System;
using System.Collections.Generic;

namespace IRAAPI.Dtos
{
    public class PTMDto
    {
        public string Title { get; set; }
        public Guid ClassId { get; set; }
        public List<PTMParticipantDto> Participants { get; set; }
    }

    public class PTMParticipantDto
    {
        public Guid ParentId { get; set; }
        public DateTime Date { get; set; }
        public DateTime StartTime { get; set; }
        public int Duration { get; set; }
    }
}