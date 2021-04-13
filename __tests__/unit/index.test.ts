import * as index from '../../src/index';
const net = require('net');

test('it says hello', () => {
  const server = index.setupServer();
  expect(server).toBeInstanceOf(net.Server);
})
