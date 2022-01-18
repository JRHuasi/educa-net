<script>
	import Nav from './_componentes/Nav.svelte';
	import Footer from './_componentes/Footer.svelte';

</script>
<!-- routify:options preload="proximity" -->
<Nav />
<div id="root" class="container">
	<slot />
</div>
<Footer />