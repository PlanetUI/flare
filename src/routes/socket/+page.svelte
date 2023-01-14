<script lang="ts">
	import { io } from 'socket.io-client';

	const socket = io();

	socket.on('eventFromServer', (message) => {
		console.log(message);
	});
</script>

<h1 class="text-2xl font-bold">Welcome to SvelteKit</h1>
<p>
	Visit <a class=" text-blue-500" href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
