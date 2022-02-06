<script>
	import {saltos} from '../_stores/areas';
	import {provincias} from '../_stores/arrays';

	const apiURL = "https://educa.net.ar";

	function isEmail(who) {
		var email=/^[A-Za-z0-9][\w-.]+[A-Za-z0-9]@[A-Za-z0-9]([\w-.]+[A-Za-z0-9]\.)+([A-Za-z]){2,4}$/i;
		console.log('isEmail: '+email.test(who));
		return(email.test(who));
	}

	let provincia, codCelular, nombre ="", apellido="", localidad, celular, email, consulta;

	let message = "", error = "";

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

			try {
				const submit = await fetch(apiURL+"/api/cons-carrera.php", {
					method: "POST",
					body: datos
				})
				const data = await submit.json();
				message = data;
			} catch (err) {
				error = err;
			}
		}
	}
</script>

<div id="cons-carrera">
	<div class="wpb_column vc_column_container vc_col-sm-2">
		<div class="vc_column-inner">
			<div class="wpb_wrapper"></div>
		</div>
	</div>
	<div id="formulario">
		<div id="titulo">Completá el formulario<br>y recibí información para el ingreso</div>
		<form on:submit|preventDefault={submitHandler}>
			<div id="inputs">
				<div>
					<input type="text" bind:value={nombre} name="nombre" size="40" placeholder="Nombre completo">
				</div>
				<div>
					<input type="text" bind:value={apellido} name="apellido" size="40" placeholder="Apellido completo">
				</div>
				<div class="col3">
					<div class="label">Email*</div>
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
					<div class="label">Consultas</div>
					<textarea bind:value={consulta} cols="8" rows="4" placeholder="¿Algo que quieras agregar?"></textarea>					
				</div>
				<div class="col8">
					<input type="number" step="1" bind:value={celular} size="40" name="celular" placeholder="Celular completo">
				</div>
			</div>
			<div id="obligatorio">* Datos obligatorios</div>
			<div id="submit">
				<input type="submit" value="RECIBIR INFORMACIÓN" class="wpcf7-form-control wpcf7-submit">
			</div>
		</form>
		<!-- content here -->
		<div class="retorno">
			{#if message}
				<!-- Tu mensaje fue enviado exitosamente<br> -->
				{@html message}
			{/if}
			{#if error}
				Ha ocurrido un error en el envío
			{/if}
		</div>
	</div>
</div>