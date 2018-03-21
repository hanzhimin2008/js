let diamond = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let spade = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let heart = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let club = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let newcards = [];
let ran;

while (diamond.length > 0 && spade.length > 0 && heart.length > 0 && club.length > 0) {

    ran = Math.floor(Math.random() * 4);
    switch (ran) {
        case 0:
            newcards.push(`diamond${diamond[0]}`);
            diamond.shift();
            break;
        case 1:
            newcards.push(`spade${spade[0]}`);
            spade.shift();
            break;
        case 2:
            newcards.push(`heart${heart[0]}`);
            heart.shift();
            break;
        case 3:
            newcards.push(`club${club[0]}`);
            club.shift();
            break;
    }

}
for (let i = 0; i < newcards.length; i++) {
    console.log(newcards[i]);
}