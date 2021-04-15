import * as net from 'net';

export const runServer = async () => {
  console.log('Ready to connect');

  const port: number = 4567;

  const server = net.createServer((socket: net.Socket) => {
    socket.write('Ready for input:\n');
    console.log('Client Connected');

    socket.on('data', (data) => {
      echo(data, socket);
    })

    socket.on('end', () => {
      console.log('Client Disconnected');
    });
  });

  server.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  
  server.on('error', (err) => {
    console.log(err);
  });
  
  function echo(data: Buffer, socket: net.Socket) {
    console.log('Input received')
    socket.write(data)
  };
  
  return server;
}
