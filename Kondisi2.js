const prompt = require('prompt-sync')({sigint:true})

let a = Number(prompt('Masukkan nilai 1: '))
if(a >= 50){
    console.log('Nilai lebih besar')
}

let b = Number(prompt('Masukkan nilai 2: '))
if(b <= 50){
    console.log('Nilai lebih kecil')
}

