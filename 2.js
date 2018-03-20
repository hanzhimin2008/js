const currencyConverter = (currencyType, num) => {
    let yuan;
    if (currencyType === "USA") {
        yuan = num * 6.33;
    } else if (currencyType === "JPY") {
        yuan = num * 0.06;
    } else if (currencyType === "EUR") {
        yuan = num * 7.74;
    } else if (currencyType === "RUB") {
        yuan = num * 0.1;
    } else if (currencyType === "FRF") {
        yuan = num * 6.61;
    } else {
        yuan = "nocurrencytype!";
    }
    return yuan;
}
const currencyType1 = "RUB";
const num1 = 100;
console.log(`${num1}元:${currencyConverter(currencyType1, num1)}${currencyType1}`);