<script>
	import Area from './Area.svelte';
	import {areas} from '../_stores/areas';
</script>

<div id="areas">
	{#each areas as area}
		<Area {area} />
	 <!-- content here -->
	{/each}
</div>

<style>
	#areas{
		justify-content: center;
		margin: auto;
		width: 80%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
	}

	@media (max-width: 750px) {
		#areas{
			grid-template-columns: 1fr;
			/* margin: 0 150px; */
		}
	}
</style>