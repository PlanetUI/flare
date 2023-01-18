<script>
	import '../app.css';
	import Header from '$lib/components/header.svelte';
</script>

<Header />
<main class="h-screen w-full overflow-auto flex flex-row py-16">
	<slot />
</main>
