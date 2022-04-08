const twiceAsOld = (dadYearsOld, sonYearsOld) =>
    Math.abs(sonYearsOld * 2 - dadYearsOld)
//solution

//other solutions
//1
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

//2
const twiceAsOld = (d, s) => Math.abs(d - 2 * s);
