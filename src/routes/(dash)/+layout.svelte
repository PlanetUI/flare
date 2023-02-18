<script>
	import '$lib/app.css';
	import Aside from '$lib/components/aside.svelte';
	import Header from '$lib/components/header.svelte';
	import BottomNavigation from '$lib/components/bottom_navigation.svelte';
</script>

<svelte:head>
	<title>Mashanz Learning Dashboard</title>
</svelte:head>

<Header />
<Aside />
<main class="h-screen w-full overflow-auto flex flex-row md:pl-44 pt-16 bg-black-3 mb-16 md:mb-0">
	<slot />
</main>
<BottomNavigation />
