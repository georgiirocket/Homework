let str = "ШаЛАш";

function palindrome(word) {
  let wordStop = word
    .split("")
    .reverse()
    .join("");
  if (word.toLowerCase() == wordStop.toLowerCase()) {
    console.log("Слово палиндром");
  } else {
    console.log("Cлово непалиндром");
  }
}

palindrome(str);

function min(a, b) {
  return a < b ? a : b;
}

function max(a, b) {
  return a > b ? a : b;
}
console.log(min(10, 2));
console.log(max(2, 10));

//--------min if
let a = 15;
let b = 6;
if (a < b) {
  console.log(a);
} else {
  console.log(b);
}

//-------max if
if (a > b) {
  console.log(a);
} else {
  console.log(b);
}

function replaceSimvol() {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(100 * Math.random());
    arr[i] = randomNumber;
  }
  let arrStr = arr.join(" ");
  let z = /0/gi;
  let newArrStr = arrStr.replace(z, "zero");
  let result = newArrStr.split(" ");
  console.log(result);
}

replaceSimvol();
