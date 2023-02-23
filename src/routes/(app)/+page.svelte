<script lang="ts">
	import type { PageData } from './$types';
	import Hero from '$lib/components/sections/hero.svelte';
	import UserRegistered from '$lib/components/sections/user_registered.svelte';
	import Pricing from '$lib/components/sections/pricing.svelte';
	import OtherService from '$lib/components/sections/other_service.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Practical SvelteKit</title>
</svelte:head>

<Hero />

<UserRegistered users={data.users} premium_users={data.premium_users} />

<Pricing />

<OtherService />
