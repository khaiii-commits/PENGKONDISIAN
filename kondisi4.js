const prompt = require('prompt-sync')({sigint:true})

let suhu = Number(prompt('Masukan Suhu Benda: '))

if (suhu < 0) {
  console.log("Wujud: PADAT (Es)");
} else if (suhu <= 100) {
  console.log("Wujud: CAIR (Air)");
} else {
  console.log("Wujud: GAS (Uap)");
}