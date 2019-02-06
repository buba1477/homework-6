//Реализовать функцию getSevenCol, которая принимает на вход массив чисел, а возвращает число с подсчитанным количеством чисел 7.

function getSevenCol (a) {
var sum = 0;
var b = a.join('').split('');
for (var i = 0; i < b.length; i++){
if (b[i]==7) {
sum+=1;
      }
    }
return sum;
  }

console.log (getSevenCol([1, 7, 4, 77, 73])); 
