<script lang="ts">
	import Panel from '$lib/ui/Panel.svelte';
	import { onMount } from 'svelte';
	import type { MouseEventHandler } from 'svelte/elements';
	import { fade, fly, slide } from 'svelte/transition';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
	import LinkedIn from 'lucide-svelte/icons/linkedin';
	import Email from 'lucide-svelte/icons/mailbox';
	import Instagram from 'lucide-svelte/icons/instagram';

	const hoverTriggered = (e: MouseEvent) => {
		// console.log(e);
	};

	let bannerElements: HTMLDivElement;
	// const bannerHandler = () => {
	// 	const bannerElements = document.querySelectorAll('.banner');
	// 	bannerElements.forEach((el) => {
	// 		el.
	// 	});
	// };

	let bannerContents = [
		{
			id: '1',
			media: 'banner1.jpg',
			title: 'Senior Engine Maintenance Technician',
			company: 'PT. GMF Aero Asia Tbk.',
			period: '2016 - 2020',
			isHovered: false
		},
		{
			id: '2',
			media: 'banner2.jpg',
			title: 'Aircraft Maintenance Planner',
			company: 'PT. GMF Aero Asia Tbk.',
			period: '2020 - Current',
			isHovered: true
		}
		// {
		// 	id: '3',
		// 	media: 'banner1.jpg',
		// 	title: 'Production Support Officer',
		// 	company: 'PT. GMF Aero Asia Tbk.',
		// 	period: '2020-2023',
		// 	isHovered: false
		// },
		// {
		// 	id: '4',
		// 	media: 'banner1.jpg',
		// 	title: 'Senior Aircraft Planner',
		// 	company: 'PT. GMF Aero Asia Tbk.',
		// 	period: '2023-2024',
		// 	isHovered: false
		// },
		// {
		// 	id: '5',
		// 	media: 'banner1.jpg',
		// 	title: 'Who am i here?',
		// 	company: 'Where am i here?',
		// 	period: '2024-?',
		// 	isHovered: false
		// }
	];

	let marginLeft = 0;

	const getBannerHovered = (id: string) => {
		marginLeft = Number(id) * 100;
	};

	const mouseroverHandler = (e: MouseEvent, id: string) => {
		getBannerHovered(id);
		bannerContents = bannerContents.map((banner) => ({
			...banner,
			isHovered: banner.id === id
		}));
	};

	const mouseleaveHandler = () => {
		bannerContents = bannerContents.map((banner) => ({
			...banner,
			isHovered: banner.id === '2'
		}));
	};
</script>

<section in:fade={{ delay: 200 }} id="bannerSection" class="h-full min-h-screen w-full overflow-hidden px-6 pb-6 pt-20 lg:px-12 lg:pb-12 lg:pt-28">
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore a11y_mouse_events_have_key_events -->
	<div onmouseleave={mouseleaveHandler} bind:this={bannerElements} class="relative flex gap-2 overflow-auto">
		<div class="flex w-max snap-x gap-3 lg:h-[800px] lg:w-full">
			{#each bannerContents as content}
				<div
					onmouseover={(e) => mouseroverHandler(e, content.id)}
					class="relative z-10 h-[500px] w-[300px] cursor-pointer select-none snap-center snap-always overflow-scroll rounded bg-white active:translate-y-3 {content.isHovered ? 'lg:h-[800px] lg:w-3/6' : 'grayscale lg:h-[700px] lg:w-2/6'} transition-all duration-300 ease-out"
				>
					<Panel mediaType={content.media.split('.')[1] === 'mp4' ? 'video' : 'image'} source={content.media} />
					{#if content.isHovered}
						<div in:fade={{ delay: 200 }} class="bottom-0 z-30 flex h-[30%] w-full flex-col justify-end bg-gradient-to-t from-gray-900/50 p-4 lg:p-12 {content.isHovered ? 'absolute' : 'hidden'}">
							<h1 in:fly={{ delay: 100, duration: 200, x: -10 }} class="pb-2 font-josefin-sans font-bold leading-4 text-white sepia lg:text-xl">
								{content.title}
							</h1>
							<p in:fly={{ delay: 200, duration: 200, x: -17 }} class="font-quicksand text-xs text-white lg:text-base">
								{content.company}
							</p>
							<p in:fly={{ delay: 300, duration: 200, x: -20 }} class="font-quicksand text-xs text-white lg:text-base">
								Period. {content.period}
							</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>
		<div class="hidden w-1/2 place-self-center py-24 lg:block">
			<h1 class="font-josefin-sans text-2xl font-bold text-orange-500">A Bit About Me</h1>
			<p class="w-[500px] font-montserrat text-lg">Aircraft Maintenance Planner working in PT. GMF Aero Asia. Interested in arrange people, work strategy, software programming, and composing music.</p>
			<div class="flex w-full gap-4 pt-8">
				<a class="inline-flex items-center gap-2 rounded-full border bg-white px-6 py-4 font-quicksand font-semibold hover:border-orange-300" href="/career-highlights">Career Highlights <ArrowRight size="20" /></a>
				<a class="inline-flex items-center gap-2 rounded-full border bg-white px-6 py-4 font-quicksand font-semibold hover:border-orange-300" href="/creative-works">Creative Works <ArrowRight size="20" /></a>
				<a class="inline-flex items-center gap-2 rounded-full border bg-white px-6 py-4 font-quicksand font-semibold hover:border-orange-300" href="/personal">Personal <ArrowRight size="20" /></a>
			</div>
		</div>
	</div>
	<div class="my-6 w-full place-self-center p-2 lg:hidden">
		<h1 class="font-josefin-sans text-xl font-bold text-orange-500 lg:text-2xl">A Bit About Me</h1>
		<p class="w-full text-justify font-montserrat text-xs">Aircraft Maintenance Planner working in PT. GMF Aero Asia. Interested in arrange people, work strategy, software programming, and composing music.</p>
		<div class="w-full space-y-2 pt-4 text-center">
			<a class="inline-flex items-center gap-2 rounded-full border bg-white px-6 py-4 font-quicksand text-sm font-semibold hover:border-orange-300" href="/career-highlights">Career Highlights <ArrowRight size="12" /></a>
			<a class="inline-flex items-center gap-2 rounded-full border bg-white px-6 py-4 font-quicksand text-sm font-semibold hover:border-orange-300" href="/creative-works">Creative Works <ArrowRight size="12" /></a>
			<a class="inline-flex items-center gap-2 rounded-full border bg-white px-6 py-4 font-quicksand text-sm font-semibold hover:border-orange-300" href="/personal">Personal <ArrowRight size="12" /></a>
		</div>
	</div>
	<div class="hidden w-full items-center justify-around px-12 lg:mt-24 lg:flex">
		<a class="flex flex-col items-center border border-orange-300 bg-orange-100 px-7 py-3 font-quicksand text-lg font-bold transition-colors ease-in-out hover:bg-orange-200" href="https://instagram.com/maulana.haikal"><Instagram /> Instagram</a>
		<a class="flex flex-col items-center border border-orange-300 bg-orange-100 px-7 py-3 font-quicksand text-lg font-bold transition-colors ease-in-out hover:bg-orange-200" href="mailto:i.lana@ymail.com"><Email /> Email</a>
		<a class="flex flex-col items-center border border-orange-300 bg-orange-100 px-7 py-3 font-quicksand text-lg font-bold transition-colors ease-in-out hover:bg-orange-200" href="https://www.linkedin.com/in/maulana-haikal-997a06b0/"><LinkedIn /> LinkedIn</a>
	</div>
</section>
