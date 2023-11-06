// Ejercicio 1:
const concatenaElementosArray = (arr) => {
    if (!Array.isArray(arr)) {
      throw new Error('El tipo de dato facilitado no es un array');
    }
  
    return arr.join(' ');
}

// Ejercicio 2:
const substringPositions = (string, subString) => {
    if (typeof string !== 'string' || typeof subString !== 'string' || string === "" || subString === "") {
        throw new Error('Los tipos de dato facilitados deben ser string con mínimo un caracter.');
    }
    const posiciones = [];
    let i = string.indexOf(subString);
  
    while (i !== -1) {
      posiciones.push(i);
      i = string.indexOf(subString, i + 1);
    }
  
    return posiciones;
}

// Ejercicio 3
const createUser = (username, lastname, age) => {
    if (typeof username !== 'string' || typeof lastname !== 'string' || typeof age !== 'number') {
        throw new Error('Tipos de datos facilitados erróneos.');
    }
    if (age < 0) {
        throw new Error('No se pueden crear usuarios con edad negativa.')
    }
    const answer = {
        username: username,
        lastname: lastname,
        age: age
    }
    return answer;
}

export {concatenaElementosArray, substringPositions, createUser};