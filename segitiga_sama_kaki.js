var z = '';

for (a = 0; a < 5; a++) { //nambah baris
    for (b = 1; b < 5 - a; b++) { //nambah spasi sblm bintang
        z += ' ';
    }
    for (c = 0; c <= a * 2; c++) { //nambah bintang ke baris
        z += '*';
    }
    for (d = 5; d > c - a; d--) { //nambah spasi setelah bintang
        z += ' ';
    }
    z += '\n';
}

for (a = 4; a > 0; a--) {
    for (b = 0; b < 5 - a; b++) {
        z += ' ';
    }
    for (c = a * 2 - 1; c >= 1; c--) {
        z += '*';
    }
    for (d = 0; d < 5 - a; d++) {
        z += ' ';
    }
    z += '\n';
}
console.log(z)