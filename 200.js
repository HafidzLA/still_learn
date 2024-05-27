var nilai = 1;
var akhir = 200;

for (nilai; nilai <= akhir; nilai++) {
    if (nilai % 3 == 0 && nilai % 15 !== 0) {
        console.log('mantap');
    } else if (nilai % 5 == 0 && nilai % 15 !== 0) {
        console.log('gacor');
    } else if (nilai % 15 == 0) {
        console.log('tes');
    } else {
        console.log(nilai);
    }
}