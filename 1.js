const dollorToYuan = (dollor) => {
    return dollor * 6.33;
}
const yuanToDollor = (yuan) => {
    return yuan / 6.33;
}
let dollorNum = 8;
let yuanNum = 10000;
console.log(dollorNum + "$=" + dollorToYuan(dollorNum) + "元");
console.log(yuanNum + "元=" + yuanToDollor(10000) + "$");