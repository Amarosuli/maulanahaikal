<script lang="ts">
	import { fly } from 'svelte/transition';
	import Download from 'lucide-svelte/icons/file-down';
	import Check from 'lucide-svelte/icons/check';

	type Section<T extends string, U> = {
		sub: T;
		items: U[];
	};

	type EducationItem = {
		year: string;
		title: string;
		releaseBy: string;
		result: string;
	};

	type EmploymentItem = {
		year: string;
		title: string;
		company: string;
		jobdesc: string[];
	};

	type OrganizationItem = {
		year: string;
		title: string;
		location: string;
		description: string;
	};
	type CertificationItem = {
		year: string;
		title: string;
		releaseBy: string;
	};

	type Summary = Section<'Education', EducationItem> | Section<'Employment', EmploymentItem> | Section<'Organization', OrganizationItem> | Section<'Certification', CertificationItem>;
	let summary: Summary[] = [
		{
			sub: 'Education',
			items: [
				{
					year: 'Jul 2020',
					title: "Bachelor's of Science - Information System",
					releaseBy: 'Bina Nusantara University - Jakarta',
					result: 'IPK 3.71 ( Scale 4.00)'
				},
				{
					year: 'Nov 2016',
					title: 'Associate of Applied Science - Mechanical Engineering',
					releaseBy: 'Politeknik Negeri Samarinda - East Borneo',
					result: 'IPK 3.64 ( Scale 4.00)'
				}
			]
		},
		{
			sub: 'Employment',
			items: [
				{
					year: '2020 - Current',
					title: 'Aircraft Maintenance Planner',
					company: 'PT. GMF Aero Asia Tbk., Jakarta',
					jobdesc: ['Planning and scheduling for weekly and daily workload.', 'Perform document segregation and collecting for quality needs.', 'Deploy workload, ship jobcard and material to employee.', 'Reporting to any stakeholder for progress or any issue/event in production.']
				},
				{
					year: '2016 - 2020',
					title: 'Senior Engine Maintenance Technician',
					company: 'PT. GMF Aero Asia Tbk., Jakarta',
					jobdesc: ['Work with CFM56 Engine Series', 'Perform engine remove, install, assembly and disassembly process.', 'Detail Record to any related task in the jobcard.', 'Using Engine Service Manual for guide and refference to work.']
				}
			]
		},
		{
			sub: 'Certification',
			items: [
				{
					year: '2020 - Current',
					title: 'xxxxxx',
					releaseBy: 'xxxxxx'
				}
			]
		},
		{
			sub: 'Organization',
			items: [
				{
					year: '2015 - Current',
					title: 'Koalisi Pemuda Hijau Indonesia',
					location: 'Samarinda, East Borneo',
					description: 'Koalisi Pemuda Hijau Indonesia atau KOPHI adalah sebuah organisasi aktivis pelestarian lingkungan hidup Indonesia.'
				},
				{
					year: '2014 - 2016',
					title: 'UKM Sedaya Polnes',
					location: 'Politeknik Negeri Samarinda, East Borneo',
					description: 'UKM Sedaya Polnes merupakan unit kegiatan mahasiswa di Politeknik Negeri Samarinda. UKM Sedaya Polnes berfokus pada kebudayaan dan kesenian.'
				}
			]
		}
	];
</script>

