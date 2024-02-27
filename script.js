const textArea = document.querySelector(".text-area-mensaje");
const mensaje = document.querySelector(".text-area-motor");

const accordionTitle = document.querySelector(".accordion-title");
const accordionContent = document.querySelector(".hero-rules");

// Funcion Clue
const cont = "Batman Rules"; // Replace with your desired secret sentence
let attempts = 3;

const messageEl = document.getElementById("message");
const inputEl = document.getElementById("input");
const submitBtn = document.getElementById("submit");
const clueImageEl = document.getElementById("clue-image");

submitBtn.addEventListener("click", () => {
  const userSentence = inputEl.value.trim();

  if (attempts > 0) {
    if (userSentence === cont) {
      clueImageEl.style.display = "block";
      messageEl.textContent = "Congratulations! You revealed the clue.";
      inputEl.disabled = true;
      submitBtn.disabled = true;
    } else {
      attempts--;
      messageEl.textContent = `Incorrect. You have ${attempts} attempts remaining.`;
      inputEl.value = "";

      if (attempts === 0) {
        inputEl.disabled = true;
        submitBtn.disabled = true;
        messageEl.textContent = "No more attempts left. Try again later.";
      }
    }
  }
});

// Acordion
// accordionTitle.addEventListener("click", function () {
//   accordionTitle.classList.toggle("active");
//   accordionContent.classList.toggle("active");
// });

// Función btnEncriptar
function btnEncriptar() {
  // Declaración de una constante "textoEncriptado" y asignación del resultad
  //o de la función "encriptar" con el valor de la propiedad "value" de "textArea"
  const textoEncriptado = encriptar(textArea.value);
  // Asignación del valor de "textoEncriptado" a la propiedad "value" de "mensaje"
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
  var div = document.querySelector("div p.mensaje-derecho").parentNode;
  div.style.display = "none";
}

// Funcion Encriptar
function encriptar(stringEncriptada) {
  // Declaración de una matriz "matrizCodigo" que contiene cinco arrays con pares
  // de valores que se utilizarán para la encriptación
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  const regex = /^[a-zA-Z0-9 ,.]+$/;
  if (!regex.test(stringEncriptada)) {
    alert("El texto debe ser sin acentos y sin caracteres especiales.");
    return;
  }
  // Conversión del parámetro "stringEncriptada" a minúsculas y asignación del
  // resultado a la misma variable
  stringEncriptada = stringEncriptada.toLowerCase();
  for (let i = 0; i < matrizCodigo.length; i++) {
    // Condición que evalúa si "stringEncriptada" contiene el primer valor del elemento
    // actual de "matrizCodigo"
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      // Reemplazo de todas las ocurrencias del primer valor del elemento actual de
      // "matrizCodigo" por el segundo valor del mismo elemento, y asignación del
      //resultado a "stringEncriptada"
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  // Retorno del valor final de "stringEncriptada"
  return stringEncriptada;
}

// Función btnDesencriptar
function btnDesencriptar() {
  const textoEncriptado = desencriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
  var div = document.querySelector("div p.mensaje-derecho").parentNode;
  div.style.display = "none";
  // var index = 0;
  // var animationInterval = setInterval(function () {
  //   if (index < textoEncriptado.length) {
  //     textArea.value += textoEncriptado[index];
  //     index++;
  //   } else {
  //     clearInterval(animationInterval);
  //     textArea.style.animation = "revealText 2s forwards";
  //   }
  // }, 400);
  // textArea.value = "";
}

// Funcion desencriptar
function desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptada = stringDesencriptada.toLowerCase();
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptada;
}

// Funcion copiar texto
function copiarTexto() {
  var mensaje = document.querySelector(".text-area-motor");
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value);
}

// Funcion pegar texto
function pegarTexto() {
  navigator.clipboard.readText().then(function (textoCopiado) {
    var textarea = document.querySelector(".text-area-mensaje");
    textarea.value = textoCopiado;
  });
}


// Function to save note to local storage
function saveNote() {
  var note = document.getElementById("note-text").value;
  if (note.trim() !== "") {
    localStorage.setItem("userNote", note);
    // alert("Note saved successfully!"); // Commenting out the alert to avoid interruption
  } else {
    // alert("Please enter a note before saving!"); // Commenting out the alert to avoid interruption
  }
}

// Function to load note from local storage
function loadNote() {
  var savedNote = localStorage.getItem("userNote");
  if (savedNote) {
    document.getElementById("note-text").value = savedNote;
  }
}

// Load note when the page loads
window.onload = loadNote;

// Automatically save note when the user types
document.getElementById("note-text").addEventListener("input", function() {
  saveNote();
});



// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Debe funcionar solo con letras minúsculas
// No deben ser utilizados letras con acentos ni caracteres especiales
// Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
// La página debe tener campos para
// inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
// El resultado debe ser mostrado en la pantalla.
// Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.
