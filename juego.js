// Variables globales
let puntuacionHumano = 0;
let puntuacionMaquina = 0;
const meta = 100;

// Función para generar un número aleatorio entre 1 y 6
function lanzarDado() {
	return Math.floor(Math.random() * 6) + 1;
}

// Función para manejar el lanzamiento del jugador humano
function lanzamientoHumano() {
	const lanzamiento = lanzarDado();
	document.getElementById("lanzamiento-humano").textContent = lanzamiento;
	puntuacionHumano += lanzamiento;
	document.getElementById("puntuacion-humano").textContent = puntuacionHumano;
	if (puntuacionHumano >= meta) {
		finJuego();
	} else {
		lanzamientoMaquina();
	}
}

// Función para manejar el lanzamiento de la máquina
function lanzamientoMaquina() {
	document.getElementById("lanzar-dado-humano").disabled = true;
	document.getElementById("lanzar-dado-maquina").disabled = true;
	setTimeout(() => {
		const lanzamiento = lanzarDado();
		document.getElementById("lanzamiento-maquina").textContent = lanzamiento;
		puntuacionMaquina += lanzamiento;
		document.getElementById("puntuacion-maquina").textContent = puntuacionMaquina;
		if (puntuacionMaquina >= meta) {
			finJuego();
		} else {
			document.getElementById("lanzar-dado-humano").disabled = false;
			document.getElementById("lanzar-dado-maquina").disabled = false;
		}
	}, 1000);
}

// Función para finalizar el juego
function finJuego() {
	document.getElementById("lanzar-dado-humano").disabled = true;
	document.getElementById("lanzar-dado-maquina").disabled = true;
	if (puntuacionHumano >= meta) {
		document.getElementById("mensaje").textContent = "¡Ganaste!";
		document.getElementById("mensaje").classList.add("ganador");
		document.getElementById("mensaje").classList.remove("perdedor");
		document.getElementById("puntuacion-humano").classList.add("ganador");
		document.getElementById("puntuacion-maquina").classList.add("perdedor");
	} else {
		document.getElementById("mensaje").textContent = "Perdiste...";
		document.getElementById("mensaje").classList.add("perdedor");
		document.getElementById("mensaje").classList.remove("ganador");
		document.getElementById("puntuacion-humano").classList.add("perdedor");
		document.getElementById("puntuacion-maquina").classList.add("ganador");
	}
}

// Asignar eventos a los botones de lanzamiento
document.getElementById("lanzar-dado-humano").addEventListener("click", lanzamientoHumano);
document.getElementById("lanzar-dado-maquina").addEventListener("click", lanzamientoMaquina);
