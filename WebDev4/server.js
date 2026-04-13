import http from "node:http";
import path from "node:path";
import fs from "node:fs/promises"; // Import fs to read,write,update,delete the file

const __dirname = import.meta.dirname;
const PORT = 3000;

const server = http.createServer(async (req, res) => {
    if (req.url === '/sub' && req.method === 'POST') {
        let body = ""
        for await (const chunk of req) {
            body += chunk
        }
        try {
            const emailObj = JSON.parse(body)
            console.log(emailObj)
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(emailObj));
        } catch (err) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: "Invalid JSON" }), err);
        }
    }

    const requestedFile = req.url === '/' ? 'index.html' : req.url;
    const filepath = path.join(__dirname, "..", "WebDev1", requestedFile);

    try {
        const data = await fs.readFile(filepath); // use without utf8(return html, type- string) return buffer(type- object)- more flexible

        const ext = path.extname(filepath);
        const contentType =
            ext === '.css' ? 'text/css' :
                ext === '.js' ? 'text/javascript' : 'text/html'; // ext === '.png' ? 'image/png' : etc.

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    } catch (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("404 Not Found");
    }
});

server.listen(PORT, () => console.log(`Server at http://localhost:${PORT}`));