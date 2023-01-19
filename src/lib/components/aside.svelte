<script>
	import { page } from '$app/stores';
</script>

<aside
	class="bg-black-2 text-text-3 h-full font-overpass pt-16 left-0 z-50 fixed w-64 shadow font-semibold">
	<nav class="flex flex-col h-full">
		<a
			class="px-4 py-2 hover:bg-black-1 hover:no-underline"
			href="/dash"
			class:bg-black-1={$page.url.pathname === '/dash'}
			class:text-text-1={$page.url.pathname === '/dash'}>
			🏠 BERANDA
		</a>
		<a
			class="px-4 py-2 hover:bg-black-1 hover:no-underline"
			href="/dash/curriculum"
			class:bg-black-1={$page.url.pathname.startsWith('/dash/curriculum')}
			class:text-text-1={$page.url.pathname.startsWith('/dash/curriculum')}>
			📖 KURIKULUM
		</a>
		<a
			class="px-4 py-2 hover:bg-black-1 hover:no-underline"
			href="/dash/mod"
			class:bg-black-1={$page.url.pathname.startsWith('/dash/mod')}
			class:text-text-1={$page.url.pathname.startsWith('/dash/mod')}>
			📦 MODULE
		</a>
		<div class="flex-grow" />
		<a
			class="px-4 py-2 hover:bg-black-1 hover:no-underline"
			href="/dash/settings"
			class:bg-black-1={$page.url.pathname.startsWith('/dash/settings')}
			class:text-text-1={$page.url.pathname.startsWith('/dash/settings')}>
			⚙️ PENGATURAN
		</a>
	</nav>
</aside>
