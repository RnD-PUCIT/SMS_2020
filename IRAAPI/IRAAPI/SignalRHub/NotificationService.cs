using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using Microsoft.AspNetCore.Hosting;

namespace IRAAPI.SignalRHub
{
    public class NotificationService
    {
        private IConnectionManager _connectionManager;
        private IHubContext<NotificationHub> _hubContext;
        private IWebHostEnvironment _hostEnvironment;
        public NotificationService(IConnectionManager connectionManager, IHubContext<NotificationHub> hubContext, IWebHostEnvironment hostEnvironment)
        {
            _connectionManager = connectionManager;
            _hubContext = hubContext;
            _hostEnvironment = hostEnvironment;
        }
        public List<Notification> GetNotificationsFromDB(int userId)
        {
            var notificationData = new Notification()
            {
                userId = userId
            };
            List<Notification> notification = new List<Notification>();
            notification.Add(notificationData);
            return notification;
        }
        public void PushNotifications(int userId)
        {

            try
            {
                Task.Run(() =>
                {
                    var result = this.GetNotificationsFromDB(userId);
                    result.ForEach(async objNotification =>
                    {
                        if (objNotification.isAlert)
                        {
                            await SendNotificationAlert(objNotification);
                        }
                    });
                }).ConfigureAwait(false);
            }
            catch
            {
            }
        }
        public async Task SendNotificationAlert(Notification objNotification)
        {
            HashSet<string> connections = _connectionManager.GetConnections(objNotification.userId.ToString());
            try
            {
                if (connections != null && connections.Count > 0)
                {
                    foreach (var conn in connections)
                    {
                        try
                        {
                            await _hubContext.Clients.Client(conn).SendAsync("notificationPushed", objNotification);
                        }
                        catch
                        {
                            throw new Exception("ERROR: No Connection Found");
                        }
                    }
                }
            }
            catch
            {
                //throw new Exception("ERROR");
            }
        }


    }
}
