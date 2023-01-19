<svelte:head>
	<title>Practical SvelteKit</title>
</svelte:head>

<main class="h-screen w-full overflow-auto flex flex-row py-16 bg-black-3">
	<div class="m-auto h-fit p-4">
		<div class="grid grid-cols-2 md:gap-24">
			<div class="flex">
				<div class="m-auto">
					<span class="text-xl font-semibold text-text-2">PRACTICAL</span>
					<div class="md:text-7xl text-4xl tracking-widest font-semibold">
						<span class="text-text-1">SVELTE</span><span class=" pl-1 text-text-3">KIT</span>
					</div>
					<div class="py-2 text-text-2 text-2xl">menjadi fullstack engineer</div>
					<div class="pt-5">
						<a
							data-sveltekit-preload-data="hover"
							href="/dash"
							class=" hover:no-underline hover:text-text-1 hover:bg-thame-1-variant bg-thame-1 px-4 py-3 rounded text-xl text-white">
							mulai belajar ➡
						</a>
					</div>
				</div>
			</div>
			<div class="flex">
				<img class="m-auto w-32 h-32 md:w-72 md:h-72 rounded-full" src="/svelte.png" alt="Logos" />
			</div>
		</div>
	</div>
</main>

<style>
	img {
		box-shadow: 0px 0px 2000px 10px hsl(15 100% 40%);
	}

	main {
		background: linear-gradient(135deg, hsl(204 100% 63% / 0.2), hsl(15 100% 40% / 0.2));
	}
</style>
