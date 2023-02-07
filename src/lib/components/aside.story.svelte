<script lang="ts">
	import type { Hst } from '@histoire/plugin-svelte';
	import BaseAside from './aside.svelte';
	export let Hst: Hst;
</script>

<Hst.Story>
	<BaseAside />
</Hst.Story>
