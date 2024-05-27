var jmlAngkot = 10;
var Baik = 6;
var noAngkot = 1;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= Baik) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
    } else if (noAngkot === 10 || noAngkot === 8) {
        console.log('Angkot No. ' + noAngkot + ' lembur');
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang rusak');
    }
}