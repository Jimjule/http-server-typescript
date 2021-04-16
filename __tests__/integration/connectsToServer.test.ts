import EchoServer, * as index from '../../src/EchoServer';
import * as process from 'child_process';
import * as net from 'net';

import flushPromises from "flush-promises";
let sleep = require('util').promisify(setTimeout);

test('the server starts and stops', async function() {
  jest.setTimeout(10000);
  const socket = new net.Socket;
  const portNumber: number = 4567;

  const server: net.Server = new net.Server;

  const echoServer = new EchoServer(socket, portNumber, server);

  echoServer.start(portNumber);

  await consoleCommandPromise(`netcat localhost ${portNumber}`);
  echoServer.close();
})

const consoleCommandPromise = async (command: string) => {
  return new Promise(async (resolve, reject) => {
    const customProcess = process.spawn(command);
    customProcess.on('data', data => resolve(data));
    customProcess.on('error', err => resolve(err));
    customProcess.on('close', err => resolve(err));
  })
}
