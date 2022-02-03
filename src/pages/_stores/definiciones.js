export const defs = 
	{"url": "https://educa.net.ar",
	"nombre": "EDUCANET",
	"descripcion": "Fundación Educación Networking",
	"direccion": "9 de Julio 62, Oficina 5. Concpeción. Tucumán",
	"whatsapp":"+5493865268541",
	"email": "uaa.tucconcepcion@ufasta.edu.ar",
	"facebook": "https://www.facebook.com/Fundaci%C3%B3n-Educanet-624711025005231",
	"instagram": "https://www.instagram.com/educa.net.ar/"}
;

export const uris = 
[
	{"url": "http://localhost/epic-flip-store/public/api"},
	{"url": "https://epicflipfba.com/api"},
	{"url": "https://epic.tucma.com/api"}
];

// 0 localhost
// 1 dominio real
// 2 dominio dev
export const entorno = window.location.hostname == "localhost" ? 0 : 2;
