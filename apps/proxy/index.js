const http = require("http");
const httpProxy = require("http-proxy");

// Define your proxy targets
const proxyTargets = {
  "api.velocity.co.zw": "http://localhost:3000",
  "app.velocity.co.zw": "http://localhost:4000",
  "checkout.velocity.co.zw": "http://localhost:5000",
};

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  const hostParts = req.headers.host.split(".");
  const subdomain = hostParts.length > 2 ? hostParts[0] : null;

  const target = proxyTargets[subdomain];

  if (target) {
    proxy.web(req, res, { target });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

proxy.on("error", (err, req, res) => {
  res.writeHead(500, { "Content-Type": "text/plain" });
  res.end("Proxy error");
});

const PORT = 80;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
