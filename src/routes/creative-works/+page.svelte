<script lang="ts">
	import { fly } from 'svelte/transition';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
	import Point from 'lucide-svelte/icons/pointer';
	import Software from 'lucide-svelte/icons/app-window';
	import Music from 'lucide-svelte/icons/music';
	import Novel from 'lucide-svelte/icons/book-type';
	import Design from 'lucide-svelte/icons/paintbrush';
	import Font from 'lucide-svelte/icons/type-outline';

	let container;

	const software = {
		title: 'Software Development',
		items: [
			{
				title: 'Allicator',
				description: `
            <p class="pb-2 text-justify font-quicksand text-sm font-semibold">Allicator is web app act as data collection and calculator for production team in Engineshop at GMF Aero Asia.</p>
						<p class="pb-2 text-justify font-quicksand text-sm font-semibold">This app help production team for calculation process wether in assembly or installation process.</p>
						<p class="text-justify font-quicksand text-sm font-semibold">For longterm, all data collected from this app will be refference for engineer to analyze, compare, or even get the insight which process makes best result into products (Engine).</p>
                  `,
				stack: 'SvelteKit 4, PocketBase'
			},
			{
				title: 'Indoor Engine Position Monitoring',
				description: `
            <p class="pb-2 text-justify font-quicksand text-sm font-semibold">Indoor Engine Position Monitoring is web app to monitor the location of any aircraft engine registered to Engineshop. Also act as preservation control for any aircraft engine parked in Engineshop</p>
            <p class="pb-2 text-justify font-quicksand text-sm font-semibold">This app provide realtime update and accurate notification system for any aircraft engine needs to take perform.</p>
            <p class="pb-2 text-justify font-quicksand text-sm font-semibold">This apps developed for GMF Aero Asia and successfully remove untrack engine preservation and enhance customer relation for quickly inform the location of the engine they are looking for.</p>
            `,
				stack: 'SvelteKit 4, PocketBase'
			},
			{
				title: 'Dirty Updating Issue',
				description: `
            <p class="pb-2 text-justify font-quicksand text-sm font-semibold">DUI Apps, is alike ticketing system for support the efficiency of following issued from raised by the Production team while doing the dirty updating process to Engineer team.</p>
            <p class="pb-2 text-justify font-quicksand text-sm font-semibold">This apps replace old-way using whatsapp group and remove the possibility to overlook of Engineer team for issued have been reported.</p>
            <p class="pb-2 text-justify font-quicksand text-sm font-semibold">This apps developed for GMF Aero Asia and successfully decrease delay time of leftover issued.</p>
            `,
				stack: 'Microsoft Power Apps'
			}
		]
	};
	const music = {
		title: 'Composing Music',
		items: [
			{
				title: 'Allicator',
				audio: ''
			},
			{
				title: 'Indoor Engine Position Monitoring',
				audio: ''
			},
			{
				title: 'Dirty Updating Issue',
				audio: ''
			}
		]
	};

	function scrollTo(id: string) {
		location.hash = '#' + id;
	}
</script>

<div in:fly={{ y: -50 }} class="fixed bottom-0 left-0 z-20 hidden h-12 w-full items-center justify-around bg-slate-800 p-4 font-josefin-sans lg:absolute lg:top-0 lg:z-0 lg:mt-24 lg:flex lg:justify-center lg:gap-8">
	<button class="flex items-center justify-center gap-1 rounded-md px-3 py-2 text-orange-300 underline-offset-2 hover:underline active:bg-slate-700" onclick={() => scrollTo('software')}><Software color="white" size="16" /> <span class="hidden lg:block">Software Development</span></button>
	<button class="flex items-center justify-center gap-1 rounded-md px-3 py-2 text-orange-300 underline-offset-2 hover:underline active:bg-slate-700" onclick={() => scrollTo('music')}><Music color="white" size="16" /> <span class="hidden lg:block">Composing</span></button>
	<button class="flex items-center justify-center gap-1 rounded-md px-3 py-2 text-orange-300 underline-offset-2 hover:underline active:bg-slate-700" onclick={() => scrollTo('novel')}><Novel color="white" size="16" /> <span class="hidden lg:block">Novel</span></button>

	<button class="flex items-center justify-center gap-1 rounded-md px-3 py-2 text-orange-300 underline-offset-2 hover:underline active:bg-slate-700" onclick={() => scrollTo('design')}><Design color="white" size="16" /> <span class="hidden lg:block">Design Graphic</span></button>

	<button class="flex items-center justify-center gap-1 rounded-md px-3 py-2 text-orange-300 underline-offset-2 hover:underline active:bg-slate-700" onclick={() => scrollTo('font')}><Font color="white" size="16" /> <span class="hidden lg:block">Font</span></button>
