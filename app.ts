import EchoServer, * as index from './src/EchoServer';
import * as net from 'net';

const socket: net.Socket = new net.Socket;
const port: number = 4567;

  const server = net.createServer((socket: net.Socket) => {
    socket.write('Ready for input:\n');
    console.log('Client Connected');

    socket.on('data', (data) => {
      console.log(`Data received: ${data}`);
      socket.write(data);
    });

    socket.on('end', () => {
      console.log('Client Disconnected');
    });
  });

const echoServer = new EchoServer(socket, port, server);
echoServer.start(port);
