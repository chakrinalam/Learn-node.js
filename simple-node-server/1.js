const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/hi") {
        res.end("hello");
    } else {
        res.end("say hi");

    }

})
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
