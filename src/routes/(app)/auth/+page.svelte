<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
</script>

<main class="h-screen w-full overflow-auto flex flex-row py-16 bg-black-3">
	<p>
		{#if $page.data.session}
			{#if $page.data.session.user?.image}
				<span style="background-image: url('{$page.data.session.user.image}')" class="avatar" />
			{/if}
			<span class="signedInText">
				<small>Signed in as</small><br />
				<strong>{$page.data.session.user?.name ?? 'User'}</strong>
			</span>
			<button on:click={() => signOut()} class="button">Sign out</button>
		{:else}
			<span class="notSignedInText">You are not signed in</span>
			<button on:click={() => signIn('google')}>Sign In with Google</button>
		{/if}
	</p>
</main>
