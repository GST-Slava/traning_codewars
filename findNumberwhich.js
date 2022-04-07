function divisibleBy(numbers, divisor) {
    return numbers.filter(n => n % divisor === 0)
}


//other solution

//1
const divisibleBy = (numbers, divisor) => numbers.filter(number => !(number % divisor));

//2
function divisibleBy(numbers, divisor) {
    var newArr = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % divisor === 0) {
            newArr.push(numbers[i]);
        }
    }
    return newArr;
}