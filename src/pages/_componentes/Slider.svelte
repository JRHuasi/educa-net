<script>
  import Slide from './Slide.svelte';
	import {images} from '../_stores/imageSlider';

	let imageShowIndex = 1;
	$: console.log(imageShowIndex);
	
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
	}, 3000);

</script>

<div class="slider">
  {#each images as {id, imgUrl, name}}
    <Slide 
			imgUrl={imgUrl} 
			name={name} 
			totalSlides={images.length} 
			slideNo={id}
			imageShowing={id === imageShowIndex}
		/>
     <!-- content here -->
  {/each}
  <!-- Full-width images with number text -->

</div>

 <!-- Next and previous buttons -->
 <a href="#arrowL" class="prev" on:click={prevSlide}>&#10094;</a>
 <a href="#arrowR" class="next" on:click={nextSlide}>&#10095;</a>

<style>
  * {
  box-sizing: border-box;
}

/* Position the image container (needed to position the left and right arrows) */
.slider {
  position: relative;
}

/* Hide the images by default */


/* Add a pointer when hovering over the thumbnail images */
.cursor {
  cursor: pointer;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  top: 40%;
  padding: 16px;
  /* margin-top: -50px; */
  color: black;
  font-weight: bold;
  font-size: 20px;
  user-select: none;
	line-height: 0px;
	color: white;
	background: rgba(0,0,0,0.5);
	width: 20px;
	height: 20px;
	position: absolute;
	display: block;
	z-index: 100;
	border-radius: 50%;

}

/* Position the "next button" to the right */
.next {
  right: 0;
  /* border-radius: 3px 0 0 3px; */
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}



/* Container for image text */
.caption-container {
  text-align: center;
  /* background-color: #222; */
  padding: 2px 16px;
  color: black;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Six columns side by side */
.column {
  float: left;
  width: 16.66%;
}

/* Add a transparency effect for thumnbail images */
.demo {
  opacity: 0.6;
}

.active,
.demo:hover {
  opacity: 1;
}
</style>