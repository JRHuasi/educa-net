export const post = (request) => {
	const formBody = JSON.parse(request.body);
	const nombre = formBody.nombre;
	const email = formBody.email;
	const curso = formBody.curso;
	const provincia = formBody.provincia;
	const codCelular = formBody.codCelular;
	const localidad = formBody.localidad;
	const celular = formBody.celular;
	const consulta = formBody.consulta;

	return {
		body: {
			curso, provincia, codCelular, nombre, localidad, celular, email, consulta,
		}
	}
}