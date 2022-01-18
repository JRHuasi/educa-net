<script>
	import { url, isActive } from "@roxi/routify";
	import { salto } from "../_stores/saltos"

	export let carrera;
	console.log(carrera);
</script>

<div id="area" style="background-color: {carrera.color}">
	<img src="imagenes/areas/{carrera.imagen}" alt="{carrera.area}">
	<h3>{carrera.area}</h3>
	<ul class="cursos">
		{#each carrera.carreras as carr}
			<li>
				 <a href={$url(`estudios/${carr.estudio}`)} target="_blank">
					{carr.nombre}</a>
			</li>
		{/each}
	</ul>
</div>
