using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace IRAAPI.SignalRHub
{
    public class NotificationHub: Hub
    {
        private IConnectionManager _connectionManager;
        private IHubContext<NotificationHub> _hubContext;
        public NotificationHub(IHubContext<NotificationHub> hubContext, IConnectionManager connectionManager)
        {
            _connectionManager = connectionManager;
            _hubContext = hubContext;
        }

        public string GetConnectionId()
        {
            _connectionManager.AddConnection(Context.GetHttpContext().Request.Query["userId"], Context.ConnectionId);
            return Context.ConnectionId;
        }

        public override Task OnConnectedAsync()
        {
            return base.OnConnectedAsync();
        }
        public override Task OnDisconnectedAsync(Exception stopCalled)
        {
            return base.OnDisconnectedAsync(stopCalled);
        }

    }
}
