const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());
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

app.listen(PORT, () => {
  console.log(`Micro-frontend registry server running at http://localhost:${PORT}`);
  console.log(`Apps registry endpoint: http://localhost:${PORT}/api/apps`);
});
