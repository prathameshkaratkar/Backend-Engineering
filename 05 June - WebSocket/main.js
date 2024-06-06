const express = require('express');
const WebSocket = require('ws');
const path = require('path');

const app  = express();

app.use(express.static(path.join(__dirname, 'public')));

const server = app.listen(process.env.PORT || 3000, () =>{
    console.log(`Server is running on port ${server.address().port}`)
})

const wss = new WebSocket.Server({server});

wss.on('connection',(ws) =>{
    ws.on('message',(message) =>{
        const data = JSON.parse(message);
        if(data.type === 'message' || data.type === 'typing'){
            // Broadcast to all clients
            
            // TODO: We can rewrite this logic to send a message to a particular person
            wss.clients.forEach((client) =>{
                console.log("Client:", client);
                console.log("WebSocket:",WebSocket);
                if(client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(data))
                }
            })
        }
    })
})

app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname, "public", "index.html"))
})