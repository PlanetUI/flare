<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	const handleError = (ev: any) => (ev.target.src = '/favicon.png');
</script>

<main class="w-full mx-4">
	<div class="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-2 mx-auto py-8">
		{#each data.posts as { slug, title, author, description, updated_at, thumbnail, is_premium }}
			<a
				href={'/dash/learn/posts/' + slug}
				class=" bg-black-1 h-min rounded-lg hover:outline-thame-1-variant hover:outline hover:outline-2 hover:outline-offset-2 hover:bg-black-7">
				<div class="flex h-64">
					<img
						class="m-auto w-40"
						src={thumbnail ? thumbnail : ''}
						on:error={handleError}
						alt={slug} />
				</div>
				<div class="p-4">
					<h5 class="text-thame-1">{title}</h5>
					<div class=" text-thame-3 text-sm font-mono">{author} {updated_at}</div>
					<p>{description}</p>
				</div>
				<div class="p-4">
					<div
						class:bg-thame-1-variant={is_premium}
						class:bg-thame-3-variant={!is_premium}
						class="text-white px-4 py-2 rounded text-center">
						{is_premium ? 'Premium' : 'Gratis'}
					</div>
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
