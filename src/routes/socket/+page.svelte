<script lang="ts">
	import { io } from 'socket.io-client';

	const socket = io();
	$: socket_message = '';

	socket.on('eventFromServer', (message) => {
		socket_message = message;
	});
</script>

{socket_message}
