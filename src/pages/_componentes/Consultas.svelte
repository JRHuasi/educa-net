<script>
	import {saltos} from '../_stores/areas';
	import {provincias} from '../_stores/arrays';

	const apiURL = "https://educa.net.ar";

	function isEmail(who) {
		var email=/^[A-Za-z0-9][\w-.]+[A-Za-z0-9]@[A-Za-z0-9]([\w-.]+[A-Za-z0-9]\.)+([A-Za-z]){2,4}$/i;
		console.log('isEmail: '+email.test(who));
		return(email.test(who));
	}

	let curso, provincia, codCelular, nombre ="", localidad, celular, email, consulta;

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
		if(curso==""){
			mensaje("Debes indicar el curso que te interesa")
		}else if(nombre==""){
			mensaje("Debes indicar tu nombre completo")
		}else if(email=="" || !isEmail(email)){
			mensaje("El email debe ser válido")
		}else if(provincia==""){
			mensaje("Indicá el nombre de tu provincia")
		}else if(localidad==""){
			mensaje("Indicá el nombre de tu localidad")
		}else if(codCelular == "" || celular==""){
			mensaje("Completá el número de tu celular")
		}else{
			const datos = new FormData();
			datos.append('curso', curso);
			datos.append('provincia', provincia);
			datos.append('codCelular', codCelular);
			datos.append('nombre', nombre);
			datos.append('localidad', localidad);
			datos.append('celular', celular);
			datos.append('email', email);
			datos.append('consulta', consulta);

			try {
				const submit = await fetch(apiURL+"/api/contacto.php", {
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

<div id="consulta">
	<div class="wpb_column vc_column_container vc_col-sm-2">
		<div class="vc_column-inner">
			<div class="wpb_wrapper"></div>
		</div>
	</div>
	<div id="formulario">
		<div id="titulo">Completá el formulario y recibí más información</div>
		<form on:submit|preventDefault={submitHandler}>
			<div id="inputs">

				<div class="col1">
					<div class="label">Cursado*</div>
					<select bind:value={curso}>
						<option value="">Seleccionar</option>
						{#each saltos as carrera}
							<option value={carrera.nombre}>{carrera.nombre}</option>
						{/each}
					</select>					
				</div>
				<div class="col2">
					<div class="label">Nombre y Apellido*</div>
					<input type="text" bind:value={nombre} name="nombre" size="40" placeholder="Nombre completo">					
				</div>
				<div class="col3">
					<div class="label">Email*</div>
					<input type="email" bind:value={email} size="40" name="email">					
				</div>
				<div class="col4">
					<div class="label">Provincia*</div>
					<select bind:value={provincia} name="provincia">
						<option value="">Seleccionar</option>
						{#each provincias as prov}
							<option value={prov.nombre}>{prov.nombre}</option>
						{/each}
					</select>					
				</div>
				<div class="col5">
					<div class="label">Localidad*</div>
					<input type="text" bind:value={localidad} size="40" name="localidad">					
				</div>
				<div class="col6">
					<div class="label">Consultas</div>
					<textarea bind:value={consulta} cols="8" rows="4"></textarea>					
				</div>
				<div class="col7">
					<div class="label">Cód. de Área*</div>
					<input type="number" step="1" bind:value={codCelular}  size="40" placeholder="">					
				</div>
				<div class="col8">
					<div class="label">Celular*</div>
					<input type="number" step="1" bind:value={celular} size="40" name="celular">					
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