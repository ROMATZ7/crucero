const acertijos = [
    { pregunta: "Seis personas están al borde de un puente que solo puede soportar el peso de dos personas a la vez. Deben cruzar en la oscuridad con una sola linterna, que debe estar encendida para cruzar. Cada persona camina a una velocidad diferente Persona 1: 1 minuto Persona 2: 2 minutos. Persona 3: 3 minutos. Persona 4: 5 minutos. Persona 5: 8 minutos. Persona 6: 10 minutos. Cuando dos personas cruzan juntas, lo hacen al ritmo de la más lenta. ¿Cuál es el mínimo tiempo EN MINUTOS necesario para que todos crucen? ", respuesta: "25", pistas: [" Si los más rápidos siempre vuelven con la linterna, optimizarás el tiempo", " Piensa en qué personas deben cruzar juntas para no perder minutos innecesarios.", "No hagas que los más lentos vuelvan, usa los más rápidos para el retroceso"], mensaje: "¡Exacto! ¡A peinar esas ideas!" },
  
    { pregunta: "Tienes 27 monedas, pero una de ellas es falsa y pesa más o menos que las otras. Solo tienes una balanza de dos platos para compararlas. ¿Cuál es el mínimo de usos de la balanza para encontrar la moneda falsa?", respuesta: "3",  pistas: ["Divide las monedas en grupos estratégicos y descarta rápidamente las buenas", "No compares moneda por moneda, usa la balanza de manera eficiente", "Piensa en potencias de 3, porque cada pesada te ayuda a reducir el problema a 1/3"], mensaje: "OLEOLEOLEOLEO" },
  
    { pregunta: "Si 5 gatos atrapan 5 ratones en 5 minutos. ¿Cuantos gatos necesitaras para atrapar 100 ratones en 100 minutos", respuesta: "5", pistas: ["Cada gato caza a la misma velocidad durante todo el tiempo", "dudo q necesites mas pistas"], mensaje: "OLEOLEOLEOLEO" },
  
    { pregunta: "Se les presenta una secuencia de números y deben encontrar el siguiente número en la secuencia.1, 11, 21, 1211, 111221, 312211, ¿cuál es el siguiente número?", respuesta: "13112221", pistas: ["El último numero dice la clave", "El patrón es el mismo todo el tiempo", "piensa en números"], mensaje: "OLEOLEOLEOLEO" },
  
   { pregunta: "Tienes dos relojes de arena: uno mide 9 minutos y otro 13 minutos.Debes medir exactamente 21 minutos con la menor cantidad de volteos posibles.¿Cuál es el mínimo de volteos necesarios?", respuesta: "6", pistas: ["No des vuelta a ambos relojes al mismo tiempo sin pensar en el siguiente movimiento..", "Usa un reloj para marcar referencias de tiempo en el otro.", "Aprovecha los momentos en que uno de los relojes se vacía para sincronizarlos bien."], mensaje: "¡Correcto! Has encontrado el vacío perfecto." },
  
    { pregunta: "Se te da la siguiente secuencia de números: 3, 15, 18, 22, 23, 25...¿Cuál es el siguiente número en la secuencia?", respuesta: "300", pistas: ["Observa qué números NO están en la secuencian", "Parece que ciertos números faltan a propósito, ¿por qué?", "cuenta en ingles"], mensaje: "¡Bien hecho! El tiempo siempre avanza." },
  
    { pregunta: "Un hombre dice:Tengo cuatro hijos. El producto de sus edades es 72. La suma de sus edades es el número de la casa de enfrente. Mirando la casa de enfrente, ves el número 14.Entonces el hombre añade: Mi hijo mayor toca el piano. ¿Cuáles es la edad del mayor de sus hijos?", respuesta: "2246", pistas: ["los pequeños son gemelos", "lee bien la oración", "coloca la edad de cada hijo sin comas y sin separación. Así 9873. "], mensaje: "¡Increíble! Has roto el silencio con tu inteligencia." },
  
    { pregunta: "Tienes cinco llaves y cinco puertas numeradas del 1 al 5. Cada puerta tiene una clave, pero no sabes cuál es la correcta. Un guardia te dice: La llave 1 abre la puerta 2 o 4.La llave 3 NO abre la puerta 1 o 5.La puerta 4 se abre con un número impar..",respuesta: "1", pistas: ["Es un ser vivo", "Cambia con la edad", "Usa bastón"], mensaje: "muy bien" },
  
 { pregunta: "Estás en una habitación cerrada con una caja fuerte que tiene una combinación de cinco cifras. En la pared hay una inscripción: El número está oculto en el tiempo. En un día común y corriente, todos lo ven, pero pocos lo suman.¿Cuál es el número oculto?",respuesta: "86400", pistas: ["Considera horas, minutos y segundos.", "Es un dia normal", "Piensa en tictac"], mensaje: "muy bien" },  
  
    { pregunta: "En la pared hay una secuencia de números:20 - 5 - 17 - 21 - 9 - 5 - 18 - 15 Debajo, una pista dice:Los pares pierden uno, los impares se duplican. Si el resultado es mayor que 22, ajusta", respuesta: "te quiero", pistas: ["Modifica los números según esta regla matemática.", "Hay un número clave que limita el valor máximo.", "Las letras están ocultas dentro de los números"], mensaje: "¡Maravilloso! Ahora no te perderás." },
  
    { pregunta: "En una mesa hay cinco llaves etiquetadas con los siguientes números: 17, 29, 34, 45 y 51.Solo una de ellas abre la puerta, y hay una nota con esta pista: La llave correcta es la única que no pertenece al grupo", respuesta: "A", pistas: ["¿Tienen algo en común?", "Busca un patrón en los números.", "Cual es el diferente"], mensaje: "¡Sombrío pero cierto! ¡Lo has logrado!" },
  
    { pregunta: "Estás en una habitación cerrada con una caja fuerte que tiene una combinación de tres cifras. En la pared hay una inscripción: El número está oculto en el tiempo. En un día común y corriente, todos lo ven, pero pocos lo suman.", respuesta: "144", pistas: ["Piensa en un día.", "Relaciona con el tiempo", "debes de ignorar la cifra final para que sea 3 cifras"], mensaje: "¡Piloto experto! Has despegado hacia la victoria." },
  
    { pregunta: "En la pared hay una serie de números en una secuencia extraña:1729, 6174, 142857, 299792458 Un cartel al lado dice:Solo uno de estos números es la clave de salida. Busca sus secretos., respuesta: 299792458", pistas: ["Es un objeto pesado", "Se usa en barcos", "Se hunde en el agua"], mensaje: "¡Anclado en el conocimiento! ¡Bien hecho!" },
      { pregunta: "En un papel hay escrita la siguiente secuencia:ABBA, NOON, DEED, ROTOR. Debajo hay un espacio en blanco donde se debe escribir una palabra clave. que empieza por L", respuesta: "level", pistas: ["Es una palabra en ingles", "Todas las palabras tienen algo en común.", "Piensa en cómo se leen"], mensaje: "¡Anclado en el conocimiento! ¡Bien hecho!" }
];

