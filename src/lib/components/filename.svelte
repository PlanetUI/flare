<script>
	export let logo = 'https://svelte.dev/favicon.png';
	export let name = 'name.js';
</script>

<figure
	class="flex bg-black max-w-max border-t border-x border-thame-1-variant outline-thame-1 p-2">
	<img class="w-8 h-8" src={logo} alt={name} />
	<figcaption class="my-auto text-text-3 font-mono pl-2">{name}</figcaption>
</figure>
