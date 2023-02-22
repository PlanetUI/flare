<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	const handleError = (ev: any) => (ev.target.src = '/favicon.png');
</script>

<main class="w-full md:px-4 bg-black-1 h-max min-h-max">
	<div
		class="border bg-black-7 font-bold p-4 mt-4 text-green-500 rounded border-green-500 border-l-8 mx-4 md:mx-0">
		Akses awal, akan ada konten dan fitur belum tersedia.
	</div>
	<div
		class="grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-2 gap-0.5 mx-auto md:py-8">
		{#each data.posts as { slug, title, author, description, updated_at, thumbnail, is_premium }}
			<a
				data-sveltekit-reload
				href={'/dash/learn/posts/' + slug}
				class="relative h-min md:rounded-lg md:border md:border-thame-1-variant md:border-opacity-50 hover:outline-thame-1-variant hover:outline hover:outline-2 hover:z-10">
				<div class="absolute right-4 p-0">
					<span
						class:text-green-500={!is_premium}
						class:border-green-500={!is_premium}
						class:text-thame-1={is_premium}
						class:border-thame-1={is_premium}
						class="text-xs border font-mono  rounded px-1">
						{is_premium ? 'PREMIUM' : 'FREE'}
					</span>
				</div>

				<div class="flex h-64">
					<img
						class="m-auto w-40"
						src={thumbnail ? thumbnail : ''}
						on:error={handleError}
						alt={slug} />
				</div>
				<div class="px-4">
					<h5 class="text-thame-1">{title}</h5>
					<div class=" text-thame-3 text-sm font-mono">{author} {updated_at}</div>
					<p>{description}</p>
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
