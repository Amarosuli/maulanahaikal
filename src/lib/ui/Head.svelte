<script lang="ts">
	import { sineIn, sineOut } from 'svelte/easing';
	import { fade, fly, slide, type TransitionConfig } from 'svelte/transition';
	import X from 'lucide-svelte/icons/x';
	import Menu from 'lucide-svelte/icons/menu';
	import { navigating, page } from '$app/stores';

	const menu = [
		{ url: '/', name: 'MH' },
		{ url: '/career-highlights', name: 'CAREER HIGHLIGHTS' },
		{ url: '/creative-works', name: 'CREATIVE WORKS' },
		{ url: '/personal', name: 'PERSONAL' }
	];
	let currentPage = '';
	let isMenuOpen = false;

	function spin(node: Element, options: any): TransitionConfig {
		const { times = 1 } = options;

		return {
			...options,
			css(t) {
				const degrees = -90 * times;
				return `transform: rotate(${t * degrees}deg); opacity: ${t}`;
			}
		};
	}

	$: if ($page) currentPage = $page.url.pathname;
	$: if ($navigating) isMenuOpen = false;
</script>

<section class="fixed left-0 top-0 z-20 flex h-14 w-full select-none items-center justify-between border-b border-orange-200 bg-white px-4 text-slate-800 lg:h-24 lg:px-12">
	<div>
		<a href="/" class="font-josefin-sans text-lg font-bold tracking-tighter text-slate-700 outline-none transition-colors ease-in-out hover:text-orange-500 lg:text-2xl">MAULANA HAIKAL</a>
	</div>
	<div class="hidden gap-12 lg:flex">
		{#each menu as { url, name }}
			<a class="font-josefin-sans font-semibold transition-colors ease-in-out hover:text-orange-500 {currentPage == url ? 'text-orange-500 underline decoration-slate-800 underline-offset-4' : ''}" href={url}>{name}</a>
		{/each}
	</div>
	<button onclick={() => (isMenuOpen = true)} class="p-2 lg:hidden"><Menu size="24" /></button>
</section>

{#if isMenuOpen}
	<div transition:slide={{ easing: sineIn, duration: 100, axis: 'x' }} class="fixed inset-0 z-40 flex h-screen w-screen flex-col items-start justify-center gap-12 bg-orange-500/95 p-14">
		<a transition:fly={{ delay: 60 * 1, x: -20 }} class="font-josefin-sans text-lg font-bold underline decoration-slate-800 underline-offset-4 transition-colors ease-in-out hover:text-orange-500 {currentPage == '/' ? 'text-slate-800  ' : 'text-white'}" href="/">MH</a>
		<a transition:fly={{ delay: 60 * 2, x: -20 }} class="font-josefin-sans text-lg font-bold underline decoration-slate-800 underline-offset-4 transition-colors ease-in-out hover:text-orange-500 {currentPage == '/career-highlights' ? 'text-slate-800  ' : 'text-white'}" href="/career-highlights"
			>CAREER HIGHLIGHTS</a
		>
		<a transition:fly={{ delay: 60 * 3, x: -20 }} class="font-josefin-sans text-lg font-bold underline decoration-slate-800 underline-offset-4 transition-colors ease-in-out hover:text-orange-500 {currentPage == '/creative-works' ? 'text-slate-800  ' : 'text-white'}" href="/creative-works"
			>CREATIVE WORKS</a
		>
		<a transition:fly={{ delay: 60 * 4, x: -20 }} class="font-josefin-sans text-lg font-bold underline decoration-slate-800 underline-offset-4 transition-colors ease-in-out hover:text-orange-500 {currentPage == '/personal' ? 'text-slate-800  ' : 'text-white'}" href="/personal">PERSONAL</a>

		<button transition:spin={{ duration: 200, easing: sineOut }} onclick={() => (isMenuOpen = false)} class="fixed bottom-20 right-20 inline-flex gap-3 rounded-full p-2 transition-transform ease-in active:scale-75"><X color="white" size="50" /></button>
	</div>
{/if}
