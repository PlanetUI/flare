<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { signOut } from '@auth/sveltekit/client';
	import { outclick } from '$lib/outclick';

	let is_menu_open = false;

	async function get_user() {
		return await fetch('/api/user', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
</script>

<header
	class="bg-black-1 text-text-1 font-overpass top-0 z-[100] fixed flex w-full h-16 px-4 shadow-black-2 shadow-sm font-thin">
	<div class="m-auto flex w-full">
		<div class="flex flex-grow">
			<a href="/#" class="my-auto font-semibold hover:text-text-1 hover:no-underline">
				PRACTICAL <span class="text-thame-1">SVELTEKIT</span>
			</a>
		</div>

		<nav class="flex gap-4 font-thin">
			<span class="hidden md:flex">
				<a class="text-text-3 pr-2" href="/#all-access">Member</a>
				{#if $page.data.session}
					<span class="pr-2">﹒</span>
					<a href="/dash/user">
						<span class="pr-2 flex">
							Hi 👋🏻&nbsp;
							{#await get_user() then res}
								{#await res.json() then data}
									<strong class="pr-2 text-thame-3">
										{data.name}
									</strong>
									{#if data.is_premium_user}
										<div class="">
											<span
												class="p-1 text-xs rounded font-mono border border-thame-1 text-thame-1">
												PREMIUM
											</span>
										</div>
									{:else}
										<div class="">
											<span
												class="p-1 text-xs rounded font-mono border border-green-500 text-green-500">
												FREE
											</span>
										</div>
									{/if}
								{/await}
							{/await}
						</span>
					</a>
					<button
						class="hover:text-thame-3 hover:underline border px-2 rounded font-mono text-thame-3 border-thame-3 text-xs"
						on:click={() =>
							signOut({
								callbackUrl: '/'
							})}>
						Keluar 🚪
					</button>
				{:else}
					<button
						on:click={() => goto('/auth')}
						class="hover:text-thame-3 hover:underline border px-2 rounded font-mono text-thame-3 border-thame-3 text-xs">
						Masuk 🔓
					</button>
				{/if}
			</span>
			<div class="flex md:hidden">
				<button
					use:outclick
					on:outclick={() => (is_menu_open = false)}
					on:click={() => (is_menu_open = !is_menu_open)}
					class="m-auto border py-1 px-3">
					⚙
				</button>
			</div>
		</nav>
	</div>
</header>

<div
	class="fixed top-0 right-0 mt-16 p-4 w-full max-w-sm bg-black-1 border-black-2 border-b border-x text-right"
	class:hidden={!is_menu_open}>
	{#if $page.data.session}
		<div class="py-2">
			<a class="text-text-3" href="/#all-access">Member</a>
		</div>
		<div class="py-2">
			<a href="/dash/user">
				<span class="flex w-full">
					<span class="flex-grow" />
					Hi 👋🏻&nbsp;
					{#await get_user() then res}
						{#await res.json() then data}
							<strong class="pr-2 text-thame-3">
								{data.name}
							</strong>
							{#if data.is_premium_user}
								<div class="">
									<span class="p-1 text-xs rounded font-mono border border-thame-1 text-thame-1">
										PREMIUM
									</span>
								</div>
							{:else}
								<div class="">
									<span
										class="p-1 text-xs rounded font-mono border border-green-500 text-green-500">
										FREE
									</span>
								</div>
							{/if}
						{/await}
					{/await}
				</span>
			</a>
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
		<div class="py-2">
			<a class="text-text-3 px-2" href="/#all-access">Premium</a>
		</div>
		<div class="py-2">
			<a href="/auth" class="hover:text-thame-3 hover:underline"> Masuk 🔓 </a>
		</div>
	{/if}
</div>

<style lang="postcss">
	a {
		@apply !text-white hover:!text-thame-3;
	}
</style>
