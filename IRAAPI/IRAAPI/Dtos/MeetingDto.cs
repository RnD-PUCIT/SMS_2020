using System;

namespace IRAAPI.Dtos
{
    public class MeetingDto
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public DateTime StartTime { get; set; }
        public ClassDto Class { get; set; }
        public Guid ParticipantId { get; set; }
        public string ParticipantName { get; set; }
    }
}