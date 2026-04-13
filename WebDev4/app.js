import http from "node:http"
// import { getDataFromDB } from "./db.js" 

const PORT = 3000

const server = http.createServer(async (req, res) => { // req is request and res is response
    // const destination= await getDataFromDB()

    const urlObj = new URL(req.url, `http://${req.headers.host}`) // to parse the url like http://localhost:3000/api?name=kirtan
    const queryObj = Object.fromEntries(urlObj.searchParams) // to get the query parameters like {name: "kirtan"}
    console.log(urlObj)
    console.log(queryObj)

    if (req.url === '/api' && req.method === 'GET') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json') // 'text/html', 'text/plain', 'application/xml', 'application/pdf', 'image/jpeg', 'image/png', 'image/gif', 'audio/mpeg', 'video/mp4', 'application/zip', 'application/octet-stream'
        // res.write("Hi form Kirtan Dwivedi")
        // res.write(JSON.stringify(destination))
        res.end(JSON.stringify({
            message: "Hello from Kirtan Dwivedi"
        }))
    }
    // else if (req.url.startsWith('/api/continent') && req.method === 'GET') {
    //     const continent= req.url.split('/')[2]
    //     const filteredData= destination.filter((destination)=> 
    //         {return destination.continent.toLowerCase()===continent.toLowerCase() })
    //     res.setHeader('Content-Type', 'application/json')
    //     res.statusCode = 200
    //     res.end(JSON.stringify({
    //         message: `Data for ${continent}`,
    //         data: filteredData
    //     }))
    // }
    else {
        // res.setHeader('Content-Type', 'text/plain')
        // res.statusCode = 404 // below line is same as above two lines
        res.writeHead(404, { 'Content-Type': 'application/json' }) // it took priority over .setHeader()
        res.end(JSON.stringify({ error: "Page Not Found", message: "request denied" }))
    }
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})



// 1. After cloning a git repo run
// npm install // to install the required packages(in node module)
// npm start // to start the index file

// use type: module not commonJS
// For data- JSON.stringify() and JSON.parse()

// body- The actual data in json
// header- how the data requested and responsed - its type, length, etc,, Authorization etc.
// status- success(200-299), client error(400-499), server error(500-599)

/*
APIs-
REST APIs: Resource-based, flexible, and widely supported for web services. (GET, POST, PUT, DELETE, PATCH)
SOAP APIs: XML-based, highly structured protocol for enterprise systems.
GraphQL APIs: Query language that lets clients request exactly the data they need.
gRPC APIs: High-performance, binary communication for microservices.
WebSocket APIs: Continuous, real-time bidirectional connections.
*/