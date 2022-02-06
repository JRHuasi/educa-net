<script>
	import { metatags, url} from '@roxi/routify';
	import Fa from 'svelte-fa';
  import { faClipboardList, faPercent, faSatelliteDish, faCalendarAlt, faClock, faPenNib, faMap, faBook, faGlasses, faUsers, faChartLine } from '@fortawesome/free-solid-svg-icons';
  import { faCopy } from '@fortawesome/free-regular-svg-icons';
  import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

	import {areas, datosCarrera, educacion} from '../../_stores/areas';

	export let carrera;
	
	let area = "";
	let imagenPrincipal;
	let estudio, carreras, carreraData;
	
	area = window.location.pathname.split('/')[2];
	imagenPrincipal = `/imagenes/areas/${area}/${carrera}.jpg`;
	console.log(window.location.pathname);

	let dato = datosCarrera(carrera, area)[0];
	console.log("DATOS", dato.nombre);

</script>

<div id="carrera">
	<div id="principal">
		<div id="carrera-imagen">
			<img src="{imagenPrincipal}" alt="">
		</div>
		<div id="principal-cuerpo">
			<div id="principal-datos">
				<div class="datos-info">
					<div class="fa"><Fa icon={faSatelliteDish} /></div>
					<div class="tags-inscr">
						<strong>Inscripciones</strong> <br>{dato.inscripciones}
					</div>
					<div class="fa"><Fa icon={faPercent} /></div>
					<div class="tags-inscr desc">
						{@html dato.descuento}
					</div>


					<div class="fa"><Fa icon={faCalendarAlt} /></div>
					<div class="tags-inscr desc">
						Próximo Inicio<br>{dato['proximo-inicio']}
					</div>

					<div class="espacio"></div>
					<div></div>


					<div class="fa"><Fa icon={faCalendarAlt} /></div>
					<div class="tags-inscr desc">
						Duración<br> {dato.duracion}
					</div>

				</div>
			
			</div>
			<div id="principal-form">
				<img src="http://via.placeholder.com/450x253?text=FORM" alt="">
			</div>
		</div>

		<div id="que-vas">
			<div class="que-vas-tit">¿Qué vas a aprender?</div>
			<div class="que-vas-bajada">
				{dato['que-aprender']}
			</div>
		</div>
		<div id="que-vas-items">
			<div class="vas-item">
				<div class="fa-rojo"><Fa icon={faBook}/></div>
				<div class="item-texto">{dato['que-aprender-1'].texto}</div>
			</div>
			<div class="vas-item">
				<div class="fa-rojo"><Fa icon={faGlasses}/></div>
				<div class="item-texto">{dato['que-aprender-2'].texto}</div>
			</div>
			<div class="vas-item">
				<div class="fa-rojo"><Fa icon={faCopy}/></div>
				<div class="item-texto">{dato['que-aprender-3'].texto}</div>
			</div>
		</div>

		<div id="futuro">
			<div id="futuro-titulo">¡Te preparamos para el futuro!</div>
			<div id="futuro-texto">{dato.futuro}</div>
		</div>

		<div id="plan-estudios">
			<div id="plan-estudios-titulo">
				Plan de estudios
			</div>
			<div id="plan-estudios-texto">
				{dato['plan-estudio-texto']}
			</div>
		</div>

		<div id="materias">
			{#each dato['plan-estudio'] as periodo}
			<div class="periodo">
				{periodo.periodo}
			</div>
			<div class="materias">
				<ul>
					{#each periodo.materias as materia}
					<li>{materia.nombre}</li>
					{/each}

				</ul>
			</div>
			{/each}
		</div>

		<div id="info-aranceles">
			Información sobre aranceles
		</div>

		<div id="arranca">
			<div class="arranca-panel">
				<div class="arranca-titulo">
					Contactate con nosotros
				</div>
				<div class="arranca-bajada">
					¿Tenés alguna consulta? Esperamos tu mensaje
				</div>
				<div class="arranca-boton whatsapp">					
						<a href="https://api.whatsapp.com/send?phone=5493865268541&text=Hola, quiero consulta sobre {dato.nombre}" target="_blank">
							<Fa icon={faWhatsapp}/> WhatsApp
						</a>
					</div>
			</div>

			<div class="arranca-panel">
				<div class="arranca-titulo">
					Empezá tu formación hoy
				</div>
				<div class="arranca-bajada">
					Si ya te decidiste, ¡Inscribite HOY!
				</div>
				<div class="arranca-boton">
					<a href={dato.inscripcion} target="_blank">Inscripción</a>
				</div>
			</div>
		</div>

		<div id="queres">
			<div id="queres-texto">
				¿Querés conocer toda nuestra oferta de carreras a distancia?
			</div>
			<div id="queres-boton">
				<a href="/ufasta">Ver carreras online</a>
			</div>
		</div>
		
	</div>
</div>


