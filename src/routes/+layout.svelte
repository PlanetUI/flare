<script>
	import '../app.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<Header />
<main class="h-screen w-full overflow-auto flex flex-row py-16 bg-black-3">
	<slot />
</main>
<Footer />
