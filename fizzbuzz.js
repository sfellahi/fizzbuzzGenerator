export function printIt(number) {
    var result = "";
    if (number % 3 === 0) result += "Fizz";
    if (number % 5 === 0) result += "Buzz";
    return result !== "" ? result : number.toString();
}


