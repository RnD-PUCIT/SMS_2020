import React, { useState, useEffect } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';

const SignalRDemo = (props) => {
  const [connection, setConnection] = useState(null);
  const { id } = props;

  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl('https://localhost:44334/NotificationHub?userID=' + id)
      .withAutomaticReconnect()
      .build();

    setConnection(newConnection);
  }, []);

  useEffect(() => {
    if (connection) {
      connection
        .start()
        .then(() => {
          console.log('Hub Connection Started!');

          //getting data from the sever
          // connection.on('SendNotificationAlert', (data) => {
          //   console.log(data);
          // });
        })
        .catch((e) => console.log('Connection failed: '));
    }
  }, [connection]);

  //sending data to the server
  // const sendMessage = async () => {
  //   if (connection.connectionStarted) {
  //     try {
  //       await connection.send('notificationPushed', 'tehreem');
  //     } catch (e) {
  //       console.log('Sending Data failed: ', e);
  //     }
  //   } else {
  //     alert('No connection to server yet.');
  //   }
  // };

  return (
    <>
      <h1>SignalR Demo</h1>
      {/* <button onClick={sendMessage}>Click to send data to server</button> */}
    </>
  );
};

export default SignalRDemo;
