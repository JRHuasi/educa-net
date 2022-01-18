<script>
	import Fa from 'svelte-fa';
  import { faInstagram, faFacebookF, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
	import { faPhone } from '@fortawesome/free-solid-svg-icons';

</script>
<div id="banda">
	<div id="footer">
		<div id="logo">
			<img src="/imagenes/logo-educanet-transp.png" class="img" alt="logo">
		</div>
		<div id="informes">
			<p>Informes e Inscripción</p>
			<Fa icon={faWhatsapp} /> +5493865268541
		</div>
		<div id="copyright">
			<Fa icon={faFacebookF} />
			<Fa icon={faInstagram} />
			
		</div>
	</div>
	<div id="banda-inferior">
		<div>© 2021 - UFASTA - Todos los derechos reservados <br>Desarrollado por 
				<div id="tucmacom">
				<a href="https://tucma/" target="_blank">TUCMA.COM</a>
				</div>
			</div>
			<p class="pb-4">
				<a class="btn btn-link rounded text-white" href="/documento/terminos"> Términos de servicio </a> | 
				<a class="btn btn-link rounded text-white" href="/documento/privacidad"> Política de facturación</a>
			</p>
	</div>
	
</div>