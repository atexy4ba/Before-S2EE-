#!/usr/bin/env node

const { spawn } = require('child_process');
const net = require('net');
const os = require('os');
const path = require('path');

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

function findFreePort(startPort) {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.once('error', () => {
      server.close(() => resolve(findFreePort(startPort + 1)));
    });
    server.once('listening', () => {
      const port = server.address().port;
      server.close(() => resolve(port));
    });
    server.listen(startPort, '127.0.0.1');
  });
}

(async () => {
  const localIP = getLocalIP();
  const port = await findFreePort(3000);

  console.log('\n🚀 Starting Before S2EE development server...\n');
  console.log('📱 Access from your phone:');
  console.log(`   Local: http://localhost:${port}`);
  console.log(`   Network: http://${localIP}:${port}`);
  console.log('\n💡 Make sure your phone is on the same Wi-Fi network\n');

  const nextCli = path.join(__dirname, 'node_modules', 'next', 'dist', 'bin', 'next');
  const nextProcess = spawn(
    process.execPath,
    [nextCli, 'dev', '--hostname', '0.0.0.0', '--port', String(port)],
    {
      stdio: 'inherit',
      cwd: __dirname,
      shell: false,
    }
  );

  process.on('SIGINT', () => {
    nextProcess.kill('SIGINT');
    process.exit();
  });

  nextProcess.on('exit', (code) => {
    process.exit(code);
  });
})();
