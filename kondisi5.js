const prompt = require('prompt-sync')({ sigint: true });

function tentukanPredikat(nilai) {
    if (isNaN(nilai) || nilai < 0 || nilai > 100) {
        return "out of range";
    } else if (nilai >= 90 && nilai <= 100) {
        return "A";
    } else if (nilai >= 80 && nilai < 90) {
        return "B";
    } else if (nilai >= 75 && nilai < 80) {
        return "C";
    } else if (nilai >= 60 && nilai < 75) {
        return "D";
    } else {
        return "E";
    }
}
const input = prompt('Masukkan nilai (0 - 100): ');
const nilai = parseFloat(input);

const predikat = tentukanPredikat(nilai);
console.log(`Predikat Nilai: ${predikat}`);