const currencyConverter = (currencyType, num) => {
    let yuan;
    switch (currencyType) {
        case "USA":
            yuan = num * 6.33;
            break;
        case "JPY":
            yuan = num * 0.06;
            break;
        case "EUR":
            yuan = num * 7.74;
            break;
        case "RUB":
            yuan = num * 0.1;
            break;
        case "FRF":
            yuan = num * 6.61;
            break;
        default:
            yuan = "Please reconfirm  currencyType!";
    }
    return yuan;
}
const currencyType1 = "USA";
const num1 = 100;
console.log(`${num1}元:${currencyConverter(currencyType1, num1)}${currencyType1}`);