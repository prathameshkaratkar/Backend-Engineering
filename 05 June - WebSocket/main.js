const express = require("express");
const WebSocket = require("ws");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${server.address().port}`);
});

const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("A new client connected");
  console.log("wss.clients:", wss.clients.size);

  // Notify all clients about the new connection
  const connectMessage = {
    type: "info",
    message: "A new client has connected"
  };
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(connectMessage));
    }
  });

  ws.on("message", (message) => {
    const data = JSON.parse(message);
    if (data.type === "message" || data.type === "typing") {
      // Broadcast message to all clients
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(data));
        }
      });
    }
  });

  ws.on("close", () => {
    console.log("A client disconnected");
    console.log("wss.clients:", wss.clients.size);

    // Notify all clients about the disconnection
    const disconnectMessage = {
      type: "info",
      message: "A client has disconnected"
    };
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(disconnectMessage));
      }
    });
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});