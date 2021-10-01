// Generic types

function adicionaApendiceALista<T>(array: T[], valor: T) {
  return array.map((item) => (item + valor));
}

const listaNumerica = adicionaApendiceALista([1, 2, 3], 1)
const listaAlfa = adicionaApendiceALista(['a', 'b', 'c'], 'd')

console.log(listaNumerica);
console.log(listaAlfa);
