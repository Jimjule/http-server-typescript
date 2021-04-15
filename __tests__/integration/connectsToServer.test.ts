import * as index from '../../src/index';
import * as process from 'child_process';
import * as net from 'net';

test('the server opens and closes', async () => {
  const consoleSpy = spyOn(console, 'log');

  const server: net.Server = await index.runServer();
  expect(server.listening).toBe(true);

  server.close();
  expect(server.listening).toBe(false);

  expect(consoleSpy).toHaveBeenCalledWith('Ready to connect');
})

test('the server can listen to a port', async () => {
  const consoleSpy = spyOn(console, 'log');

  const server: net.Server = await index.runServer();

  await consoleCommandPromise("netcat localhost 4567");

  expect(consoleSpy).toHaveBeenCalledWith('Listening on port 4567');

  server.close();
})

const consoleCommandPromise = async (command: string) => {
  return new Promise(async (resolve, reject) => {
    const customProcess = process.spawn(command);
    customProcess.on('data', data => resolve(data));
    customProcess.on('error', err => resolve(err));
    customProcess.on('close', err => resolve(err));
  })
}
