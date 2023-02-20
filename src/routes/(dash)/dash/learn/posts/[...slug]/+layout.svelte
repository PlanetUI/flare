<script>
	import '$lib/app.css';
	import { afterUpdate } from 'svelte';
	import hljs from 'highlight.js/lib/core';
	import javascript from 'highlight.js/lib/languages/javascript';
	import bash from 'highlight.js/lib/languages/bash';
	import css from 'highlight.js/lib/languages/css';
	import xml from 'highlight.js/lib/languages/xml';
	import typescript from 'highlight.js/lib/languages/typescript';
	import json from 'highlight.js/lib/languages/json';

	import 'highlight.js/styles/github-dark.css';

	afterUpdate(async () => {
		hljs.registerLanguage('bash', bash);
		hljs.registerLanguage('xml', xml);
		hljs.registerLanguage('css', css);
		hljs.registerLanguage('javascript', javascript);
		hljs.registerLanguage('typescript', typescript);
		hljs.registerLanguage('json', json);

		try {
			let built_in = hljs.getLanguage('bash')?.keywords?.built_in;
			if (!built_in) {
				built_in = [];
			}
			let kwds = ['sudo', 'node', 'pnpm', 'npm', 'n', 'brew', 'curl', '├──', '└──', '│'];
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