let diaActual = 0;
let tiempoRestante = 10 * 60 * 60; // 10 horas en segundos
let intervalo;
let pistasUsadas = 0;

function bloquearInteraccion() {
    document.getElementById('respuesta-input').disabled = true;
    document.getElementById('enviar-respuesta').disabled = true;
    document.getElementById('pista-btn').disabled = true;
}

function habilitarInteraccion() {
    document.getElementById('respuesta-input').disabled = false;
    document.getElementById('enviar-respuesta').disabled = false;
    document.getElementById('pista-btn').disabled = false;
}

function cargarAcertijo(dia) {
    const acertijo = acertijos[dia];
    document.getElementById('acertijo-texto').textContent = acertijo.pregunta;
    document.getElementById('pistas-lista').innerHTML = "";
    document.getElementById('respuesta-input').value = "";
    pistasUsadas = 0;
}

function iniciarTemporizador() {
    clearInterval(intervalo);
    intervalo = setInterval(() => {
        tiempoRestante--;
        
        if (tiempoRestante <= 0) {
            clearInterval(intervalo);
            bloquearInteraccion();
            alert("¡Tiempo agotado! Pasando al siguiente acertijo...");
            siguienteAcertijo();
        }

        // Actualizar display
        const horas = Math.floor(tiempoRestante / 3600);
        const minutos = Math.floor((tiempoRestante % 3600) / 60).toString().padStart(2, '0');
        const segundos = (tiempoRestante % 60).toString().padStart(2, '0');
        document.getElementById('tiempo-restante').textContent = `Tiempo restante: ${horas}:${minutos}:${segundos}`;
    }, 1000);
}

