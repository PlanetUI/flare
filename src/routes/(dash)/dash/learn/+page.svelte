<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	const handleError = (ev: any) => (ev.target.src = '/favicon.png');
</script>

<main class="w-full md:mx-4">
	<div class="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 md:gap-2 gap-0.5 mx-auto md:py-8">
		{#each data.posts as { slug, title, author, description, updated_at, thumbnail, is_premium }}
			<a
				href={'/dash/learn/posts/' + slug}
				class=" h-min md:rounded-lg hover:outline-thame-1-variant hover:outline hover:outline-2 hover:outline-offset-2 hover:z-10">
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
		background: linear-gradient(135deg, hsl(0 0% 7% / 0.1), hsl(15 100% 40% / 0.1));
		@apply bg-black-7;
		text-decoration: none !important;
	}

	a > div {
		@apply pt-2;
	}

	h5 {
		@apply py-0;
	}
</style>
