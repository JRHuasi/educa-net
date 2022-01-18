<script>
	import Area from './Area.svelte';
	import {carreras} from '../_stores/carreras';
	console.log(carreras)
</script>

<div id="carreras">
	{#each carreras as carrera}
		<Area {carrera} />
	 <!-- content here -->
	{/each}
</div>

<style>
	#carreras{
		justify-content: center;
		margin: auto;
		width: 80%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;
	}

	@media (max-width: 750px) {
		#carreras{
			grid-template-columns: 1fr;
			/* margin: 0 150px; */
		}
	}

</style>