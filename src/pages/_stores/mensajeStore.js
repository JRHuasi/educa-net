import { writable } from 'svelte/store'
import { uris, entorno } from './definiciones';
import { fechaHora } from '../_tools/funciones';

const defis = uris[entorno];
const uri = `${defis.url}/api.php?`;

const datosMensajes = (data) => {
	const datos = data.map((data) => {
		const fechaLat = fechaHora(data.fecha);
		// const fechaLat = data.fecha;
		const textoCorto = data.texto.split(' ').slice(0,20).join(' ')
		return {
			id: data.id,
			fecha: fechaLat,
			nombre: data.nombre,
			email: data.email,
			textoCorto: textoCorto,
			texto: data.texto, 
			leido: data.leido
		};
	});
	return datos;
}

const createMensaje = () => {
	const { subscribe, set} = writable(false)
	
  return {
		subscribe,
    setUser: (user) => {
			set(user)
    },
		listaMensajes: async (pag, cant) => {
			const url = `${uri}accion=listar-mensajes`;
			const res = await fetch(url);
			try {
				const data = await res.json();
				return await datosMensajes(data);
				set(data);
			} catch (err) {
				console.log(err);
				return err
			}
		},
		eliminarMensaje: async (id) => {
			const url = `${uri}accion=eliminar-mensaje&id=${id}`;
			const res = await fetch(url);
			try {
				const data = await res.json();
				return await data;
			} catch (err) {
				console.log(err);
				return err
			}
		},
		enviarConsulta: async (nombre, email, consulta) => {
			const url = `${uri}accion=enviar-consulta`;
			const datos = new FormData();
			datos.append('nombre', nombre.trim());
			datos.append('email', email.trim());
			datos.append('consulta', consulta.trim());
			const res = await fetch(url, {
				method: 'POST',
				body: datos
			});
			try {
				const data = await res.json();
				return data
			} catch (err) {
				console.log(err);
				return err
			}
		}
  }
}

export const mensajes = createMensaje();