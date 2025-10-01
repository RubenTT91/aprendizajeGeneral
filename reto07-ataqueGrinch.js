// ¡El grinch 👹 ha pasado por el taller de Santa Claus! Y menudo desastre ha montado. Ha cambiado el orden de algunos paquetes, por lo que los envíos no se pueden realizar.

// Por suerte, el elfo Pheralb ha detectado el patrón que ha seguido el grinch para desordenarlos. Nos ha escrito las reglas que debemos seguir para reordenar los paquetes.
// Las instrucciones que siguen son:

// Recibirás un string que contiene letras y paréntesis.
// Cada vez que encuentres un par de paréntesis, debes voltear el contenido dentro de ellos.
// Si hay paréntesis anidados, resuelve primero los más internos.
// Devuelve el string resultante con los paréntesis eliminados, pero con el contenido volteado correctamente.
// Nos ha dejado algunos ejemplos:

// fixPackages('a(cb)de')
// // ➞ "abcde"
// // Volteamos "cb" dentro de los paréntesis

// fixPackages('a(bc(def)g)h')
// // ➞ "agdefcbh"
// // 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

// fixPackages('abc(def(gh)i)jk')
// // ➞ "abcighfedjk"
// // 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"
// FixPackages ('a (b (c)) e')
// // ➞ "ACBE"
// // Primero regresamos "C" → "C", LUEGO "BC" → "CB"

/* @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */

let packages2="a(cb)de";

// let arreglo = [1, 2, 3, 4]

let packages ="a(bc(def)g)h";

function fixPackages(packages) {
    let openArray =[];
    let closeArray =[];
    let elementOpen = "(";
    let elementClose =")";

    let opened = packages.indexOf(elementOpen);
    let closed= packages.indexOf(elementClose);

    while(opened != -1){
        openArray.push(opened+1);
        opened = packages.indexOf(elementOpen,opened +1);        
    }
    while(closed != -1){
        closeArray.push(closed);
        closed = packages.indexOf(elementClose,closed +1);        
    }
    openArray = openArray.reverse();
    console.log(openArray);
    console.log(closeArray);
    
    let invertido = "";


for (let j=0; j<closeArray.length;j++){
    console.log(j);
    invertido =  packages.split('').slice(openArray[j],closeArray[j]).reverse();  
    invertido.filter((caracter)=> caracter=="");
    
}
console.log(invertido.join());

    return invertido;
}

console.log(fixPackages(packages));


