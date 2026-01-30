let arraysV = ['edgar', 'costa', 'melo', 27, 10, 95]


const removidoFinal = arraysV.pop() //REMOVE no final
console.log(`Numero removido no final:  ${removidoFinal}`)

const addFinal = arraysV.push(2025) //ADD no final
console.log(`Numero adicionado no final:  ${arraysV[5]}`)
console.log(`tamanho:  ${addFinal}`)

const addHead = arraysV.unshift('head') //ADD no começo
console.log(`Vetor após inclusao no inicio:  ${arraysV}`)

const addHeadZero = arraysV.unshift('head-zero')
console.log(`Vetor após **NOVA** inclusao no inicio:  ${arraysV}`)

console.log(`Tamanho: ${arraysV.length}` )

const rmHead = arraysV.shift() //REMOVE no começo
console.log(`Vetor após remoção no inicio:  ${arraysV}`)

const rmHead2 = arraysV.shift()
console.log(`Vetor após **NOVA** remoção no inicio:  ${arraysV}`)

const removeSeleted = delete arraysV[2] //REMOVE o item do VALOR do parametro
console.log(`Vetor após remoção do indice:  ${arraysV} || valor removido: ${arraysV[2]}`)
