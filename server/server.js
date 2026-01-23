import express from 'express';
import {createServer} from 'http';
import {Server} from 'socket.io';

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer,{
    cors:{origin:"*"}
})

io.on('connection', (socket)=>{
    console.log('a user connected : ', socket.id);

    io.emit('welcome', 'hello user, welcome');
    
    socket.on('message', (data)=>{
        socket.broadcast.emit('message', data);
    })

    socket.on('disconnect', (reason)=>{
        console.log('disonnected : ', socket.id);
        console.log('reason : ', reason);
    })
})

httpServer.listen(3000, ()=>console.log('server started.'))