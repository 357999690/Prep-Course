// No cambies los nombres de las funciones.

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var concatenacion = palabras[0];
  for (var i = 1; i < palabras.length; i++) {
    concatenacion = concatenacion + " " + palabras[i];
  }
  return concatenacion;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      return true;
    }
  }
  return false;
}

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = numeros[0];
  for (var i = 1; i < numeros.length; i++) {
    suma = suma + numeros[i];
  }
  return suma;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var i = 1;
  var total = resultadosTest[0];
  var largoMatriz = resultadosTest.length;
  while (i < largoMatriz) {
    total = total + resultadosTest[i];
    i++;
  }
  var resultadoTotal = total / largoMatriz;
  return resultadoTotal;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var numeroMasGrande = numeros[0];
  for (var i = 1; i < numeros.length; i++) {
    if (numeroMasGrande <= numeros[i]) {
      numeroMasGrande = numeros[i];
    }
  }
  return numeroMasGrande;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length === 0) {
    return 0;
  } else if (arguments.length === 1) {
    return arguments[0];
  } else {
    var product = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      product = product * arguments[i];
    }
    return product;
  }
  {
  }
}

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  const elementosMayorA18 = [];
  for (var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) {
      elementosMayorA18.push(arreglo[i]);
    }
  }
  return elementosMayorA18.length;
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí
  if (numeroDeDia === 7 || numeroDeDia === 1) {
    return "Es fin de semana";
  } else {
    return "Es dia Laboral";
  }
}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  const nToString = n.toString();
  const primerTermino = nToString[0];
  if (primerTermino === "9") {
    return true;
  } else {
    return false;
  }
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  var primerArreglo = arreglo[0];
  for (var i = 1; i < arreglo.length; i++) {
    if (primerArreglo === arreglo[i]) {
      primerArreglo = arreglo[i];
      return true;
    } else {
      return false;
    }
  }
}

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var mesesEncontrados = [];
  for (var i = 0; i < array.length; i++) {
    if (
      "Enero" === array[i] ||
      "Marzo" === array[i] ||
      "Noviembre" === array[i]
    ) {
      mesesEncontrados.push(array[i]);
    }
  }
  if (mesesEncontrados.length === 3) {
    return mesesEncontrados;
  } else {
    return "No se encontraron los meses pedidos";
  }
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  const MayoresACien = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      MayoresACien.push(array[i]);
    }
  }
  return MayoresACien;
}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var numeroIncrementado = numero;
  var valores = [];
  var i = 0;
  while (i < 10) {
    valorIncrementado = numeroIncrementado + 2;
    valores.push(valorIncrementado);
    numeroIncrementado = valorIncrementado;

    if (valorIncrementado === i) break;
    i++;
  }
  if (valores.length === 10) {
    return valores;
  } else {
    return "Se interrumpió la ejecución";
  }
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var numeroIncrementado = numero;
  var valores = [];
  for (var i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    } else {
      valorIncrementado = numeroIncrementado + 2;
      valores.push(valorIncrementado);
      numeroIncrementado = valorIncrementado;
    }
  }
  return valores;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement,
};
