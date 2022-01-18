<script>
	import { fade } from 'svelte/transition';
	export let imgUrl, name
	// export let totalSlides;
	// export let slideNo;
	export let imageShowing;
</script>


<div class="mySlides" class:show={imageShowing}>
  <!-- <div class="numbertext">{slideNo} / {totalSlides}</div> -->
  <img src={imgUrl} alt={name} transition:fade>
</div>

<style>
.mySlides {
  display: none;
}

/* Number text (1/3 etc) */
img{
	width: 100%;
}

.show {
	display: block;
}
</style>