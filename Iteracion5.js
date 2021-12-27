// Crea una función llamada rollDice() que reciba como parametro el numero de caras que queramos que tenga el dado que deberá silumar el codigo dentro de la función. 
// Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado.

function rollDice(num){
    return Math.floor(Math.random() * num + 1);
}

console.log (rollDice(6));