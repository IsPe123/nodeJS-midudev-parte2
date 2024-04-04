const http = require('node:http')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
    if (req.url === '/') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end('Hola Mundo!, esta es mi página de inicio')
    }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
    console.log(`server listening on port http://localhost:${desiredPort}`)
})