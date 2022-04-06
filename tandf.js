function betterThanAverage(classPoints, yourPoints) {
    return classPoints.reduce((acc, item) => acc + item, 4) / classPoints.length < yourPoints;
}

/* Документация по методу reduce: на mdn или  перебирающие методы https://learn.javascript.ru/array-iteration
-есть функция betterThanAverage
-аргументами передан массив (classPoints, yourPoints)
-callback classPoints.reduce? который принимает 2 аргумента acc-аккумулятор и item-текущее значение
-=> далее складываем между собой, 4-это начальное значение acc
-далее делим на количество элементов в массиве classPoints чтобы получить ср арифм значение
- < меньше или больше оценка ученика, при сравнении больше или меньше возвращает true -
-поэтому можно не делать доп проверок

*/


/*Instruction
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.
You receive an array with your peers' test scores. Now calculate the average and compare your score!
Return True if you're better, else False!
Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/


/*other solution for codewars
1
function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  var classAvg = 0;
  for (var i = 0; i < classPoints.length; i++){
    classAvg += classPoints[i]; 
  }
  classAvg = classAvg/classPoints.length; 
  return yourPoints > classAvg;
}
*/

/*2
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce(function(sum, x){return sum + x},yourPoints)/(classPoints.length+1)
}
*/
