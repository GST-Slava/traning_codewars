function typeOfSum(a, b) {
    return typeof (a + b);
}//solutions 

//other solution typeof
const typeOfSum = (a, b) => typeof (a + b);//1

typeOfSum = (a, b) => typeof (a + b);//2


function typeOfSum(a, b) {
    return typeof a != 'string' && typeof b != 'string' ? 'number' : 'string';
}//3

