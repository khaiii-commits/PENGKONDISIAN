const prompt = require('prompt-sync')({sigint:true})

let n = Number(prompt('masukkan nilai: '))

if( n % 10 === 0 ){
    console.log('termasuk kelipatan 10')
}else{
    console.log('bukan termasuk kelipatan 10')
}