<script lang="ts">
	import { io } from 'socket.io-client';

	const socket = io();
	$: socket_message = '';

	socket.on('eventFromServer', (message) => {
		socket_message = message;
		console.log(message);
	});
</script>

{socket_message}
