<script>
	import {areas} from '../_stores/areas';
	export let carrera;

	const estudio = areas.filter(area => {
		area.carreras.filter(curso => curso.estudio == carrera)		
	});

	$: console.log(estudio);
	
</script>

<h1>{carrera}</h1>