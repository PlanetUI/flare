<script>
	import { page } from '$app/stores';
</script>

<aside
	class="bg-black-2 text-text-3 h-full font-overpass pt-16 left-0 z-50 hidden md:block fixed w-44">
	<nav class="flex flex-col h-full">
		<a class="menu" href="/dash" class:active={$page.url.pathname === '/dash'}> 🏠 BERANDA </a>
		<a
			class="menu"
			href="/dash/curriculum"
			class:active={$page.url.pathname.startsWith('/dash/curriculum')}>
			📖 KURIKULUM
		</a>
		<a class="menu" href="/dash/mod" class:active={$page.url.pathname.startsWith('/dash/mod')}>
			📦 MODULE
		</a>
		<a class="menu" href="/dash/learn" class:active={$page.url.pathname.startsWith('/dash/learn')}>
			💻 BELAJAR
		</a>
		<div class="flex-grow" />
		<a
			class="menu"
			href="/dash/settings"
			class:active={$page.url.pathname.startsWith('/dash/settings')}>
			⚙️ PENGATURAN
		</a>
	</nav>
</aside>

<style lang="postcss">
	.menu {
		@apply px-4 py-2 hover:bg-black-1 hover:no-underline border-l-4 border-black-2 hover:border-thame-3;
	}
	.active {
		@apply bg-black-3 border-thame-1 text-text-1;
	}
</style>
