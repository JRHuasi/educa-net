<script>
	import Fa from 'svelte-fa';
  import { faPhoneAlt, faEnvelope, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
	import {mensajes} from './_stores/mensajeStore';
	import { trimFrase} from './_tools/funciones';
	import { defs } from './_stores/definiciones';
	const apiURL = "https://educa.net.ar";

	let nombre, email, consulta, textoAlerta = "";
	let letras = 15;
	let formContacto = true;

	function isEmail(who) {
		var email=/^[A-Za-z0-9][\w-.]+[A-Za-z0-9]@[A-Za-z0-9]([\w-.]+[A-Za-z0-9]\.)+([A-Za-z]){2,4}$/i;
		console.log('isEmail: '+email.test(who));
		return(email.test(who));
	}

	const reset = () => {
		nombre = "";
		email = "";
		consulta = "";
	}
	reset();

	const enviarConsulta = async () => {
		console.log(isEmail(email));
		// nombre = trimFrase(nombre);
		// email = trimFrase(email);
		// consulta = trimFrase(consulta);
		if(nombre.length < 1){
			setTextoAlerta("Ingresá tu nombre")
		}else if(!isEmail(email)){
			setTextoAlerta("Ingresá una dirección de email válida")
		}else if(consulta.length < letras){
			setTextoAlerta(`Tu consulta debe ser de al menos ${letras} caracteres`)
		}else{

			const datos = new FormData();
			datos.append('nombre', nombre);
			datos.append('email', email);
			datos.append('consulta', consulta);

			try {
				const submit = await fetch(apiURL+"/api/contacto.php", {
					method: "POST",
					body: datos
				})
				const data = await submit.json();
				if(data){
					formContacto = false
				}
			} catch (err) {
				console.log(err);
			}
		}
	}

	const setTextoAlerta = (texto) => {
		textoAlerta = texto;
		setTimeout(function () {
			textoAlerta = "";
		}, 3000);
	}
</script>

<div class="contact" id="contactus">
	<div>
		<div class="row">
			<div class="pt-2 text col-12">
				<img alt=""	src="/imagenes/iso-educanet-transp.png"
					width="200"
					height="200"/>
			</div>
			<div class="text col-12">
				<h5 class="pt-2 px-3 px-md-0 pr-md-5 ">
					Recibe más información sobre nuestras carreras
				</h5>
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
		</div>
	</div>
	<div>
		<h1 class="gold">Contactanos</h1>
			{#if formContacto}
				<form on:submit|preventDefault={enviarConsulta}>
					<div class="form-group">
						<label class="form-label" for="name">Nombre</label><input
							required=""
							placeholder="Ingresa tu Nombre"
							type="text"
							name="nombre"
							class="form-control"
							bind:value={nombre}
						/>
					</div>
					<div class="form-group">
						<label class="form-label" for="mail">Email</label><input
							required=""
							placeholder="Ingresa tu Mail"
							type="email"
							name="email"
							class="form-control"
							bind:value={email}
						/>
					</div>
					<div class="form-group">
						<label class="form-label" for="msg">Mensaje</label>
						<textarea
							required=""
							placeholder="Ingresa tu mensaje"
							rows="5" cols="30"
							name="consulta"
							class="form-control"
							bind:value={consulta}
						/>
					</div>
					<div id="form-base">					
						<button type="submit" class="buttoncontact btn btn-info"
							>Enviar</button
						>
						<div class="texto-auxiliar rojo">{textoAlerta}</div>
					</div>
				</form>
			{:else}
				<div id="cuerpoTexto">						
					<p>La consulta se envió con éxito</p>
					<br>
					<p>A la brevedad te responderá uno de nuestros asesores</p>			
				</div>
			{/if}

	</div>
</div>