</div>
<div in:fly={{ y: 50 }} class="fixed bottom-0 left-0 z-20 flex h-12 w-full items-center justify-around bg-slate-800 p-4 font-josefin-sans lg:absolute lg:top-0 lg:z-0 lg:mt-24 lg:hidden lg:justify-center lg:gap-8">
	<button class="flex items-center justify-center gap-1 rounded-md px-3 py-2 text-orange-300 underline-offset-2 hover:underline active:bg-slate-700" onclick={() => scrollTo('software')}><Software color="white" size="16" /> <span class="hidden lg:block">Software Development</span></button>
	<button class="flex items-center justify-center gap-1 rounded-md px-3 py-2 text-orange-300 underline-offset-2 hover:underline active:bg-slate-700" onclick={() => scrollTo('music')}><Music color="white" size="16" /> <span class="hidden lg:block">Composing</span></button>
	<button class="flex items-center justify-center gap-1 rounded-md px-3 py-2 text-orange-300 underline-offset-2 hover:underline active:bg-slate-700" onclick={() => scrollTo('novel')}><Novel color="white" size="16" /> <span class="hidden lg:block">Novel</span></button>

	<button class="flex items-center justify-center gap-1 rounded-md px-3 py-2 text-orange-300 underline-offset-2 hover:underline active:bg-slate-700" onclick={() => scrollTo('design')}><Design color="white" size="16" /> <span class="hidden lg:block">Design Graphic</span></button>

	<button class="flex items-center justify-center gap-1 rounded-md px-3 py-2 text-orange-300 underline-offset-2 hover:underline active:bg-slate-700" onclick={() => scrollTo('font')}><Font color="white" size="16" /> <span class="hidden lg:block">Font</span></button>
</div>

<div class="flex h-full w-full touch-pan-x snap-x snap-mandatory overflow-scroll pt-24 lg:h-screen lg:pt-0">
	<div id="software" in:fly={{ delay: 200 }} class="flex h-full w-screen shrink-0 snap-start flex-col items-center justify-center scroll-smooth px-4 text-justify lg:h-screen lg:text-center">
		<h1 class="text-center font-josefin-sans text-5xl font-bold text-orange-500 lg:text-7xl">{software.title}</h1>
		<div class="flex w-full flex-col items-center justify-center gap-4 pt-4 lg:flex-row">
			{#each software.items as item}
				<div class="flex h-fit w-full flex-col items-start justify-center rounded-xl border border-slate-400 bg-white p-4 lg:h-[500px] lg:w-[350px] lg:p-8">
					<h1 class="mt-auto pb-2 font-quicksand text-xl font-bold text-orange-500">{item.title}</h1>
					<div class="pt-3">
						<p class="pb-2 text-justify font-quicksand text-sm font-bold text-orange-500"># Description</p>
						{@html item.description}
					</div>
					<div class="pt-3">
						<p class="pb-2 text-justify font-quicksand text-sm font-bold text-orange-500"># Stacks</p>
						<p class="pb-2 text-justify font-quicksand text-sm font-semibold">{item.stack}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div id="music" in:fly={{ delay: 200 }} class="flex h-screen w-screen shrink-0 snap-start flex-col items-center justify-center px-4 text-justify lg:text-center">
		<h1 class="pb-4 text-center font-josefin-sans text-5xl font-bold text-orange-500 lg:text-7xl">{music.title}</h1>
		<p class="font-quicksand text-sm lg:text-base">Detail Under Construction</p>

		<!-- {#each music.items as item}
			<div class="mb-2 flex h-24 w-full flex-col items-start justify-start border border-lime-300 p-4 lg:w-2/3">
				<h1>{item.title}</h1>
				<p>track player here</p>
			</div>
		{/each} -->
	</div>

	<div id="novel" in:fly={{ delay: 200 }} class="flex h-screen w-screen shrink-0 snap-start flex-col items-center justify-center px-4 text-justify lg:text-center">
		<h1 class="pb-4 text-center font-josefin-sans text-5xl font-bold text-orange-500 lg:text-7xl">Novel</h1>
		<p class="font-quicksand text-sm lg:text-base">Detail Under Construction</p>
	</div>

	<div id="design" in:fly={{ delay: 200 }} class="flex h-screen w-screen shrink-0 snap-start flex-col items-center justify-center px-4 text-justify lg:text-center">
		<h1 class="pb-4 text-center font-josefin-sans text-5xl font-bold text-orange-500 lg:text-7xl">Design Graphic</h1>
		<p class="font-quicksand text-sm lg:text-base">Detail Under Construction</p>
	</div>

	<div id="font" in:fly={{ delay: 200 }} class="flex h-screen w-screen shrink-0 snap-start flex-col items-center justify-center px-4 text-justify lg:text-center">
		<h1 class="pb-4 text-center font-josefin-sans text-5xl font-bold text-orange-500 lg:text-7xl">Font</h1>
		<p class="font-quicksand text-sm lg:text-base">Detail Under Construction</p>
	</div>
</div>
