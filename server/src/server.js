import { Server } from 'socket.io';
import express from 'express';
import { createServer } from 'http';

const app = express(); 
const server = createServer(app); 
const socketio = new Server(server)


const sockets = new Server(server, {})

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
  });
  
  server.listen(3000, () => {
    console.log('listening on *:3000');
  });

  socketio.on('connection', socket =>{

     socket.on('message', ({name, message}) =>{
       io.emit('message', {name, message})
     })
   })