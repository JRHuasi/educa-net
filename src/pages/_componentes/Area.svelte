<script>
	import { url, isActive } from "@roxi/routify";
	import { salto } from "../_stores/saltos"

	export let area;
	// console.log(area);
</script>

<div id={area.uri} class="area" style="background: url(imagenes/areas_fondos/{area.utf}.jpg) no-repeat; background-position: center center; background-size: cover;">
	<img src="imagenes/areas/{area.imagen}" alt="{area.area}">
	<h3>{area.area}</h3>
	<ul class="cursos">
		{#each area.carreras as carr}
			<li>
				 <a href={$url(`/ufasta/${area.utf}/${carr.estudioUri}`)}>
					{carr.nombre}</a> 
				</li>
		{/each}
	</ul>
</div>
