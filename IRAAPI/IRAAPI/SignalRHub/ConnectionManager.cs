using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IRAAPI.SignalRHub
{
    public class ConnectionManager:IConnectionManager
    {
        private readonly Dictionary<string, HashSet<string>> userMap =
           new Dictionary<string, HashSet<string>>();

        public void AddConnection(string userId, string connectionId)
        {
            lock (userMap)
            {
                if (!userMap.ContainsKey(userId))
                {
                    userMap[userId] = new HashSet<string>();
                }
                userMap[userId].Add(connectionId);
            }
        }
        public void RemoveConnection(string connectionId)
        {
            lock (userMap)
            {
                foreach (var userId in userMap.Keys)
                {
                    if (userMap.ContainsKey(userId))
                    {
                        if (userMap[userId].Contains(connectionId))
                        {
                            userMap[userId].Remove(connectionId);
                        }
                    }
                }
            }
        }
        public HashSet<string> GetConnections(string userId)
        {
            var connections = new HashSet<string>();
            try
            {
                lock (userMap)
                {
                    connections = userMap[userId];
                }
            }
            catch
            {
                connections = null;
            }
            return connections;
        }

    }
}
