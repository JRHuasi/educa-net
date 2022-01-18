<script>
	import { goto } from "@roxi/routify";
	import { saltos } from "../_stores/carreras"
	import { salto } from "../_stores/saltos"
	// const salto = (url) => {
	// 	window.location.href = url;
	// }

	export let estudio;

	const carrera = saltos.filter(salto => salto.estudio === estudio);

	console.log({carrera})

	setTimeout(() => {
		// $goto(carrera[0].uri);
		const url = carrera[0].uri;
		salto(url)
		// console.log("BOOM!!!")
	}, 2000);
</script>
<div id="estudio">
	<p>Redireccionando a {carrera[0].nombre} en UFASTA</p>

	<h3>{carrera[0].uri}</h3>
</div>
<style lang="scss">
	#estudio{
		padding: 50px;
		p {
			font-size: 2em;
			font-style: italic;
			font-weight: 500;
		}
	}
</style>