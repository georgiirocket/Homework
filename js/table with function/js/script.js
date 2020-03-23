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

let arrProperties = Object.keys(data[0]);
let body = document.body;
let table = document.createElement("table");
body.prepend(table);

paintTable();

let buttonAdd = document.createElement("button");
table.after(buttonAdd);
buttonAdd.innerHTML = "Add User";

let buttonDel = document.createElement("button");
buttonAdd.after(buttonDel);
buttonDel.innerHTML = "Delete User";

let buttonEdit = document.createElement("button");
buttonDel.after(buttonEdit);
buttonEdit.innerHTML = "Edit User";

buttonAdd.addEventListener("click", () => {
  let newObject = {};
  for (let i = 0; i < arrProperties.length; i++) {
    if (i == 0) {
      let inputOne = prompt("Input First Name");
      if (inputOne == "") {
        alert("Без имени нельзя зарегистрировать пользователя");
        break;
      } else {
        newObject[arrProperties[i]] = validateWord(inputOne);
      }
    }
    if (i == 1) {
      let inputTwo = prompt("Input Last Name");
      if (inputTwo == "") {
        newObject[arrProperties[i]] = validateWord("-");
      } else {
        newObject[arrProperties[i]] = validateWord(inputTwo);
      }
    }
    if (i == 2) {
      let inputThree = prompt("Input Age");
      if (inputThree == "") {
        newObject[arrProperties[i]] = Number(0);
      } else {
        newObject[arrProperties[i]] = Number(inputThree);
      }
    }
  }
  data.push(newObject);
  table.remove();
  table = document.createElement("table");
  body.prepend(table);
  paintTable();
});

buttonDel.addEventListener("click", () => {
  let inputDeleteUser = prompt("Input First or Last Name");
  for (let i = 0; i < table.rows.length; i++) {
    if (
      table.rows[i].cells[0].innerText.toLowerCase() ==
        inputDeleteUser.toLowerCase() ||
      table.rows[i].cells[1].innerText.toLowerCase() ==
        inputDeleteUser.toLowerCase()
    ) {
      data.splice(i - 1, 1);
    }
  }
  table.remove();
  table = document.createElement("table");
  body.prepend(table);
  paintTable();
});

buttonEdit.addEventListener("click", () => {
  let addNameMode = document.createElement("h2");
  body.prepend(addNameMode);
  addNameMode.innerHTML = "Режим редоктирования таблицы";

  let buttonInputBlock = document.createElement("div");
  buttonInputBlock.id = "buttonInputBlock";
  table.after(buttonInputBlock);

  let buttonOk = document.createElement("button");
  let buttonCancel = document.createElement("button");

  buttonOk.classList.add("smallButton");
  buttonCancel.classList.add("smallButton");

  buttonInputBlock.append(buttonOk);
  buttonInputBlock.append(buttonCancel);

  buttonOk.innerHTML = "OK";
  buttonCancel.innerHTML = "CANCEL";

  table.addEventListener("click", event => {
    let target = event.target;
    let text = event.target.textContent;
    if (target.tagName == "TD") {
      target.classList.add("active-td");
      let temporaryVal = text;

      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < Object.keys(data[i]).length; j++) {
          if (String(Object.values(data[i])[j]) == temporaryVal) {
            let input = `<input id ="${Object.values(data[i])[j]}">`;
            target.innerHTML = input;
            let idInput = document.getElementById(
              `${Object.values(data[i])[j]}`
            );

            buttonOk.addEventListener("click", () => {
              let valInput = idInput.value;
              if (valInput != "") {
                data[i][`${Object.keys(data[i])[j]}`] = validateWord(valInput);
                console.log();
                table.remove();
                addNameMode.remove();
                buttonInputBlock.remove();
                table = document.createElement("table");
                body.prepend(table);
                paintTable();
              } else {
                data[i][`${Object.keys(data[i])[j]}`] = "-";
                console.log();
                table.remove();
                addNameMode.remove();
                buttonInputBlock.remove();
                table = document.createElement("table");
                body.prepend(table);
                paintTable();
              }
            });
          }
        }
      }
    }
  });

  buttonCancel.addEventListener("click", () => {
    table.remove();
    addNameMode.remove();
    buttonInputBlock.remove();
    table = document.createElement("table");
    body.prepend(table);
    paintTable();
  });
});

function validateWord(word) {
  let wordLover = word.toLowerCase();
  let arr = wordLover.split("");
  let newSimvol = arr[0].toLocaleUpperCase();
  arr.splice(0, 1, newSimvol);
  let newWord = arr.join("");
  return newWord;
}

function paintTable() {
  for (let i = 0; i < data.length + 1; i++) {
    let tr = document.createElement("tr");
    table.append(tr);

    if (i == 0) {
      for (let j = 0; j < arrProperties.length; j++) {
        let th = document.createElement("th");
        tr.append(th);
        th.innerHTML = arrProperties[j];
      }
    } else {
      let arrVal = Object.values(data[i - 1]);
      for (let j = 0; j < arrVal.length; j++) {
        let td = document.createElement("td");
        tr.append(td);
        if (arrVal[j] != null) {
          td.innerHTML = arrVal[j];
        } else {
          td.innerHTML = "-";
        }
      }
    }
  }
}
