// const textArea = document.querySelector(".text-area");
// const mensaje = document.querySelector(".mensaje");

// function btnEncriptar() {
//   const textoEncriptado = encriptar(textArea.value);
//   mensaje.value = textoEncriptado;
//   textArea.value = "";
//   mensaje.style.backgroundImage = "none";
// }

// function encriptar(stringEncriptada) {
//   let matrizCodigo = [
//     ["e", "enter"],
//     ["i", "imes"],
//     ["a", "ai"],
//     ["o", "ober"],
//     ["u", "ufat"],
//   ];
//   stringEncriptada = stringEncriptada.toLowerCase();
//   for (let i = 0; i < matrizCodigo.length; i++) {
//     if (stringEncriptada.includes(matrizCodigo[i][0])) {
//       stringEncriptada = stringEncriptada.replaceAll(
//         matrizCodigo[i][0],
//         matrizCodigo[i][1]
//       );
//     }
//   }
//   return stringEncriptada;
// }

const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
  // Declaración de una constante "textoEncriptado" y asignación del resultado de la función "encriptar" con el valor de la propiedad "value" de "textArea"
  const textoEncriptado = encriptar(textArea.value);
  // Asignación del valor de "textoEncriptado" a la propiedad "value" de "mensaje"
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
  var div = document.querySelector("div p.mensaje-derecho").parentNode;
  div.style.display = "none";
}

function encriptar(stringEncriptada) {
  // Declaración de una matriz "matrizCodigo" que contiene cinco arrays con pares de valores que se utilizarán para la encriptación
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
  // Conversión del parámetro "stringEncriptada" a minúsculas y asignación del resultado a la misma variable
  stringEncriptada = stringEncriptada.toLowerCase();
  for (let i = 0; i < matrizCodigo.length; i++) {
    // Condición que evalúa si "stringEncriptada" contiene el primer valor del elemento actual de "matrizCodigo"
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      // Reemplazo de todas las ocurrencias del primer valor del elemento actual de "matrizCodigo" por el segundo valor del mismo elemento, y asignación del resultado a "stringEncriptada"
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  // Retorno del valor final de "stringEncriptada"
  return stringEncriptada;
}
function btnDesencriptar() {
  const textoEncriptado = desencriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
}

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

function copiarTexto() {
  var mensaje = document.querySelector(".mensaje");
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value);
  
}

function pegarTexto() {
  navigator.clipboard.readText().then(function (textoCopiado) {
    var textarea = document.querySelector(".text-area");
    textarea.value = textoCopiado;
  });
  
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
