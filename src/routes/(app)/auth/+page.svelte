<script>
	import { page } from '$app/stores';
	import { signIn } from '@auth/sveltekit/client';
	$: is_loading = false;

	function login() {
		is_loading = true;
		signIn('google');
	}
</script>

<main class="h-screen w-full overflow-auto flex flex-row py-16 bg-black-1">
	<p class="m-auto flex flex-col">
		{#if !$page.data.session}
			<button
				class="m-auto"
				class:button={!is_loading}
				class:button-disable={is_loading}
				disabled={is_loading}
				on:click={() => login()}>
				{#if is_loading}
					Memuat halaman...
				{:else}
					Masuk dengan Google
				{/if}
			</button>

			<div class="pt-4 max-w-[18rem] m-auto text-center text-xs">
				Dengan masuk menggunakan akun Google, Anda setuju dengan <a
					href="/terms"
					class="text-thame-1">Syarat dan Ketentuan</a> Kamu.
			</div>
		{/if}
	</p>
</main>

<style lang="postcss">
	.button {
		@apply hover:no-underline hover:text-text-1 hover:bg-thame-1-variant bg-thame-1 px-4 py-3 rounded text-xl text-white;
	}
	.button-disable {
		@apply text-white;
	}
</style>
