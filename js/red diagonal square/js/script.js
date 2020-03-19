let body = document.body;
let table = document.createElement('table');
let rowCollection = table.rows;
body.append(table);
let colTdTr = 5;

for (let i = 0; i < colTdTr; i++) {
    let tr = document.createElement('tr');
    table.append(tr);



    for (let j = 0; j < colTdTr; j++) {
        let td = document.createElement('td');
        tr.append(td);
    }
}

for (let i = 0; i < rowCollection.length; i++) {
    let tr = table.rows[i];
    tr.cells[rowCollection.length - 1 - i].style.background = 'red';
}