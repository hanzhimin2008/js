let a, b, c;
for (i = 100; i <= 999; i++) {
    a = Math.floor(i / 100);
    b = Math.floor((i - a * 100) / 10);
    c = (i - a * 100 - b * 10);
    if (a * a * a + b * b * b + c * c * c === i) {
        console.log(i);
    }
}