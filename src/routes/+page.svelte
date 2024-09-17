<script lang="ts">
	import Panel from '$lib/ui/Panel.svelte';
	import { onMount } from 'svelte';
	import type { MouseEventHandler } from 'svelte/elements';
	import { fade, fly, slide } from 'svelte/transition';

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
			title: 'Trainee for Senior Engine Maintenance Technician',
			company: 'PT. GMF Aero Asia Tbk.',
			period: '2016-2017',
			isHovered: true
		},
		{
			id: '2',
			media: 'banner2.jpg',
			title: 'Senior Engine Maintenance Technician',
			company: 'PT. GMF Aero Asia Tbk.',
			period: '2017-2020',
			isHovered: false
		},
		{
			id: '3',
			media: 'banner1.jpg',
			title: 'Production Support Officer',
			company: 'PT. GMF Aero Asia Tbk.',
			period: '2020-2023',
			isHovered: false
		},
		{
			id: '4',
			media: 'banner1.jpg',
			title: 'Senior Aircraft Planner',
			company: 'PT. GMF Aero Asia Tbk.',
			period: '2023-2024',
			isHovered: false
		},
		{
			id: '5',
			media: 'banner1.jpg',
			title: 'Who am i here?',
			company: 'Where am i here?',
			period: '2024-?',
			isHovered: false
		}
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
			isHovered: banner.id === 'banner1'
		}));
	};
</script>

<section
	in:fade={{ delay: 200 }}
	id="bannerSection"
	class="h-screen w-full overflow-auto px-12 pb-12 pt-28"
>
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore a11y_mouse_events_have_key_events -->
	<div
		onmouseleave={mouseleaveHandler}
		bind:this={bannerElements}
		class="relative flex w-max snap-x items-start justify-center gap-2 overflow-x-auto last:pr-12 lg:w-full lg:last:pr-0"
	>
		{#each bannerContents as content}
			<div
				onmouseover={(e) => mouseroverHandler(e, content.id)}
				class="relative z-10 h-[500px] w-[250px] cursor-pointer select-none snap-center overflow-hidden rounded bg-white {content.isHovered
					? 'lg:h-[800px] lg:w-2/6'
					: 'grayscale lg:h-[700px] lg:w-1/6'} transition-all duration-300 ease-out"
			>
				<Panel
					mediaType={content.media.split('.')[1] === 'mp4' ? 'video' : 'image'}
					source={content.media}
				/>
				{#if content.isHovered}
					<div
						in:fade={{ delay: 200 }}
						class="bottom-0 z-30 flex h-[30%] w-full flex-col justify-end bg-gradient-to-t from-gray-900/50 p-12 {content.isHovered
							? 'absolute'
							: 'hidden'}"
					>
						<h1 in:fly={{ delay: 100, duration: 200, x: -10 }} class="text-xl font-bold">
							{content.title}
						</h1>
						<p in:fly={{ delay: 200, duration: 200, x: -17 }} class="text-white">
							{content.company}
						</p>
						<p in:fly={{ delay: 300, duration: 200, x: -20 }} class="text-white">
							Period. {content.period}
						</p>
					</div>
				{/if}
			</div>
		{/each}
	</div>
	<div class="fixed bottom-24 py-6 {`ml-${marginLeft}px`}">
		<h1 class="text-2xl font-bold">Lorem ipsum dolor sit</h1>
		<p class="w-[500px] text-lg">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel mollitia distinctio autem ipsa
			nulla accusamus, iure a nisi tenetur debitis eos! Impedit pariatur eum quis. Voluptates saepe
			beatae eaque libero?
		</p>
	</div>
</section>
