using System;
using System.Collections.Generic;

namespace IRAAPI.Dtos
{
    public class ContactDto
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ProfilePic { get; set; }
        public string Username { get; set; }
    }
}