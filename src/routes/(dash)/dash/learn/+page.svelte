<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<main class="w-full mx-4">
	<div class="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-2 mx-auto py-8">
		{#each data.posts as { slug, title, author, description, date, thumbnail }}
			<a
				href={'/dash/learn/posts/' + slug}
				class=" bg-black-1 h-min rounded-lg hover:outline hover:outline-thame-1-variant">
				<img class=" rounded-t-lg" src={thumbnail} alt={slug} />
				<div class="p-4">
					<h5 class="text-thame-1">{title}</h5>
					<div class=" text-thame-3 text-sm font-mono">{author} {date}</div>
					<p>{description}</p>
				</div>
			</a>
		{/each}
	</div>
</main>

<style lang="postcss">
	a {
		text-decoration: none !important;
	}

	a > div {
		@apply pt-2;
	}

	h5 {
		@apply py-0;
	}
</style>
