<script>
	export let users = 0;
	export let premium_users = 0;
</script>

<div class=" bg-black-1 text-thame-1 flex py-12">
	<div class="px-4 w-full">
		<div class="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-4 pt-8 text-center">
			<div class="flex">
				<div
					class="cards border rounded-xl border-thame-3 text-thame-3 max-w-md mx-auto w-full border-opacity-50 hover:border-opacity-100 hover:bg-black-7 p-4">
					<div class="text-3xl md:text-5xl font-extrabold text-thame-3">{users}</div>
					<div class="text-thame-2">Member Terdaftar</div>
				</div>
			</div>

			<div class="flex">
				<div
					class="cards border rounded-xl border-thame-3 text-thame-3 max-w-md mx-auto w-full border-opacity-50 hover:border-opacity-100 hover:bg-black-7 p-4">
					<div class="text-3xl md:text-5xl font-extrabold text-thame-3">
						{premium_users}
					</div>
					<div class="text-thame-2 ">Premium Member</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.cards {
		background: linear-gradient(135deg, hsl(0 0% 7% / 0.1), hsl(204 100% 63% / 0.1));
		@apply bg-black-7;
	}
</style>
