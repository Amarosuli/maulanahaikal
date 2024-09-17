<script lang="ts">
	type Props = {
		mediaType: 'image' | 'video';
		source?: string;
	};

	let { mediaType, source }: Props = $props();
</script>

{#if mediaType === 'image'}
	<img class="h-full w-full object-cover" src="/{source}" alt="" />
{:else if mediaType === 'video'}
	<!-- svelte-ignore a11y_media_has_caption -->
	<video class="h-full object-cover" autoplay loop src="/{source}"></video>
{/if}
