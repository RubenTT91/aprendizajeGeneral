// # Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

// # type indica si es una bota izquierda (I) o derecha (R).
// # size indica el tamaño de la bota.
// # Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una
// # lista con los pares disponibles después de emparejar las botas.

// # ¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño!

// # const shoes = [
// #   { type: 'I', size: 38 },
// #   { type: 'R', size: 38 },
// #   { type: 'R', size: 42 },
// #   { type: 'I', size: 41 },
// #   { type: 'I', size: 42 }
// # ]

// # organizeShoes(shoes)
// # // [38, 42]

// # const shoes2 = [
// #   { type: 'I', size: 38 },
// #   { type: 'R', size: 38 },
// #   { type: 'I', size: 38 },
// #   { type: 'I', size: 38 },
// #   { type: 'R', size: 38 }
// # ]
// # // [38, 38]

// # const shoes3 = [
// #   { type: 'I', size: 38 },
// #   { type: 'R', size: 36 },
// #   { type: 'R', size: 42 },
// #   { type: 'I', size: 41 },
// #   { type: 'I', size: 43 }
// # ]

// # organizeShoes(shoes3)
// # // []

const shoes2 = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 42 },
];
// [38, 38]

function organizeShoes(shoes) {
  let rShoe = [];
  let combineShoe = [];
  let pairs = [];
  for (let shoe of shoes) {
    shoe.type == "I"
      ? combineShoe.push("R" + shoe.size)
      : rShoe.push(shoe.type + shoe.size);
  }
  combineShoe.forEach((element) => {
    rShoe.includes(element) ? pairs.push(Number(element.slice(-2))) : null;
  });

  return pairs;
}

console.log(organizeShoes(shoes2));
