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
function copiarTexto(event) {
  const targetElement = event ? event.target : document.querySelector(".btn-copiar");
  
  if (targetElement.classList.contains("copy-button")) {
    const wordToCopy = targetElement.parentNode.textContent.trim();
    
    navigator.clipboard.writeText(wordToCopy)
      .then(() => {
        // Optional: Provide visual feedback to the user
        console.log("Word copied to clipboard:", wordToCopy);
        // You could add a success message or UI indicator here
      })
      .catch((err) => {
        console.error("Failed to copy word:", err);
        // You could handle the error with an appropriate message to the user
      });
  } else {
    const textToCopy = document.getElementById("textAreaMotor").value;
    
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        // Optional: Provide visual feedback to the user
        console.log("Text copied to clipboard:", textToCopy);
        // You could add a success message or UI indicator here
      })
      .catch((err) => {
        console.error("Failed to copy text:", err);
        // You could handle the error with an appropriate message to the user
      });
  }
}

//Function Pegar texto
function pegarTexto(event) {
  // Obtener el contenedor principal del área de texto específica en la que se hizo clic
  var container = event.target.closest(".container-mensaje, .note-card");

  // Verificar si se encontró el contenedor
  if (container) {
    // Obtener el área de texto específica dentro del contenedor
    var targetTextArea = container.querySelector(".text-area-mensaje, .text-area-note");

    // Pegar el texto en el área de texto específica
    navigator.clipboard.readText().then(function (textoCopiado) {
      targetTextArea.value = textoCopiado;
    });
  } else {
    console.error("No se encontró el contenedor del área de texto específica.");
  }
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


// Copy Button
document.addEventListener('DOMContentLoaded', function() {
  // Get all elements with the class "copy-button"
  const copyButtons = document.querySelectorAll('.copy-button');

  // Iterate over each copy button
  copyButtons.forEach(button => {
      // Add a click event listener to each copy button
      button.addEventListener('click', () => {
          // Get the text of the parent li element (the word)
          const word = button.parentNode.textContent.trim();
          // Create a temporary textarea element to copy the word to the clipboard
          const tempTextArea = document.createElement('textarea');
          tempTextArea.value = word;
          document.body.appendChild(tempTextArea);
          tempTextArea.select();
          document.execCommand('copy');
          document.body.removeChild(tempTextArea);
          // Optionally provide feedback to the user (e.g., highlighting the word)
          button.parentNode.style.backgroundColor = 'lightgreen';
          // Reset the background color after a short delay
          setTimeout(() => {
              button.parentNode.style.backgroundColor = '';
          }, 1000);
      });
  });
});

// Funcion borrar texto
function limpiarTexto() {
  // Obtener los elementos textarea por su ID
  var textAreaMotor = document.getElementById('textAreaMotor');
  var textAreaMensaje = document.getElementById('textAreaMensaje');
  var textAreaNote = document.getElementById('textAreaNote');

  // Limpiar el contenido de cada textarea
  textAreaMotor.value = '';
  textAreaMensaje.value = '';
  textAreaNote.value = '';
}


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
