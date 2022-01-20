<script>
	import { url, isActive } from "@roxi/routify";
	import {_enlacesMenu } from '../_stores/navLinks';
	import Fa from 'svelte-fa';
  import { faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';


  let show = false;

	function handleBurger() {
    show = !show;
  }
</script>

<aside>
  <nav class="mobile-nav">
    <span class="burger" on:click={handleBurger}>☰</span>
    <span class="title"><a href="/"><img src="/imagenes/logo-educanet.jpg" alt=""></a></span>    
  </nav>
  <nav class:show on:click={() => (show = false)}>
		<a href="/" id="logo-superior">
			<img src="/imagenes/logo-educanet.jpg" alt="">
		</a>
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

