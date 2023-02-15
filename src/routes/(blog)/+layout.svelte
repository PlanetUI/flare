<script>
	import '$lib/app.css';
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { afterUpdate } from 'svelte';

	afterUpdate(() => {
		hljs.initHighlightingOnLoad();
	});
</script>

<Header />
<main class="p-4 mt-16">
	<slot />
</main>
<Footer />
