<script lang="ts">
	import { fade, fly, slide } from 'svelte/transition';

	let isMenuOpen = false;
</script>

<section
	class="fixed left-0 top-0 z-20 flex h-14 w-full items-center justify-between border-b border-orange-300 bg-slate-800 px-4 lg:h-24 lg:px-12"
>
	<div>
		<h1 class="text-xl font-bold text-orange-300 lg:text-2xl">MAULANA HAIKAL</h1>
	</div>
	<div class="hidden gap-12 lg:flex">
		<a class="font-semibold" href="/">MH</a>
		<a class="font-semibold" href="/career-highlights">CAREER HIGHLIGHTS</a>
		<a class="font-semibold" href="/creative">CREATIVE WORKS</a>
	</div>
	<button onclick={() => (isMenuOpen = true)} class="p-2 lg:hidden">✖️</button>
</section>

{#if isMenuOpen}
	<div
		transition:fade
		class="fixed inset-0 z-40 flex h-screen w-screen flex-col items-start justify-center gap-12 bg-slate-800 p-14"
	>
		<a in:fly={{ delay: 100, x: -10 }} class="font-semibold" href="/">MH</a>
		<a in:fly={{ delay: 200, x: -10 }} class="font-semibold" href="/career-highlights"
			>CAREER HIGHLIGHTS</a
		>
		<a in:fly={{ delay: 300, x: -10 }} class="font-semibold" href="/creative">CREATIVE WORKS</a>
		<button onclick={() => (isMenuOpen = false)} class="fixed bottom-20 right-20 p-2">✖️</button>
	</div>
{/if}
