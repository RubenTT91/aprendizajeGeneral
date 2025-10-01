let names = ["Ana", "Juán", "Pedro", "Maria", "Alberto"];

function createFrame(names) {
    let imprimir = "";
    let maxLength = Math.max(...names.map(name => name.length));
    let border = '*'.repeat(maxLength + 4);
    imprimir += border + "\n";
    for (let name of names){
        imprimir +=(`* ${name.padEnd(maxLength, ' ')} *\n`);
    }
    imprimir+= border;
  return imprimir;
}

console.log(createFrame(names));