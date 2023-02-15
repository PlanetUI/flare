<script>
	import '$lib/app.css';
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { afterUpdate } from 'svelte';

	afterUpdate(async () => {
		try {
			let built_in = hljs.getLanguage('bash')?.keywords?.built_in;
			if (!built_in) {
				built_in = [];
			}
			let kwds = ['sudo', 'node', 'pnpm', 'npm', 'n', 'brew', 'curl'];
			hljs.getLanguage('bash').keywords.built_in = [...new Set([...built_in, ...kwds])];
		} catch (error) {
			console.log(error);
		}
		hljs.highlightAll();
	});
</script>

<main class="p-4 bg-black-1 w-full h-max">
	<slot />
</main>
