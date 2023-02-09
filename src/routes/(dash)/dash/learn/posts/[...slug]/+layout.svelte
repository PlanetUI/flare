<script>
	import '$lib/app.css';
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { onMount } from 'svelte';

	onMount(() => {
		hljs.initHighlightingOnLoad();
	});
</script>

<main class="p-4 bg-black-1 w-full h-max">
	<slot />
</main>
