let string = "";

for (let i = 1; i < 7; i++) {
    for (let j = 1; j <= 7 - i; j++) {
        string = string + " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
        string = string + "*";
    }
    console.log(string);
    string = "";
}
string = " ";
for (let i = 5; i >= 1; i--) {
    for (let j = 1; j <= 6 - i; j++) {
        string = string + " ";
    }

    for (let j = 2 * i - 1; j >= 1; j--) {
        string = string + "*";
    }
    console.log(string);
    string = " ";

}