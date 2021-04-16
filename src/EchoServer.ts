import * as net from 'net';

export default class EchoServer {

  socket: net.Socket;
  port: number;
  server: net.Server;

  constructor(socket: net.Socket, port: number, server: net.Server) {
    this.socket = socket;
    this.port = port;
    this.server = server;
  }
  
  start(port: number): Promise<EchoServer> {
    return new Promise((resolve) => {
      this.server.listen(port, () => {
        console.log('Server Running');
        resolve(this);
      });
    })
  }

  close(): Promise<void> {
    return new Promise((resolve) => {
      console.log('Server Closing');
      this.server.close(() => {
        resolve();
      });
    })
  }
}
