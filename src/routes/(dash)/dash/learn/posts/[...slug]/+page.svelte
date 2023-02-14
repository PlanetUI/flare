<script lang="ts">
	import type { SvelteComponentTyped } from 'svelte/internal';
	import type { PageData } from './$types';
	export let data: PageData;
	type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	$: component = data.component as unknown as C;
</script>

<svelte:head>
	<title>{data.frontmatter?.title}</title>
	<meta name="description" content={data.frontmatter?.description} />
</svelte:head>

<div class="pb-4">
	<a href="/dash/learn">⬅ Kembali</a>
</div>

<blockquote
	class="bg-gray-500 bg-opacity-20 border-l-4 border-l-gray-500 text-text-2 font-mono not-italic text-xs">
	Published At&nbsp;: {data.frontmatter?.published_at} <br />
	Updated At&nbsp;&nbsp;&nbsp;: {data.frontmatter?.updated_at} <br />
	Author&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {data.frontmatter?.author}
</blockquote>

<svelte:component this={component} />
