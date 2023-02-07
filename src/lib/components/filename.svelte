<script>
	export let logo = 'https://svelte.dev/logo.png';
	export let name = 'name.js';
</script>

<figure>
	<img src={logo} alt={name} />
	<figcaption>{name}</figcaption>
</figure>
