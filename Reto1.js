const textoCifrado =
  "^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{()¡[()?=[]`\\¬]()¿()[{;+[$_~()`~]=\\]+~";

// Array que mapea los caracteres cifrados a sus correspondientes desencriptados
const mapeoSustitucion = [
  ["?", "A"],
  ["[", "E"],
  ["\\", "I"],
  ["~", "O"],
  ["+", "U"],
  ["¬", "ó"],
  ["(", " "],
  [")", " "],
  ["^", "M"],
  ["`", "C"],
  ["*", "P"],
  ["/", "L"],
  ["]", "N"],
  ["-", "H"],
  ["#", "V"],
  ["$", "R"],
  ["%", "B"],
  ["{", "S"],
  ["}", "Q"],
  ["=", "T"],
  ["¿", "Y"],
  ["¡", "D"],
  ["!", "J"],
  ["_", "Z"],
  [";", "F"],
];

// Función para desencriptar utilizando un mapeo de pares
function desencriptarTextoCifrado(cifrado, mapeo) {
  let resultado = "";
  for (let char of cifrado) {
    const encontrado = mapeo.find(([cifradoChar]) => cifradoChar === char);
    resultado += encontrado ? encontrado[1] : char; // Agrega el correspondiente desencriptado
  }
  return resultado;
}

// Desencriptar el texto cifrado
const resultadoDesencriptado = desencriptarTextoCifrado(textoCifrado, mapeoSustitucion);
console.log(resultadoDesencriptado); // Imprime el texto desencriptado

