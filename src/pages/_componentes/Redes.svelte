<script>
	import Carrera from './Area.svelte';
	import {redes} from '../_stores/areas';
</script>

<div id="redes">
	{#each redes as red}


	<div id="red">
		<img src="imagenes/redes/{red.uri}_.png" alt="">
	</div>

	<!-- content here -->
	{/each}
</div>

<!-- <style lang="scss">

	@media (max-width: 750px) {
		#carreras{
			grid-template-columns: 1fr;
			/* margin: 0 150px; */
		}
	}

</style> -->