const answer = (no) => {
    var arr = ["D", "C", "D", "C", "B", "B", "C", "B", "B", "D", "B", "A"];
    return arr[no - 1];
}

// var No = prompt("请输入题号：");
No = 2;
console.log(`第${No}題答案是${answer(No)}`);