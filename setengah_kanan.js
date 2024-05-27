var s = '';

for (a = 0; a <= 10; a++) {
    for (j = 0; j < a; j++) {
        s += '*';
    }
    s += '\n';
}

for (a = 10; a > 0; a--) {
    for (j = 0; j < a - 1; j++) {
        s += '*';
    }
    s += '\n';
}
console.log(s)