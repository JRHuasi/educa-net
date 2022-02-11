<script>
	import { metatags, afterPageLoad, url } from '@roxi/routify';
	import { defs } from './_stores/definiciones';

	metatags.title = defs.nombre;
	metatags.description = defs.descripcion;

	import Nav from './_componentes/Nav.svelte';
	import Footer from './_componentes/Footer.svelte';
	let ubicacion  = "";
	$afterPageLoad(page => {
		ubicacion = window.location.pathname.split('/')[1];
	})
</script>
<!-- routify:options preload="proximity" -->
<Nav ubucacion={ubicacion} />
<div class="contenedor">
	<slot />
</div>
<Footer />