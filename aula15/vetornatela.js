var valores = [8, 1, 7, 4, 2, 9]

//console.log(valores)

/*
for (var pos = 0; pos < valores.length ; pos++) {
    console.log(`A posição é ${pos} e tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(valores[pos])
}