<script>
	import { goto } from '$app/navigation';

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
					<div class="-mt-3 pb-2 text-text-2 text-2xl">Belajar menjadi Fullstack Developer</div>
					<div class="pt-5">
						<a
							data-sveltekit-preload-data="hover"
							href="/dash/learn"
							class="hover:no-underline hover:text-text-1 hover:bg-thame-1-variant bg-thame-1 px-4 py-3 rounded text-xl text-white">
							Mulai Belajar ➡
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

<div class=" bg-black-1 text-thame-1 flex py-12">
	<div class="px-4 w-full">
		<div class=" text-thame-3 text-center">Akses Premium</div>
		<div class=" pt-8 text-center text-3xl md:text-5xl font-extrabold text-thame-1">
			Dapatkan Semua Akses Belajar.
		</div>
		<div class="text-center pt-4 flex">
			<div class="max-w-2xl m-auto">
				<p>
					Belajar Fullstack web development menggunakan <strong>SvelteKit</strong>. Materi
					pembelajaran menggunakan roadmap Fullstack Web Development yang terarah dari dasar hingga
					terapan.
				</p>
			</div>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-4 pt-8 text-center">
			<div
				id="card-1"
				class="border rounded-xl border-thame-1 max-w-md mx-auto w-full border-opacity-50 hover:border-opacity-100 hover:bg-black-7">
				<div class="p-4">
					<div>6 Bulan</div>
					<div class="text-3xl font-bold">Rp. 99.000/bln</div>
					<div class="text-left pt-4">
						<ul>
							<li>Premium akses selama 6 bulan.</li>
							<li>Update materi gratis.</li>
							<li>Akses Forum Group Discords</li>
							<li class="invisible" />
						</ul>
					</div>
				</div>
				<div class="p-4">
					<button
						on:click={() => goto('https://invoice.xendit.co/od/ptmash-6-months-svkit')}
						class="w-full border border-thame-1 p-4 rounded-lg border-opacity-50 text-thame-1 text-opacity-50 hover:border-opacity-100 hover:text-opacity-100 hover:bg-thame-1 hover:text-black-7 font-extrabold">
						Berlangganan 6 Bulan
					</button>
				</div>
			</div>
			<div
				id="card-2"
				class="border rounded-xl border-thame-3 text-thame-3 max-w-md mx-auto w-full border-opacity-50 hover:border-opacity-100 hover:bg-black-7">
				<div class="p-4">
					<div>12 Bulan</div>
					<div class="text-3xl font-bold">Rp. 75.000/bln</div>
					<div class="text-left pt-4">
						<ul>
							<li>Premium akses selama 12 bulan.</li>
							<li>Update materi gratis.</li>
							<li>Hemat Rp. 288.000 (~24%)</li>
							<li>Akses Forum Group Discords</li>
						</ul>
					</div>
				</div>
				<div class="p-4">
					<button
						on:click={() => goto('https://invoice.xendit.co/od/ptmash-12-months-svkit')}
						class="w-full border border-thame-3 p-4 rounded-lg border-opacity-50 text-thame-3 text-opacity-50 hover:border-opacity-100 hover:text-opacity-100 hover:bg-thame-3 hover:text-black-7 font-extrabold">
						Berlangganan 12 Bulan
					</button>
				</div>
			</div>
		</div>
		<div
			id="card-3"
			class="border rounded-xl border-thame-2 text-thame-2 max-w-4xl mx-auto w-full mt-4 text-center border-opacity-50 hover:border-opacity-100 hover:bg-black-7 ">
			<div class="p-4">
				<div class="">Akses Premium Selamanya</div>
				<del class="text-3xl font-bold">Rp. 1.500.000</del>
				<div class="text-3xl font-bold text-green-500">Rp. 500.000</div>
				<div class="text-left max-w-sm w-full pt-4 flex m-auto">
					<ul class="">
						<li>Premium akses selamanya</li>
						<li>Update materi gratis.</li>
						<li>Paling Hemat</li>
						<li>Akses Forum Group Discords</li>
						<li>Akses GitHub Teams</li>
						<li>Akses Source Code Materi</li>
					</ul>
				</div>
			</div>
			<div class="p-4">
				<button
					on:click={() => goto('https://invoice.xendit.co/od/ptmash-lifetime-svkit-earlybird')}
					class="w-full border border-thame-2 p-4 rounded-lg border-opacity-50 text-thame-2 text-opacity-50 font-extrabold">
					Premium Akses Selamanya<br />
					<span class="text-green-500">Early Bird hanya Rp 500.000 untuk akses selamanya</span>
				</button>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	p {
		@apply m-0 p-0;
	}
	li {
		@apply text-thame-2;
	}
	.parallax-container {
		opacity: 25%;
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

	#card-1 {
		background: linear-gradient(135deg, hsl(0 0% 7% / 0.1), hsl(15 100% 40% / 0.1));
		@apply bg-black-7;
	}
	#card-2 {
		background: linear-gradient(135deg, hsl(0 0% 7% / 0.1), hsl(204 100% 63% / 0.1));
		@apply bg-black-7;
	}

	#card-3 {
		background: linear-gradient(135deg, hsl(0 0% 7% / 0.1), hsl(240 8% 43% / 0.1));
		@apply bg-black-7;
	}
</style>
