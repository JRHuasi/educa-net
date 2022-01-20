<script>
	import { fade } from 'svelte/transition';
	export let image, imageShowing

	// export let totalSlides;
	// export let slideNo;
</script>

<div class="mySlides" class:show={imageShowing}>
  <!-- <div class="numbertext">{slideNo} / {totalSlides}</div> -->
  <img src={image.imgUrl} alt={image.texto1} transition:fade>
	<div class="textos">
		<span class="texto1">{@html image.texto1}</span><br>
		<span class="texto2">{@html image.texto2}</span>
	</div>
</div>
