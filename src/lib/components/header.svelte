<script>
	import { page } from '$app/stores';
	import { signOut } from '@auth/sveltekit/client';

	let is_menu_open = false;
</script>

<header
	class="bg-black-2 text-text-1 font-overpass top-0 z-[100] fixed flex w-full h-16 px-4 shadow font-thin">
	<div class="m-auto flex w-full">
		<div class="flex flex-grow">
			<a href="/" class="my-auto font-semibold hover:text-text-1 hover:no-underline">
				PRACTICAL <span class="text-thame-1">SVELTEKIT</span>
			</a>
		</div>

		<nav class="flex gap-4 font-thin">
			{#if $page.data.session}
				<span class="hidden md:block">
					<em>
						Hi 👋🏻 <strong>{$page.data.session.user?.name ?? 'User'}</strong>
					</em>
					<button
						class="hover:text-thame-3 hover:underline"
						on:click={() =>
							signOut({
								callbackUrl: '/'
							})}>
						🚪Keluar
					</button>
				</span>
			{:else}
				<a href="/auth" class="hover:text-thame-3 hover:underline hidden md:block"> Masuk 🔓 </a>
			{/if}
			<div class="flex md:hidden">
				<button on:click={() => (is_menu_open = !is_menu_open)} class="m-auto border py-1 px-3">
					⚙
				</button>
			</div>
		</nav>
	</div>
</header>

<div
	class="absolute top-0 right-0 mt-16 p-4 w-full max-w-sm bg-black-2 border-b border-x text-right"
	class:hidden={!is_menu_open}>
	{#if $page.data.session}
		<div class="py-2">
			<em>
				Hi 👋🏻 <strong>{$page.data.session.user?.name ?? 'User'}</strong>
			</em>
		</div>

		<div class="py-2">
			<button
				class="hover:text-thame-3 hover:underline"
				on:click={() =>
					signOut({
						callbackUrl: '/'
					})}>
				🚪Keluar
			</button>
		</div>
	{:else}
		<a href="/auth" class="hover:text-thame-3 hover:underline"> Masuk 🔓 </a>
	{/if}
</div>

<style lang="postcss">
	a {
		@apply !text-white hover:!text-thame-3;
	}
</style>
