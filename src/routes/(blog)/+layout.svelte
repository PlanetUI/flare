<script>
	import '$lib/app.css';
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { onMount } from 'svelte';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';

	onMount(() => {
		hljs.initHighlightingOnLoad();
	});
</script>

<Header />
<main class="p-4 mt-16">
	<slot />
</main>
<Footer />
