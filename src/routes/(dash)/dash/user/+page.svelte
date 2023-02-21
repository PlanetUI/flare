<script lang="ts">
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import type { PageData } from './$types';

	export let data: PageData;

	let is_loading = false;
	let is_notif_hidden = true;
</script>

<div class="mx-auto w-full max-w-lg mt-4">
	<div
		class:hidden={is_notif_hidden}
		class="flex border border-green-500 rounded-xl p-4 mb-4 bg-black-7 text-green-500">
		<div class="flex-grow">Data telah disimpan!</div>
		<button on:click={() => (is_notif_hidden = true)}>ⓧ</button>
	</div>
	<form
		class="flex flex-col gap-4 p-4 border border-thame-1 rounded-xl w-full bg-black-7"
		action="?/update"
		method="post"
		use:enhance={() => {
			is_loading = true;
			is_notif_hidden = true;
			return ({ form, result }) => {
				is_loading = false;
				if (result.type === 'success') {
					is_notif_hidden = false;
					invalidateAll();
				}
			};
		}}>
		<h2>
			{data.user?.email}
		</h2>

		<div class="grid grid-cols-4">
			<label class="my-auto" for="name">Nama</label>
			<input
				id="name"
				class="px-4 py-2 bg-black-1 text-text-1 col-span-3"
				type="name"
				name="name"
				value={data.user?.name} />
		</div>

		<div class="grid grid-cols-4">
			<label class="my-auto" for="discord">Discord</label>
			<input
				class="px-4 py-2 bg-black-1 text-text-1 col-span-3"
				type="text"
				name="discord"
				id="discord"
				value={data.user?.discord} />
		</div>

		<div class="grid grid-cols-4">
			<label class="my-auto" for="github">GitHub</label>
			<input
				class="px-4 py-2 bg-black-1 text-text-1 col-span-3"
				type="text"
				id="github"
				name="github"
				value={data.user?.github} />
		</div>

		<input
			class:hidden={is_loading}
			class=" bg-thame-1 text-black-1 px-4 py-1 rounded font-bold"
			type="submit"
			value="Update" />
		<span
			class:hidden={!is_loading}
			class=" bg-black-7 border-thame-1 px-4 py-1 rounded font-bold text-center text-text-1">
			Loading
		</span>
	</form>
</div>