function usarPista() {
    if (pistasUsadas < 3) {
        tiempoRestante -= 2 * 60 * 60;
        pistasUsadas++;
        
        // Mostrar pista
        const pista = acertijos[diaActual].pistas[pistasUsadas - 1];
        const listaPistas = document.getElementById('pistas-lista');
        const nuevaPista = document.createElement('li');
        nuevaPista.textContent = `Pista ${pistasUsadas}: ${pista}`;
        listaPistas.appendChild(nuevaPista);
        
        alert(`¡Pista usada! -2 horas. Tiempo restante: ${formatearTiempo(tiempoRestante)}`);
        
        if (tiempoRestante <= 0) {
            clearInterval(intervalo);
            bloquearInteraccion();
            siguienteAcertijo();
        }
    } else {
        alert("¡Ya has usado todas las pistas!");
    }
}

function verificarRespuesta() {
    const respuestaUsuario = document.getElementById('respuesta-input').value.toLowerCase();
    
    if (respuestaUsuario === acertijos[diaActual].respuesta) {
        alert(acertijos[diaActual].mensaje);
        clearInterval(intervalo);
        siguienteAcertijo();
    } else {
        tiempoRestante -= 30 * 60; // Restar 30 minutos
        alert(`Respuesta incorrecta. -30 minutos. Tiempo restante: ${formatearTiempo(tiempoRestante)}`);
        
        if (tiempoRestante <= 0) {
            clearInterval(intervalo);
            bloquearInteraccion();
            siguienteAcertijo();
        }
    }
}

function siguienteAcertijo() {
    if (diaActual < acertijos.length - 1) {
        setTimeout(() => {
            diaActual++;
            tiempoRestante = 10 * 60 * 60;
            cargarAcertijo(diaActual);
            iniciarTemporizador();
            habilitarInteraccion();
        }, 3000);
    } else {
        alert("¡Felicidades! ¡Has completado todos los acertijos. La palabra secreta es RITUKITUKI!");
    }
}

function formatearTiempo(segundos) {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60).toString().padStart(2, '0');
    const segundosRestantes = (segundos % 60).toString().padStart(2, '0');
    return `${horas}:${minutos}:${segundosRestantes}`;
}

// Event Listeners
document.getElementById('enviar-respuesta').addEventListener('click', verificarRespuesta);
document.getElementById('pista-btn').addEventListener('click', usarPista);

// Iniciar
cargarAcertijo(diaActual);
iniciarTemporizador();

function verificarRespuesta() {
    const respuestaUsuario = document.getElementById('respuesta-input').value.toLowerCase();
    
    if (respuestaUsuario === acertijos[diaActual].respuesta) {
        alert(acertijos[diaActual].mensaje);
        clearInterval(intervalo);
        siguienteAcertijo();
    } else {
        tiempoRestante -= 30 * 60; // Restar 30 minutos
        
        // 🟠 Hacer que el móvil vibre durante 500 ms al fallar
        if ("vibrate" in navigator) {
            navigator.vibrate(500);
        }

        alert(`Respuesta incorrecta. -30 minutos. Tiempo restante: ${formatearTiempo(tiempoRestante)}`);
        
        if (tiempoRestante <= 0) {
            clearInterval(intervalo);
            bloquearInteraccion();
            siguienteAcertijo();
        }
    }
}