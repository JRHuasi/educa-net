<script>
  import Slide from './Slide.svelte';
	import {images} from '../_stores/imageSlider';

	// console.log(images);

	let imageShowIndex = 1;
	// $: console.log(imageShowIndex);
	
	const imageNo = images.length;

	const prevSlide = () => {
		imageShowIndex--;
		if(imageShowIndex == 0) {
			imageShowIndex = imageNo;
		}
	}

	const nextSlide = () => {
		imageShowIndex++;
		if(imageShowIndex > imageNo) {
			imageShowIndex = 1;
		}
	}

	setInterval(function () {
		nextSlide();
	}, 5000);

</script>

<div id="slider">
  {#each images as image}
    <Slide 
			image={image}
			totalSlides={images.length} 
			slideNo={image.id}
			imageShowing={image.id === imageShowIndex}
		/>
     <!-- content here -->
  {/each}
  <!-- Full-width images with number text -->



 <!-- Next and previous buttons -->
 <a href="#arrowL" class="prev" on:click={prevSlide}>&#10094;</a>
 <a href="#arrowR" class="next" on:click={nextSlide}>&#10095;</a>
</div>
<style lang="scss">

</style>