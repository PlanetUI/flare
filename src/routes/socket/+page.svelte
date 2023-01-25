<script lang="ts">
	import { page } from '$app/stores';
	import { io } from 'socket.io-client';

	const socket = io();
	$: socket_message = { email: '', x: 0, y: 0 };

	let m = { email: `${$page.data.session?.user?.name}`, x: 0, y: 0 };

	function handleMousemove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
		socket.on('eventFromServer', (message) => {
			socket_message = message;
			console.log('client', socket_message);
		});
	}

	$: socket.emit('eventFromClient', m);
</script>

<div
	class="w-32 h-32 rounded-full bg-yellow-500 absolute"
	style={`left: ${socket_message.x}px; top: ${socket_message.y}px;`} />
<div class="h-screen w-full bg-green-100" on:mousemove={handleMousemove}>nice</div>
