<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
	import ArrowLeft from 'lucide-svelte/icons/arrow-left';

	function scrollTo(id: string) {
		location.hash = '#' + id;
	}
</script>

<div in:fly={{ y: -50 }} class="bottom-0 left-0 z-20 hidden h-12 w-full items-center justify-center gap-8 bg-slate-800 p-4 font-josefin-sans lg:absolute lg:top-0 lg:z-0 lg:mt-24 lg:flex">
	<button class="text-orange-300 hover:underline" onclick={() => scrollTo('1995')}>1995</button>
	<ArrowRight color="white" size="16" />
	<button class="text-orange-300 hover:underline" onclick={() => scrollTo('2010')}>2010</button>
	<ArrowRight color="white" size="16" />
	<button class="text-orange-300 hover:underline" onclick={() => scrollTo('2016')}>2016</button>
</div>

<div in:fly={{ y: 50 }} class="fixed bottom-0 left-0 z-20 flex h-12 w-full items-center justify-center gap-8 bg-slate-800 p-4 font-josefin-sans lg:absolute lg:top-0 lg:z-0 lg:mt-24 lg:hidden">
	<button class="text-orange-300 hover:underline" onclick={() => scrollTo('1995')}>1995</button>
	<ArrowRight color="white" size="16" />
	<button class="text-orange-300 hover:underline" onclick={() => scrollTo('2010')}>2010</button>
	<ArrowRight color="white" size="16" />
	<button class="text-orange-300 hover:underline" onclick={() => scrollTo('2016')}>2016</button>
</div>

<div class="flex h-screen w-full touch-pan-x snap-x snap-mandatory overflow-scroll">
	<div id="1995" in:fly={{ delay: 200 }} class="flex h-screen w-screen shrink-0 snap-start flex-col items-center justify-center px-4 text-justify lg:text-center">
		<h1 class="text-center font-josefin-sans text-7xl font-bold text-orange-500">1995</h1>
		<!-- <p class="font-quicksand text-sm lg:text-base">Somewhere in borneo island. 10 February 1995 at Ramadhan, the man named Maulana Haikal was born to the world.</p> -->
		<p class="font-quicksand text-sm lg:text-base">Disuatu tempat di pulau kalimantan. 10 February 1995, kala itu sedang di bulan Ramadhan, seorang anak laki-laki bernama Maulana Haikal lahir kedunia ini.</p>
		<!-- <p class="font-quicksand text-sm lg:text-base">This kid growing and excalading in the village called Sangatta. Raised by a pair of farmer who work in garden daily.</p> -->
		<p class="font-quicksand text-sm lg:text-base">Anak itu kemudian tumbuh dan berkembang di sebuah desa bernama Sangkima. Dibesarkan oleh sepasang petani yang kesehariannya berkebun.</p>
		<!-- <p class="font-quicksand text-sm lg:text-base">My father like to fishing, then he usually took me to the sea near my place to get some lauk for live.</p> -->
		<p class="font-quicksand text-sm lg:text-base">Ketika musim panen, Ibu sering membawa ku ke pasar untuk berjualan hasil kebun. Kala itu hasil kebun masih di dominasi oleh sayur dan buah-buahan.</p>
		<p class="font-quicksand text-sm lg:text-base">Bapak yang hobi memancing, biasanya mengajak aku ke laut yang berjarak 7km dari rumah untuk mencari bahan pangan pendamping nasi di sore hari.</p>
		<br />
		<p class="pt-2 font-quicksand text-sm lg:text-base">Di desa ini lah aku melewati masa kecilku. Sekolah Taman Kanak-Kanak, Sekolah Dasar, sampai Sekolah Menengah Pertama.</p>
		<p class="font-quicksand text-sm lg:text-base">Kehidupan sangat ringan kala itu, sebagaimana anak kecil lainnya, kesibukan kami hanya bermain dan pekerjaan sambilan kami adalah belajar.</p>
		<p class="font-quicksand text-sm lg:text-base">Meskipun tak ada Televisi, Game, atau bahkan listrik hanya ada di malam hari, aku tumbuh dengan baik di desa itu.</p>
		<p class="font-quicksand text-sm lg:text-base">Sampai akhirnya, perantauan pertama ku dimulai ketika aku menginjak Sekolah Menengah Kejuruan.</p>
	</div>

	<div id="2010" in:fly={{ delay: 200 }} class="flex h-screen w-screen shrink-0 snap-start flex-col items-center justify-center px-4 text-justify lg:text-center">
		<h1 class="text-center font-josefin-sans text-7xl font-bold text-orange-500">2010</h1>
		<!-- <p class="font-quicksand text-sm lg:text-base">Disuatu tempat di pulau kalimantan. 10 February 1995, kala itu sedang di bulan Ramadhan, seorang anak laki-laki bernama Maulana Haikal lahir kedunia ini.</p> -->
		<p class="font-quicksand text-sm lg:text-base">Detail Under Construction</p>
	</div>

	<div id="2016" in:fly={{ delay: 200 }} class="flex h-screen w-screen shrink-0 snap-start flex-col items-center justify-center px-4 text-justify lg:text-center">
		<h1 class="text-center font-josefin-sans text-7xl font-bold text-orange-500">2016</h1>
		<p class="font-quicksand text-sm lg:text-base">Detail Under Construction</p>
	</div>
</div>
