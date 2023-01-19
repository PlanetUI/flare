<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
</script>

<header
	class="bg-black-2 text-text-1 font-overpass top-0 z-[100] fixed flex w-full h-16 px-4 shadow font-thin">
	<div class="m-auto flex w-full">
		<a href="/" class="flex-grow font-semibold hover:text-text-1 hover:no-underline">
			PRACTICAL <span class="text-thame-1">SVELTEKIT</span>
		</a>
		<nav class="flex gap-4 font-thin">
			{#if $page.data.session}
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
			{:else}
				<a href="/auth" class="hover:text-thame-3 hover:underline"> Masuk 🔓 </a>
			{/if}
		</nav>
	</div>
</header>
