var jmlAngkot = 10;
var Baik = 8;
var noAngkot = 1;

while (noAngkot <= Baik) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
    noAngkot++;
}

for (angkot = Baik + 1; angkot <= jmlAngkot; angkot++) {
    console.log('Angkot No. ' + angkot + ' tidak beroperasi dengan baik')
}