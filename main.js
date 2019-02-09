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


//Реализовать функцию arrToStr(), которая на вход принимает массив строк, а возвращает строку, которая последовательно поочередно забрала из начала и конца массива все элементы.
//Пример:

function arrToStr(arr){
var res = '';
while(arr.length){
res += arr.shift() + (arr.pop()||"");
}
return res;
};
console.log(arrToStr(["a", "b", "c", "d", "e", "f"])); // "afbecd"