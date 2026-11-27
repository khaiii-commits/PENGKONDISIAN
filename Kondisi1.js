const prompt = require('prompt-sync')({sigint:true})

let n = Number(prompt('Masukan Angka:' ))

if(n % 2 === 0){
    console.log(` ${n} adalah genap`)
}else{
    console.log(`${n} adalah ganjil`)
}