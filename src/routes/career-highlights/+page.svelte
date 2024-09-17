<script>
	import { fly } from 'svelte/transition';
</script>

<div
	in:fly={{ delay: 200 }}
	class="mt-14 flex h-full w-full flex-col p-4 lg:mt-20 lg:flex-row lg:justify-around lg:p-12"
>
	<section class="">
		<h1 class="text-xl font-bold">Education</h1>
		<div class="mt-6">
			<h1># Latest</h1>
			<h1>Bachelor's of Science - Information System</h1>
			<p>Bina Nusantara University - Jakarta</p>
			<p>IPK 3.71 (Scale 4.00)</p>
		</div>
		<div class="mt-6">
			<h1># 2016</h1>
			<h1>Associate of Applied Science - Mechanical Engineering</h1>
			<p>Politeknik Negeri Samarinda - East Borneo</p>
			<p>IPK 3.64 (Scale 4.00)</p>
		</div>
	</section>
	<section class="">
		<h1 class="text-xl font-bold">Employee</h1>
		<div class="mt-6">
			<h1># Latest</h1>
			<h1>Senior Aircraft Planner</h1>
			<p>PT. GMF Aero Asia Tbk. - Jakarta</p>
			<p class="w-[300px]">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, vel consequuntur!
				Quaerat tempore, placeat enim quo modi explicabo! Inventore sapiente repellendus eius sed
				neque omnis harum doloribus nobis dolor molestias.
			</p>
		</div>
		<div class="mt-6">
			<h1># 2022</h1>
			<h1>Production Support Officer</h1>
			<p>PT. GMF Aero Asia Tbk. - Jakarta</p>
			<p class="w-[300px]">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, vel consequuntur!
				Quaerat tempore, placeat enim quo modi explicabo! Inventore sapiente repellendus eius sed
				neque omnis harum doloribus nobis dolor molestias.
			</p>
		</div>
		<div class="mt-6">
			<h1># 2019</h1>
			<h1>Senior Engine Maintenance Technician</h1>
			<p>PT. GMF Aero Asia Tbk. - Jakarta</p>
			<p class="w-[300px]">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, vel consequuntur!
				Quaerat tempore, placeat enim quo modi explicabo! Inventore sapiente repellendus eius sed
				neque omnis harum doloribus nobis dolor molestias.
			</p>
		</div>
		<div class="mt-6">
			<h1># 2019</h1>
			<h1>Trainee for Senior Engine Maintenance Technician</h1>
			<p>PT. GMF Aero Asia Tbk. - Jakarta</p>
			<p class="w-[300px]">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, vel consequuntur!
				Quaerat tempore, placeat enim quo modi explicabo! Inventore sapiente repellendus eius sed
				neque omnis harum doloribus nobis dolor molestias.
			</p>
		</div>
	</section>
</div>
