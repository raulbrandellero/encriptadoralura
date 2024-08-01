const muneco = document.querySelector(".result__img");
const textarea = document.getElementById("miTextarea");
const resultadotext = document.getElementById("result__text");
const linea1 = document.getElementById("l1");
const linea2 = document.getElementById("l2");
const buttonencrip = document.getElementById("encriptarBtn");
const buttondesencrip = document.getElementById("desencriptarBtn");
const buttoncopiar = document.getElementById("copiarBtn");

const llaves = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

function encriptarMensaje(mensaje) {
  let mensajeEncriptado = "";
  for (let i = 0; i < mensaje.length; i++) {
    let letra = mensaje[i];
    let encriptada = letra;
    for (let j = 0; j < llaves.length; j++) {
      if (letra === llaves[j][0]) {
        encriptada = llaves[j][1];
        break;
      }
    }
    mensajeEncriptado += encriptada;
  }
  return mensajeEncriptado;
}

function desencriptarMensaje(mensaje) {
  let mensajeDesencriptado = mensaje;
  for (let i = 0; i < llaves.length; i++) {
    let regex = new RegExp(llaves[i][1], "g");
    mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
  }
  return mensajeDesencriptado;
}

textarea.addEventListener("input", (e) => {
  muneco.style.display = "none";
  linea1.textContent = " ";
  linea2.textContent = " ";
});

buttonencrip.addEventListener("click", (e) => {
  e.preventDefault();
  let mensaje = textarea.value.toLowerCase();
  let mensajeEncriptado = encriptarMensaje(mensaje);
  resultadotext.textContent = mensajeEncriptado;
  buttoncopiar.classList.remove("hidden");
});

buttondesencrip.addEventListener("click", (e) => {
  e.preventDefault();
  let mensaje = textarea.value.toLowerCase();
  let mensajeDesencriptado = desencriptarMensaje(mensaje);
  resultadotext.textContent = mensajeDesencriptado;
  buttoncopiar.classList.remove("hidden");
});

buttoncopiar.addEventListener("click", () => {
  let textoCopiado = resultadotext.textContent;
  navigator.clipboard.writeText(textoCopiado).then(() => {
    muneco.style.display = "block";
    linea1.textContent = "El Texto fue copiado";
    linea2.textContent = " "; 
    buttoncopiar.classList.add("hidden");

  });
});
