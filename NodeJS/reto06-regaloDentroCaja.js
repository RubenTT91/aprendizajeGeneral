// Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, representado por un asterisco *, está dentro de la caja.

// La caja tiene un regalo (*) y cuenta como dentro de la caja si:

// Está rodeada por # en los bordes de la caja.
// El * no está en los bordes de la caja.
// Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. Y debemos devolver true si el * está dentro de la caja y false en caso contrario.

// Ejemplos:

// inBox([
//   "###",
//   "#*#",
//   "###"
// ]) // ➞ true

// inBox([
//   "####",
//   "#* #",
//   "#  #",
//   "####"
// ]) // ➞ true

// inBox([
//   "#####",
//   "#   #",
//   "#  #*",
//   "#####"
// ]) // ➞ false

// inBox([
//   "#####",
//   "#   #",
//   "#   #",
//   "#   #",
//   "#####"
// ]) // ➞ false

/** @param {string[]} box
 *  @returns {boolean} True if the gift is inside the box
 */
let Box = ["#####", "#   #", "#   #", "#   #", "#####"];

function inBox(box) {
  let long = box[0].length;
  let result = false;

  for (let i=1;i<box.length-1;i++) {
    let liner = box[i];
    
    if (liner.includes("*")) {
      let index = liner.indexOf("*") + 1;
      index > 1 && index < long ? (result = true) : (result = false);
    }
  }

  return result;
}

console.log(inBox(Box));
