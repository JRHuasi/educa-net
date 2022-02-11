<script>
	import { url, isActive, afterPageLoad } from "@roxi/routify";
	import {_enlacesMenu } from '../_stores/navLinks';
	import Fa from 'svelte-fa';
  import { faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';

	let ubicacion  = "";
	$afterPageLoad(page => {
		ubicacion = window.location.pathname.split('/')[1];
	})

  let show = false;

	$: console.log({ubicacion});

	function handleBurger() {
    show = !show;
  }
</script>

<aside>
  <nav class="mobile-nav">
    <span class="burger" on:click={handleBurger}>☰</span>
    <span class="title">
			<a href="/">
				<img src="/imagenes/logo-educanet.jpg" alt="" title="DONDE">
			</a>
			{#if ubicacion=="ufasta"}
				<a href="https://www.ufasta.edu.ar/" target="_blank">
					<img src="/imagenes/ufasta-logo.png" alt="" id="logo-ufasta-burquer"  class="logo-ufasta">
				</a>
			{/if}
		</span>    
  </nav>
  <nav class:show on:click={() => (show = false)}>
		<a href="/" id="logo-superior">
			<img src="/imagenes/logo-educanet.jpg" alt="">
		</a>
		{#if ubicacion=="ufasta" && !show}
		<a href="https://www.ufasta.edu.ar/" target="_blank">
			<img src="/imagenes/ufasta-logo.png" alt="" title="UFASTA" id="logo-ufasta-burquer"  class="logo-ufasta">
		</a>
	{/if}

    {#each _enlacesMenu as [path, name]}
      <a class="link" class:active={$isActive(path)} href={$url(path)}>
        {@html name}
      </a>
    {/each}
</nav>
</aside>

<style lang="scss">

  img{
    width: 200px;
  }
  
</style>

