<script>
	import { metatags } from '@roxi/routify';
	import { defs } from './_stores/definiciones';

	metatags.title = defs.nombre;
	metatags.description = defs.description;

	import Nav from './_componentes/Nav.svelte';
	import Footer from './_componentes/Footer.svelte';

</script>
<!-- routify:options preload="proximity" -->
<Nav />
<div class="contenedor">
	<slot />
</div>
<Footer />