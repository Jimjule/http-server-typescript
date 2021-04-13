const net = require('net');

export const setupServer = () => {
  let port: number = 4567;
  let hostname: string = `localhost`;

  const server = net.createServer();

  server
    .listen(
      port, hostname
  )
  return server;
}
