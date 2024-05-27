z = '';

for (a = 5; a > 0; a--) {
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