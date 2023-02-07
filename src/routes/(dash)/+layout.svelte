<script>
	import '$lib/app.css';
	import Header from '$lib/components/header.svelte';
	import Aside from '$lib/components/aside.svelte';
</script>

<Header />
<Aside />
<main class="h-screen w-full overflow-auto flex flex-row pl-44 py-16 bg-black-3">
	<slot />
</main>
