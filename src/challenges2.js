// Project: Playground Functions - Aluna: Renata Pereira Nunes
// -------------------------------------------------------------

// Desafio 10
function techList(tecnologias, name) {
  if (tecnologias.length === 0) {
    return 'Vazio!';
  } else {
    tecnologiasOrdenadas = tecnologias.sort();
    let newArray = [];
    for (let i = 0; i < tecnologias.length; i += 1) {
      let object = {
        tech: '',
        name: ''
      }
      object.tech = tecnologias[i];
      object.name = name;
      newArray[i] = object;
    }
    return newArray;
  }
}

// Desafio 11
function generatePhoneNumber(numberInput) {
  let checked = true;
  function countRepete(number, numberInput) {
    let count = 0;
    for(let i = 0; i < numberInput.length; i += 1) {
      if (number === numberInput[i]) {
        count += 1;
      }
    }
    return count;
  }
  if (numberInput.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else {
    for (let i of numberInput) {
      if (numberInput[i] < 0 || numberInput[i] > 9 || countRepete(numberInput[i], numberInput) >= 3) {
        checked = false;
      }      
    }
    if (checked) {
      let stringNumberInput = numberInput.toString();
      stringNumber = stringNumberInput.replace(/,/g, '');
      // parametros do metodo slice() definidos com base em:
      //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/slice
      let ddd = stringNumber.slice(0,2);
      let firstNumbers = stringNumber.slice(2,-4);
      let lastNumbers = stringNumber.slice(-4);
      let numberOutput = '(' + ddd + ') ' + firstNumbers + '-' + lastNumbers;
      return numberOutput;
    } else {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (((lineB + lineC) > lineA > Math.abs(lineB - lineC)) && ((lineA + lineC) > lineB > Math.abs(lineA - lineC)) && ((lineA + lineB) > lineC > Math.abs(lineA - lineB))) {
    return true;
  } else {
    return false;
  }
}
console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
