<script>
	import Fa from 'svelte-fa';
  import { faInstagram, faFacebookF, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
	import { faPhone, faPhoneAlt, faEnvelope, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
	import { defs } from '../_stores/definiciones.js';


</script>
<div id="banda">
	<div id="footer">
		<div id="logo">
			<img src="/imagenes/logo-educanet-transp.png" class="img" alt="logo">
			<div class="fontnunito">
				<div>
					<Fa icon={faEnvelope}/> <span>{defs.email}</span>
				</div>
				<div>
					<Fa icon={faPhoneAlt} /> <span>{defs.whatsapp}</span>
				</div>
				<div>
					<Fa icon={faMapMarkerAlt} /><span>{defs.direccion}</span>
				</div>
			</div>
		</div>
		<div id="informes">
			<p>Informes e Inscripción</p>
			<a href="https://api.whatsapp.com/send?phone=5493865268541&text=Hola EDUCANET, quiero hacer la siguiente consulta: " target="_blank">				
				<span id="what"><Fa icon={faWhatsapp} /></span> +5493865268541
			</a>
		</div>
		<div id="copyright">
			<div>
				<a href={defs.facebook} target="_blank">
					<Fa icon={faFacebookF} />
				</a>
			</div>
			<div>
				<a href={defs.instagram} target="_blank">
					<Fa icon={faInstagram} />
				</a>
			</div>
			
			
			
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