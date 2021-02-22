console.log("ok")

const btnPing = document.getElementById("btnPing")

const clientsocket = io();

clientsocket.on("connect", (socket) => {
    console.log("connesso")
    btnPing.onclick = () => {
        clientsocket.emit("ping", {})
    }
})

clientsocket.on("message", (params) => {
    console.log("messagio dal server", JSON.stringify(params, null, 2))
})

clientsocket.on("pong", (params) => {
    console.log("pong ricevuto")
})