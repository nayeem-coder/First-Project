const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const dataFile = path.join(root, 'data.json');

if (!fs.existsSync(dataFile)) {
  fs.writeFileSync(dataFile, JSON.stringify({
    profile: {
      displayName: 'Nayem Mia',
      heroTitle: 'I craft beautiful digital experiences with purpose and precision.',
      heroText: 'I am Nayem Mia, a designer and developer focused on premium web experiences, thoughtful branding, and user-centered products.',
      storyText: 'I build modern websites that feel premium, fast, and intuitive on every screen. My focus is turning bold ideas into smooth digital experiences.',
      role: 'UI/UX & Frontend Developer',
      location: 'Bangladesh',
      email: 'hello@nayem.dev',
      phone: '+880 1712 000000',
      facebook: '/nayem.mia',
      linkedin: 'https://www.linkedin.com',
      github: 'https://github.com',
      instagram: 'https://www.instagram.com',
    }
  }, null, 2));
}

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
};

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/api/profile') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(fs.readFileSync(dataFile, 'utf8'));
    return;
  }

  if (req.method === 'POST' && req.url === '/api/profile') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
        data.profile = payload;
        fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true, profile: payload }));
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: 'Invalid payload' }));
      }
    });
    return;
  }

  let safePath = req.url === '/' ? '/index.html' : req.url;
  safePath = safePath.split('?')[0];
  const filePath = path.join(root, safePath);

  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    res.end(content);
  });
});

server.listen(3000, () => {
  console.log('Server running on http://127.0.0.1:3000');
});
