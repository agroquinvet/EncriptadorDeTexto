let botonEncriptar= document.getElementById("encrip");
botonEncriptar.addEventListener("click", encriptarTexto);

let botonDesencriptar= document.getElementById("desen");
botonDesencriptar.addEventListener("click", desencriptarTexto);

let botonCopiar= document.getElementById("botonCopiar");
botonCopiar.addEventListener("click", copiarTexto);

function encriptarTexto() {
  
  var texto = document.getElementById("texto").value;
  
  if (texto===""){
    alert("el campo esta vacio")
    return false; }
  var pattern= new RegExp('^[a-z-ñ,. ]+$');
  if (!pattern.test(texto)) {
      alert("solo se permiten letras minusculas")
      return false;     
    
  }
  var resultado = "";
  for (var i = 0; i < texto.length; i++) {
    var caracter = texto.charAt(i);
    var caracterTransformado;
    switch (caracter) {
      case "a":
        caracterTransformado = "ai";
        break;
      case "e":
        caracterTransformado = "enter";
        break;
      case "i":
        caracterTransformado = "imes";
        break;
      case "o":
        caracterTransformado = "ober";
        break;
      case "u":
        caracterTransformado = "ufat";
        break;
            // Agrega más casos para transformar otros caracteres<textarea id="texto" rows="10" cols="50"></textarea><br><button onclick="transformarTexto()">Transformar</button><br><p id="resultado"></p>
      default:
        caracterTransformado = caracter;
    }
      resultado += caracterTransformado;
  }
  const encriptado=document.getElementById("encriptado");
  const imgencrip=document.getElementById("imgencrip");
  const tituloEncrip=document.getElementById("tituloEncrip"); 
  if (imgencrip !=null && tituloEncrip !=null){
    encriptado.removeChild(imgencrip)
    encriptado.removeChild(tituloEncrip)

  }  
  
  const parrafo= document.getElementById("resultado"); 
  encriptado.style.textAlign="center";
  parrafo.style.position="static"; 
  parrafo.style.fontSize="15px";
  parrafo.style.fontWeight="bold";  
  parrafo.style.color="darkgreen"; 
  document.getElementById("resultado").innerHTML = resultado;
  botonCopiar=document.getElementById("botonCopiar");
  botonCopiar.style.display="block"; 
}



function desencriptarTexto() {
  var texto = document.getElementById("texto").value;
  
  if (texto===""){
    alert("el campo esta vacio")
    return false; }
  var pattern= new RegExp('^[a-z ]+$');
  if (!pattern.test(texto)) {
      alert("solo se permiten letras minusculas")
      return false;     
    
  }
  var resultado = "";
  for (var i = 0; i < texto.length; i++) {
    var caracter = texto.charAt(i);
    switch (caracter) {
      case "a":
        if (texto.charAt(i+1) == "i") {
          resultado += "a";
          i++;
        } else {
          resultado += caracter;
        }
        break;
      case "e":
        if (texto.charAt(i+1) == "n" && texto.charAt(i+2) == "t" && texto.charAt(i+3) == "e" && texto.charAt(i+4) == "r") {
          resultado += "e";
          i += 4;
        } else {
          resultado += caracter;
        }
        break;
      case "i":
        if (texto.charAt(i+1) == "m" && texto.charAt(i+2) == "e" && texto.charAt(i+3) == "s") {
          resultado += "i";
          i += 3;
        } else {
          resultado += caracter;
        }
        break;
      case "o":
        if (texto.charAt(i+1) == "b" && texto.charAt(i+2) == "e" && texto.charAt(i+3) == "r") {
          resultado += "o";
          i += 3;
        } else {
          resultado += caracter;
        }
        break;
      case "u":
        if (texto.charAt(i+1) == "f" && texto.charAt(i+2) == "a" && texto.charAt(i+3) == "t") {
          resultado += "u";
          i += 3;
        } else {
          resultado += caracter;
        }
        break;
      default:
        resultado += caracter;
        break;
    }
  }
  const encriptado=document.getElementById("encriptado");
  const imgencrip=document.getElementById("imgencrip");
  const tituloEncrip=document.getElementById("tituloEncrip");   
  if (imgencrip !=null && tituloEncrip !=null){
    encriptado.removeChild(imgencrip)
    encriptado.removeChild(tituloEncrip)

  }  
  const parrafo= document.getElementById("resultado");
  encriptado.style.textAlign="center";  
  parrafo.style.position="static";  
  parrafo.style.fontSize="15px";
  parrafo.style.fontWeight="bold";  
  parrafo.style.color="darkgreen"; 
  document.getElementById("resultado").innerHTML = resultado;
  botonCopiar=document.getElementById("botonCopiar");
  botonCopiar.style.display="block";
  
}

function copiarTexto() {
  const copiar = document.getElementById("resultado");
  const texto = copiar.innerText;
  
  navigator.clipboard.writeText(texto)
    .then(() => {
      alert("El texto ha sido copiado");
    })
    .catch((error) => {
      console.error("Error al copiar el texto: ", error);
    });
}













