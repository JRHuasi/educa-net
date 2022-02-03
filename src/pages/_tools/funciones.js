export const trimFrase = (texto) => {
	return texto.trim();
}

export const isEmail = (who) => {
  var email=/^[A-Za-z0-9][\w-.]+[A-Za-z0-9]@[A-Za-z0-9]([\w-.]+[A-Za-z0-9]\.)+([A-Za-z]){2,4}$/i;
  return(email.test(who));
}

export const fechaHora = (timestamp) => {
	const fecha = timestamp.split(" ")[0];
	const hora = timestamp.split(" ")[1];
	const fechaArr = fecha.split('-');
	const horaArr = hora.split(':');
	const fechaLat = `${fechaArr[2]}/${fechaArr[1]}/${fechaArr[0].slice(0,2)} ${horaArr[0]}:${horaArr[1]}`;
	return fechaLat;
}

export const fechaHoy = () => {
	const today = new Date();
	const dd = String(today.getDate()).padStart(2, '0');
	const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	const yyyy = today.getFullYear();
	return yyyy + '-' + mm + '-' + dd;
}

