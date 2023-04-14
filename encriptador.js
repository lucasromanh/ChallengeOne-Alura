function realizarAccion(accion) {
  console.log("Botón presionado:", accion);

  var recuadros = document.getElementsByClassName("recuadro");
  for (var i = 0; i < recuadros.length; i++) {
    recuadros[i].style.backgroundImage = "none";
  }

  var texto = document
    .getElementById("texto")
    .value.toLowerCase()
    .replace(/[^a-z ]/g, "");
  var resultado = "";
  if (accion === "encriptar") {
    resultado = encriptarTexto(texto);
  } else {
    resultado = desencriptarTexto(texto);
  }
  document.getElementById("resultado").value = resultado;
}

function encriptarTexto(texto) {
  var resultado = "";
  var palabras = texto.split(" ");
  for (var j = 0; j < palabras.length; j++) {
    var palabra = palabras[j];
    for (var i = 0; i < palabra.length; i++) {
      switch (palabra[i]) {
        case "e":
          resultado += "enter";
          break;
        case "i":
          resultado += "imes";
          break;
        case "a":
          resultado += "ai";
          break;
        case "o":
          resultado += "ober";
          break;
        case "u":
          resultado += "ufat";
          break;
        default:
          resultado += palabra[i];
      }
    }
    resultado += " ";
  }
  return resultado.trim();
}

function desencriptarTexto(texto) {
  var resultado = "";
  var i = 0;
  while (i < texto.length) {
    if (texto.substr(i, 5) == "enter") {
      resultado += "e";
      i += 5;
    } else if (texto.substr(i, 4) == "imes") {
      resultado += "i";
      i += 4;
    } else if (texto.substr(i, 2) == "ai") {
      resultado += "a";
      i += 2;
    } else if (texto.substr(i, 4) == "ober") {
      resultado += "o";
      i += 4;
    } else if (texto.substr(i, 4) == "ufat") {
      resultado += "u";
      i += 4;
    } else if (texto[i] == " ") {
      resultado += " ";
      i++;
    } else {
      resultado += texto[i];
      i++;
    }
  }
  return resultado;
}

function copiarResultado() {
  var resultado = document.getElementById("resultado");
  resultado.select();
  resultado.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Resultado copiado al portapapeles: " + resultado.value);
}

var imagen = document.querySelector(".resultado img");
var mensaje = document.querySelector(".resultado p");

imagen.src = "img/traducido.png";
