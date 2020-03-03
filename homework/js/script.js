let str = 'Hello word';
alert(str);
str = 'Hi Jack';
console.log(str);




let number = 6;
let string = 'Hello Holly';
let answer = true;
let p;
let d = null;
let object = {
    name: 'Kitty',

    toString: function () {
        return 'Имя ' + this.name;
    }
}

alert(number);
alert(string);
alert(answer);
alert(p);
alert(d);
alert(object);

console.log(number);
console.log(string);
console.log(answer);
console.log(p);
console.log(d);
console.log(object);

let age = prompt('Введите свой возраст', 18);
let ageFloor = Math.floor(age);

alert(`Поздравляем вам ${ageFloor} полных лет`);

if (ageFloor < 18) {
    alert('Вы несовершеннолетний');
} else {
    alert('Вы совершеннолетний');
}