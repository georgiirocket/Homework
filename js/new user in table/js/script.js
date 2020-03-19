let body = document.body;
let table = body.querySelector("table");
let rows = table.rows;

for (el of rows) {
  let td = el.cells;
  td[2].style.background = "red";
}

var data = [
  {
    firstName: "Ashton",
    lastName: "Kutcher",
    age: 40
  },
  {
    firstName: "Bradley",
    lastName: "Pitt",
    age: 54
  },
  {
    firstName: "Hannah",
    lastName: "Dakota",
    age: 24
  }
];

let secTable = document.createElement("table");
table.after(secTable);
secTable.classList.add("second-table");
let trHeader = document.createElement("tr");
secTable.append(trHeader);
for (el in data[0]) {
  let th = document.createElement("th");
  th.innerHTML = el;
  trHeader.appendChild(th);
}

for (let i = 0; i < data.length; i++) {
  let tr = document.createElement("tr");
  secTable.append(tr);
  for (el in data[i]) {
    let td = document.createElement("td");
    tr.append(td);
    td.innerHTML = data[i][el];
  }
}

let one = document.getElementById("newUser");
let two = document.getElementById("deleteUser");

one.onclick = function() {
  let nameFirst = prompt("Введите имя");
  let nameLast = prompt("Введите фамилию");
  let inputAge = prompt("Введите возраст");

  let newUser = {
    firstName: validateWord(nameFirst),
    lastName: validateWord(nameLast),
    age: Number(inputAge)
  };

  let newtr = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.innerHTML = newUser.firstName;
  let td2 = document.createElement("td");
  td2.innerHTML = newUser.lastName;
  let td3 = document.createElement("td");
  td3.innerHTML = newUser.age;
  newtr.append(td1);
  newtr.append(td2);
  newtr.append(td3);
  secTable.appendChild(newtr);
  data.push(newUser);
};

two.onclick = function() {
  let userDel = prompt("Введите имя или фамилию пользователя");
  for (let i = 0; i < secTable.rows.length; i++) {
    if (
      secTable.rows[i].cells[0].innerText.toLowerCase() ==
        userDel.toLowerCase() ||
      secTable.rows[i].cells[1].innerText.toLowerCase() == userDel.toLowerCase()
    ) {
      data.splice(i - 1, 1);
      secTable.rows[i].remove();
    }
  }
};

function validateWord(word) {
  let wordLover = word.toLowerCase();
  let arr = wordLover.split("");
  let newSimvol = arr[0].toLocaleUpperCase();
  arr.splice(0, 1, newSimvol);
  let newWord = arr.join("");
  return newWord;
}
