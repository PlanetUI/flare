<script>
	import '$lib/app.css';
	import Aside from '$lib/components/aside.svelte';
	import Header from '$lib/components/header.svelte';
</script>

<Header />
<Aside />
<main class="h-screen w-full overflow-auto flex flex-row md:pl-44 pt-16 bg-black-3">
	<slot />
</main>
