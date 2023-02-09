<script>
	// tilt effect
	import tilt from '$lib/tilt.js';
	let reverse = false;

	// animation  scroll
	const layers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	let y = 0;
</script>

<svelte:window bind:scrollY={y} />
<svelte:head>
	<title>Practical SvelteKit</title>
</svelte:head>

<main class="h-screen w-full overflow-auto flex flex-col pt-16 bg-black-3">
	<div class="parallax-container" style={`width: ${3000}px; height:${1038}px`}>
		{#each layers as layer}
			<!-- svelte-ignore a11y-missing-attribute -->
			<img
				class:hidden={layer === 3}
				style="transform: translate(0,{(-y * layer) / (layers.length - 1)}px)"
				src="/layer/{layer}.webp" />
			<!-- alt="parallax layer {layer}" -->
		{/each}
	</div>
	<div class="m-auto h-fit p-4">
		<div class="grid grid-cols-2 md:gap-24">
			<div class="flex">
				<div class="m-auto">
					<span class="text-xl font-semibold text-text-2">PRACTICAL</span>
					<div class="md:text-7xl text-4xl tracking-widest font-semibold">
						<span class="text-text-1">SVELTE</span><span class=" pl-1 text-text-3">KIT</span>
					</div>
					<div class="py-2 text-text-2 text-2xl">belajar menjadi fullstack engineer</div>
					<div class="pt-5">
						<a
							data-sveltekit-preload-data="hover"
							href="/dash/learn"
							class="hover:no-underline hover:text-text-1 hover:bg-thame-1-variant bg-thame-1 px-4 py-3 rounded text-xl text-white">
							mulai belajar ➡
						</a>
					</div>
				</div>
			</div>
			<div class="flex" use:tilt={{ scale: 1.1, reverse }}>
				<img
					class="m-auto w-32 h-32 md:w-72 md:h-72 rounded-full logo-svelte"
					src="/svelte.png"
					alt="Logos" />
			</div>
		</div>
	</div>
</main>

<div class=" bg-black-1 text-thame-1 h-screen flex">
	<div class="m-auto text-5xl font-bold">COMING SOON!</div>
</div>

<style>
	.parallax-container {
		opacity: 40%;
		position: fixed;
		left: 50%;
		transform: translate(-50%, 0);
		z-index: -1;
	}

	.parallax-container img {
		position: absolute;
		top: 0;
		left: 0;
		width: auto;
		height: 900px;
		will-change: transform;
	}

	.parallax-container img:last-child::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgb(45, 10, 13);
	}
	/*  */
	.logo-svelte {
		box-shadow: 0px 0px 2000px 10px hsl(15 100% 40%);
	}

	main {
		background: linear-gradient(135deg, hsl(204 100% 63% / 0.2), hsl(15 100% 40% / 0.2));
	}
</style>
