<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<main class="mx-auto">
	<div class="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-2 mx-auto py-8">
		{#each data.posts as { slug, title, author, description, date }}
			<a
				href={'/dash/learn/posts/' + slug}
				class=" bg-black-1 border h-min w-full sm:w-64 p-2 rounded-lg hover:border-thame-1-variant">
				<h5 class="text-thame-1 h-14">{title}</h5>
				<div class=" text-text-3 text-sm font-mono">{author} {date}</div>
				<p class=" h-28">{description}</p>
			</a>
		{/each}
	</div>
</main>

<style>
	a {
		text-decoration: none;
	}

	h5 {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2; /* number of lines to show */
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	h5 {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 4; /* number of lines to show */
		line-clamp: 4;
		-webkit-box-orient: vertical;
	}
</style>
