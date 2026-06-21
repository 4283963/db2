const express = require('express');
const cors = require('cors');
const http = require('http');
const https = require('https');

const app = express();
const PORT = 4000;

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization,X-Requested-With');
  res.header('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});
app.use(express.json());

const apps = [
  {
    name: 'user-center',
    entry: 'http://localhost:5174',
    routePrefix: '/user-center',
    title: '用户中心',
    icon: 'User'
  },
  {
    name: 'permission-center',
    entry: 'http://localhost:5175',
    routePrefix: '/permission-center',
    title: '权限中心',
    icon: 'Lock'
  }
];

app.get('/api/apps', (req, res) => {
  res.json({
    code: 0,
    data: apps,
    message: 'success'
  });
});

function checkApp(entry) {
  return new Promise((resolve) => {
    const start = Date.now();
    const lib = entry.startsWith('https') ? https : http;
    const req = lib.get(entry, { timeout: 3000 }, (res) => {
      res.resume();
      const alive = res.statusCode >= 200 && res.statusCode < 400;
      resolve({ alive, latency: Date.now() - start });
    });
    req.on('error', () => resolve({ alive: false, latency: 0 }));
    req.on('timeout', () => {
      req.destroy();
      resolve({ alive: false, latency: 0 });
    });
  });
}

app.get('/api/health', async (req, res) => {
  const results = await Promise.all(apps.map(async (app) => {
    const { alive, latency } = await checkApp(app.entry);
    return {
      name: app.name,
      title: app.title,
      entry: app.entry,
      alive,
      latency,
      checkedAt: new Date().toISOString()
    };
  }));
  res.json({
    code: 0,
    data: results,
    message: 'success'
  });
});

app.listen(PORT, () => {
  console.log(`Micro-frontend registry server running at http://localhost:${PORT}`);
  console.log(`Apps registry endpoint: http://localhost:${PORT}/api/apps`);
});
