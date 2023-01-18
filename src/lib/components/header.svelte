<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
</script>

<header
	class="bg-black-2 text-text-1 font-overpass top-0 z-[100] fixed flex w-full h-16 px-4 shadow">
	<div class="m-auto flex w-full">
		<a href="/" class="flex-grow font-semibold">
			PRACTICAL <span class="text-thame-1">SVELTEKIT</span>
		</a>
		<nav class="flex gap-4">
			{#if $page.data.session}
				<a href="/dash">Dashboard</a>
				<em>
					Hi 👋🏻 <strong>{$page.data.session.user?.name ?? 'User'}</strong>
				</em>
				<button on:click={() => signOut()}>🚪Logout</button>
			{:else}
				<button on:click={() => signIn('google')}>Sign in with Google</button>
			{/if}
		</nav>
	</div>
</header>
