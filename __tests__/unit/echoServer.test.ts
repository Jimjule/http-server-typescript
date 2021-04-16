import EchoServer, * as index from '../../src/EchoServer';
import * as net from 'net';

test('the server starts', () => {
  const socket = new net.Socket;
  const portNumber: number = 4567;
  const server: net.Server = new net.Server;

  const echoServer = new EchoServer(socket, portNumber, server);
  const startPromise: Promise<EchoServer> = echoServer.start(portNumber);

  expect(echoServer.server.listening).toBe(true);

  echoServer.server.close();
})

test('the server stops after starting', () => {
  const socket = new net.Socket;
  const portNumber: number = 4567;
  const server: net.Server = new net.Server;

  const echoServer = new EchoServer(socket, portNumber, server);
  echoServer.start(portNumber);

  const closePromise: Promise<void> = echoServer.close();

  expect(echoServer.server.listening).toBe(false);
})
