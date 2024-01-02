const { WebSocketServer } = require("ws")
const dotenv = require("dotenv")

dotenv.config()
// porta de acesso ou pelo processo global
const wss = new WebSocketServer({ port: process.env.PORT || 8080 })

wss.on("connection", (ws) =>{
    ws.on("error", console.error)
    
    ws.on("message", (data) =>{
        WebSocketServer.clients.forEach((client) => client.send(data.toString()))
    })

    console.log("client connected")
})