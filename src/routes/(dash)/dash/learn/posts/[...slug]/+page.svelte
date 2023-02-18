<script lang="ts">
	import type { SvelteComponentTyped } from 'svelte/internal';
	import type { PageData } from './$types';
	export let data: PageData;
	type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	$: component = data.component as unknown as C;

	const is_premium =
		data.frontmatter?.is_premium === undefined ? false : data.frontmatter?.is_premium;

	let is_render = false;
	if (is_premium === data.is_premium_user) is_render = true;
	if (!is_premium) is_render = true;
</script>

<svelte:head>
	<title>{data.frontmatter?.title}</title>
	<meta name="description" content={data.frontmatter?.description} />
</svelte:head>

<div class="pb-4">
	<a href="/dash/learn">⬅ Kembali</a>
</div>

{#if is_render}
	<blockquote
		class="bg-gray-500 bg-opacity-20 border-l-4 border-l-gray-500 text-text-2 font-mono not-italic text-xs">
		Published At&nbsp;: {data.frontmatter?.published_at} <br />
		Updated At&nbsp;&nbsp;&nbsp;: {data.frontmatter?.updated_at} <br />
		Author&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: {data.frontmatter?.author}
	</blockquote>
	<svelte:component this={component} />
{:else}
	<div
		class="bg-red-500 bg-opacity-20 border-l-4 border-l-red-500 text-text-2 font-mono not-italic text-xs p-4">
		<div class="text-red-500 text-5xl pb-2">⚠️</div>
		<div>
			Anda tidak memiliki akses untuk membaca artikel ini. <br />
			Anda dapat membeli akses premium di <a href="/">sini</a>.
		</div>
	</div>
{/if}