<div in:fly={{ delay: 200 }} class="flex h-max w-full flex-col items-center justify-center p-6 lg:justify-around lg:p-12">
	<section class="mt-20 border-orange-300 py-4 lg:mt-24 lg:w-2/3">
		<h1 class="font-josefin-sans text-7xl font-bold leading-8 tracking-tighter text-orange-500">Resume</h1>
		<p class="pl-1 font-montserrat text-sm lg:text-base">
			Full CV and details can be found <a class="inline-flex items-start justify-start gap-1 leading-loose" href="https://www.linkedin.com/in/maulana-haikal-997a06b0/">here <Download /> </a>
		</p>
	</section>
	{#each summary as sum}
		{#if sum.sub === 'Education'}
			<section class="mb-12 flex w-full flex-col justify-between border-t border-orange-300 py-4 font-montserrat lg:w-2/3 lg:flex-row">
				<h1 class="font-josefin-sans text-2xl font-bold text-slate-500 underline decoration-orange-500 underline-offset-4 lg:text-3xl">{sum.sub}</h1>
				<div class="mt-6 space-y-2 lg:w-2/3">
					{#each sum.items as item}
						<div class="flex w-full gap-6">
							<h1 class="w-1/6 text-xs font-bold lg:w-1/4 lg:text-base">{item.year}</h1>
							<div class="w-full lg:w-3/4">
								<!-- <img class="h-36" src="/binus_logo.png" alt="kophi_kaltim_logo" /> -->
								<h1 class="text-sm font-bold lg:text-base">{item.title}</h1>
								<p class="text-xs font-semibold lg:text-sm">{item.releaseBy}</p>
								<p class="pt-2 text-xs lg:text-sm">{item.result}</p>
							</div>
						</div>
					{/each}
				</div>
			</section>
		{:else if sum.sub === 'Employment'}
			<section class="mb-12 flex w-full flex-col justify-between border-t border-orange-300 py-4 font-montserrat lg:w-2/3 lg:flex-row">
				<h1 class="font-josefin-sans text-2xl font-bold text-slate-500 underline decoration-orange-500 underline-offset-4 lg:text-3xl">{sum.sub}</h1>
				<div class="mt-6 space-y-2 lg:w-2/3">
					{#each sum.items as item}
						<div class="flex w-full gap-6">
							<h1 class="w-1/6 text-xs font-bold lg:w-1/4 lg:text-base">{item.year}</h1>
							<div class="w-full lg:w-3/4">
								<h1 class="text-sm font-bold lg:text-base">{item.title}</h1>
								<p class="text-xs font-semibold lg:text-sm">{item.company}</p>
								<div class="divide-y border-b pt-2 text-justify text-xs lg:text-sm">
									{#each item.jobdesc as jb}
										<ul class="relative inline-flex w-full items-start gap-2 py-1"><Check size="12" class="absolute -left-4 text-orange-600 lg:-left-6" />{jb}</ul>
									{/each}
								</div>
							</div>
						</div>
					{/each}
				</div>
			</section>
		{:else if sum.sub === 'Certification'}
			<section class="mb-12 flex w-full flex-col justify-between border-t border-orange-300 py-4 font-montserrat lg:w-2/3 lg:flex-row">
				<h1 class="font-josefin-sans text-2xl font-bold text-slate-500 underline decoration-orange-500 underline-offset-4 lg:text-3xl">{sum.sub}</h1>
				<div class="mt-6 space-y-2 lg:w-2/3">
					{#each sum.items as item}
						<div class="flex w-full gap-6">
							<h1 class="w-1/6 text-xs font-bold lg:w-1/4 lg:text-base">{item.year}</h1>
							<div class="w-full lg:w-3/4">
								<h1 class="text-sm font-bold lg:text-base">{item.title}</h1>
								<p class="text-xs font-semibold lg:text-sm">{item.releaseBy}</p>
							</div>
						</div>
					{/each}
				</div>
			</section>
		{:else if sum.sub === 'Organization'}
			<section class="mb-12 flex w-full flex-col justify-between border-t border-orange-300 py-4 font-montserrat lg:w-2/3 lg:flex-row">
				<h1 class="font-josefin-sans text-2xl font-bold text-slate-500 underline decoration-orange-500 underline-offset-4 lg:text-3xl">{sum.sub}</h1>
				<div class="mt-6 space-y-2 lg:w-2/3">
					{#each sum.items as item}
						<div class="flex w-full gap-6">
							<h1 class="w-1/6 text-xs font-bold lg:w-1/4 lg:text-base">{item.year}</h1>
							<div class="w-full lg:w-3/4">
								<!-- <img class="h-36" src="/binus_logo.png" alt="kophi_kaltim_logo" /> -->
								<h1 class="text-sm font-bold lg:text-base">{item.title}</h1>
								<p class="text-xs font-semibold lg:text-sm">{item.location}</p>
								<p class="pt-2 text-justify text-xs lg:text-sm">{item.description}</p>
							</div>
						</div>
					{/each}
				</div>
			</section>
		{/if}
	{/each}
</div>
