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

<svelte:component this={component} />
