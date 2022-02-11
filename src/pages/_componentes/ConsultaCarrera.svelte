<script>
	import Fa from 'svelte-fa';
  import { faTimes } from '@fortawesome/free-solid-svg-icons';
	import {saltos} from '../_stores/areas';
	import {provincias} from '../_stores/arrays';


	export let curso, mostrarConsulta;

	const apiURL = "https://educa.net.ar";

	function isEmail(who) {
		var email=/^[A-Za-z0-9][\w-.]+[A-Za-z0-9]@[A-Za-z0-9]([\w-.]+[A-Za-z0-9]\.)+([A-Za-z]){2,4}$/i;
		console.log('isEmail: '+email.test(who));
		return(email.test(who));
	}

	let provincia, codCelular, nombre ="", apellido="", localidad, celular="", email="", consulta="";

	let message = "", error = "";

	let formulario = true;

	const mensaje = (texto) => {
		message = texto;
		console.log({message});
		
		setTimeout(() => {
			message = "";
		}, 2000);
	}

	const submitHandler = async () => {
		message = "";
		if(nombre==""){
			mensaje("Debes indicar tu nombre completo")
		}if(apellido==""){
			mensaje("Debes indicar tu apellido completo")
		}else if(email=="" || !isEmail(email)){
			mensaje("El email debe ser válido")
		}else if(provincia==""){
			mensaje("Indicá el nombre de tu provincia")
		}else if(localidad==""){
			mensaje("Indicá el nombre de tu localidad")
		}else if(celular==""){
			mensaje("Ingresá tu número de celular completo")
		}else{
			const datos = new FormData();
			datos.append('nombre', nombre);
			datos.append('apellido', apellido);
			datos.append('provincia', provincia);
			datos.append('localidad', localidad);
			datos.append('celular', celular);
			datos.append('email', email);
			datos.append('consulta', consulta);
			datos.append('curso',curso);

			try {
				const submit = await fetch(apiURL+"/api/cons-carrera.php", {
					method: "POST",
					body: datos
				})
				const data = await submit.json();
				message = data;
				formulario = false;
			} catch (err) {
				error = err;
			}
		}
	}
</script>

<div id="cons-carrera">
	<div id="close" on:click={() => mostrarConsulta()}>
		<Fa icon={faTimes} />
	</div>
	{#if formulario}
		<div id="formulario">
			<div id="titulo">Completá el formulario<br>y recibí información para el ingreso en</div>
			<div id="curso">{curso}</div>
			<form on:submit|preventDefault={submitHandler}>
				<div id="inputs">
					<div>
						<input type="text" bind:value={nombre} name="nombre" size="40" placeholder="Nombre completo">
					</div>
					<div>
						<input type="text" bind:value={apellido} name="apellido" size="40" placeholder="Apellido completo">
					</div>
					<div class="col3">
						<input type="email" bind:value={email} size="40" name="email" placeholder="Dirección email">					
					</div>
					<div class="col4">
						<select bind:value={provincia} name="provincia">
							<option value="">Provincia</option>
							{#each provincias as prov}
								<option value={prov.nombre}>{prov.nombre}</option>
							{/each}
						</select>					
					</div>
					<div class="col5">
						<input type="text" bind:value={localidad} size="40" name="localidad" placeholder="Localidad">					
					</div>
					<div class="col6">
						<textarea bind:value={consulta} cols="4" rows="4" placeholder="¿Algo que quieras agregar?"></textarea>					
					</div>
					<div class="col8">
						<input type="number" step="1" bind:value={celular} size="40" name="celular" placeholder="Número de celular con el código de área">
					</div>
				</div>
				<div id="obligatorio">* Datos obligatorios</div>
				<div class="retorno">
					{#if message}
						<!-- Tu mensaje fue enviado exitosamente<br> -->
						{@html message}
					{/if}
					{#if error}
						Ha ocurrido un error en el envío
					{/if}
				</div>
				<div id="submit">
					<input type="submit" value="ENVIAR" class="wpcf7-form-control wpcf7-submit">
				</div>
			</form>
		</div>
	{:else}
		<div id="resultado">
			<p>Tu consulta fue enviada con éxito</p>
			<p>A la brevedad uno de nuestros asesores se pondrá en contact</p>
			<p>Muchas gracias</p>
		</div>
	{/if}
</div>