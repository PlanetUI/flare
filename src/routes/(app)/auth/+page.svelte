<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
</script>

<main class="h-screen w-full overflow-auto flex flex-row py-16 bg-black-3">
	<p class="m-auto">
		{#if !$page.data.session}
			<span class="notSignedInText">You are not signed in</span>
			<button
				class="hover:no-underline hover:text-text-1 hover:bg-thame-1-variant bg-thame-1 px-4 py-3 rounded text-xl text-white"
				on:click={() => signIn('google')}>Sign In with Google</button>
		{/if}
	</p>
</main>
