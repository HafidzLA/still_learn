var s = '';

for (a = 1; a <= 10; a++) { //ketinggian dari segitiga
    for (k = 0; k < 10 - a; k++) { //nambah spasi sebelum bintang
        s += ' '; //output spasi
    }
    for (j = 0; j < a; j++) { //nambah bintang ke baris
        s += '*'; //output bintang
    }
    s += '\n'; //output ketinggian
}

for (a = 9; a >= 1; a--) { //ketinggian dari segitiga
    for (k = 0; k < 10 - a; k++) { //nambah spasi sebelum bintang
        s += ' '; //output spasi
    }
    for (j = 0; j < a; j++) { //output nambah bintang ke baris
        s += '*'; //output bintang
    }
    s += '\n'; //output ketinggian
}
console.log(s)