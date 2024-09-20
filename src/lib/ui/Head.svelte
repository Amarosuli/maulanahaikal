<script lang="ts">
	import { sineIn, sineOut } from 'svelte/easing';
	import { fade, fly, slide } from 'svelte/transition';
	import X from 'lucide-svelte/icons/x';
	import Menu from 'lucide-svelte/icons/menu';
	import { navigating } from '$app/stores';
	let isMenuOpen = false;

	$: if ($navigating) isMenuOpen = false;
</script>

<section class="fixed left-0 top-0 z-20 flex h-14 w-full select-none items-center justify-between border-b border-orange-200 bg-white px-4 text-slate-800 lg:h-24 lg:px-12">
	<div>
		<a href="/" class="font-josefin-sans text-lg font-bold tracking-tighter text-slate-700 outline-none transition-colors ease-in-out hover:text-orange-500 lg:text-2xl">MAULANA HAIKAL</a>
	</div>
	<div class="hidden gap-12 lg:flex">
		<a class="font-josefin-sans font-semibold transition-colors ease-in-out hover:text-orange-500" href="/">MH</a>
		<a class="font-josefin-sans font-semibold transition-colors ease-in-out hover:text-orange-500" href="/career-highlights">CAREER HIGHLIGHTS</a>
		<a class="font-josefin-sans font-semibold transition-colors ease-in-out hover:text-orange-500" href="/creative-works">CREATIVE WORKS</a>
		<a class="font-josefin-sans font-semibold transition-colors ease-in-out hover:text-orange-500" href="/personal">PERSONAL</a>
	</div>
	<button onclick={() => (isMenuOpen = true)} class="p-2 lg:hidden"><Menu size="24" /></button>
</section>

{#if isMenuOpen}
	<div in:fade={{ easing: sineIn, duration: 200 }} out:fade={{ easing: sineOut, delay: 300, duration: 200 }} class="fixed inset-0 z-40 flex h-screen w-screen flex-col items-start justify-center gap-12 bg-slate-100 p-14">
		<a transition:fly={{ delay: 100, x: -10 }} class="font-josefin-sans font-semibold transition-colors ease-in-out hover:text-orange-500" href="/">MH</a>
		<a transition:fly={{ delay: 200, x: -10 }} class="font-josefin-sans font-semibold transition-colors ease-in-out hover:text-orange-500" href="/career-highlights">CAREER HIGHLIGHTS</a>
		<a transition:fly={{ delay: 300, x: -10 }} class="font-josefin-sans font-semibold transition-colors ease-in-out hover:text-orange-500" href="/creative-works">CREATIVE WORKS</a>
		<a transition:fly={{ delay: 300, x: -10 }} class="font-josefin-sans font-semibold transition-colors ease-in-out hover:text-orange-500" href="/personal">PERSONAL</a>
		<button onclick={() => (isMenuOpen = false)} class="fixed bottom-20 right-20 inline-flex gap-3 p-2"><X size="32" /></button>
	</div>
{/if}
