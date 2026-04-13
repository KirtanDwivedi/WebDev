import http from 'node:http'
import { handleFiles } from './handlers/routehandler.js'// to include the file index.html and index.js
import { getTemp } from './getTemp.js'
const __dirname = import.meta.dirname

const server = http.createServer(async (req, res) => {
    if (!req.url.startsWith('/temp/live')) {
        return await handleFiles(req, res, __dirname) // if the link is not available it includes the above function
    } else if (req.url.startsWith('/temp/live')) {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text.event-stream')
        res.setHeader('Cache-Control', 'no-cache')
        res.setHeader('Connection', 'keep-alive')

        setInterval(() => {
            const temperature = getTemp()
            res.write(`data: ${JSON.stringify({ event: 'temp-updated', data: temperature })}\n\n`)
        }, 2000)
    }
})

server.listen(3000, () => {
    console.log('Server is running on port 3000')
})