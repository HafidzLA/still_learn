var a = '';

for (var b = 0; b < 5; b++) { //tinggi
    /*nambah bintang dan jika true hanya menambahkan spasi di sebelah kanan saja,
    sedangkan false menambahkan spasi di ke dua sisi*/
    for (var c = 0; c < 5; c++) {
        a += (b % 2 === 0 || c > 0) ? '1 ' : ' 1 ';
    }
    a += '\n';
}
console.log(a);

//penjelasan line 6 dan 7 digabung