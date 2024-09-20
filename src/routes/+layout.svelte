<script>
	import Head from '$lib/ui/Head.svelte';
	import '../app.css';
</script>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Quicksand:wght@300..700&display=swap');
	</style>
	<title>Maulana Haikal | Indonesian Professional Programmer, Aviation Planner</title>
</svelte:head>

<div class="relative h-full w-full bg-slate-100 text-slate-800">
	<Head />
	<slot></slot>
	<div class="absolute bottom-0 flex h-max w-full gap-2 px-12">
		<div class="mb-4 mt-auto flex w-full flex-col items-center justify-center space-y-2">
			<div class="h-[0.1rem] w-1/3 bg-orange-300"></div>
			<div class="h-[0.19rem] w-2/3 bg-slate-300"></div>
			<div class="h-[0.1rem] w-full bg-orange-300"></div>
		</div>
		<!-- <div
			class="absolute bottom-20 mx-12 w-2/3 bg-orange-300/70 px-4 py-[0.05rem] text-right text-sm font-semibold text-slate-700"
		>
			2024
		</div> -->

		<!-- <div
			class="my-4 flex h-[5rem] w-[22rem] items-center justify-around rounded-lg border border-orange-300 font-bold text-slate-50"
		>
			<p>LinkedIn</p>
			<p>Email</p>
		</div> -->
	</div>
</div>
