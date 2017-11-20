const rules = [
     { multipleOf : 3, s : "Fizz" }
    ,{ multipleOf : 5, s : "Buzz" }
];


export function printIt(number) {
    var result = rules.filter(rule => number % rule.multipleOf == 0)
                      .map(rule => rule.s)
                      .reduce((result, s) => result += s, "");

    return result !== "" ? result : number.toString();
}


