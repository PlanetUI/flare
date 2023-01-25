import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

import { handler } from '../build/handler.js';

const port = 4173;
const app = express();
const server = createServer(app);

const io = new Server(server);

let the_data = {};
io.on('connection', (socket) => {
	socket.emit('eventFromServer', 'Hello, World 👋');
	socket.on('eventFromClient', (data) => {
		the_data = data;
		socket.emit('eventFromServer', the_data);
		console.log('server', the_data);
	});
});

// SvelteKit should handle everything else using Express middleware
// https://github.com/sveltejs/kit/tree/master/packages/adapter-node#custom-server
app.use(handler);

server.listen(port);
