// Crea una función llamada swap() que reciba un array y dos parametros que sean indices del array. 
// La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

const names = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

function swap(array, index1, index2){
    if (array.includes(index1) && array.includes(index2)){
        let tempIndex = array.indexOf(index2);
        let tempName = array[array.indexOf(index1)]
        array[array.indexOf(index1)] = array[array.indexOf(index2)];

        array[tempIndex] = tempName;

        return array;
    }
}

console.log(swap(names, 'Mesirve', 'Ronalguiño'));