const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];


let table = document.createElement('table');
let tableContent = document.querySelector('#mountains').appendChild(table);


function drawTableHead(data){

    let labels = Object.keys(data[0]);
    let tr = document.createElement('tr');

    for(let i = 0; i < labels.length; i++){
        let text = document.createTextNode(labels[i]);
        let th = document.createElement('th');
        th.appendChild(text);
        tr.appendChild(th);
    }

    return tr;
}

function fillTableRow(mountain){

    let tr = document.createElement('tr');

    let td_name = document.createElement('td');
    td_name.appendChild(document.createTextNode(mountain.name));

    let td_height = document.createElement('td');
    td_height.appendChild(document.createTextNode(mountain.height));
    td_height.style.textAlign = "right";

    let td_place = document.createElement('td');
    td_place.appendChild(document.createTextNode(mountain.place));

    tr.appendChild(td_name);
    tr.appendChild(td_height);
    tr.appendChild(td_place);

    return tr;
}

tableContent.appendChild(drawTableHead(MOUNTAINS));
for (let i = 0; i < MOUNTAINS.length; i++) {
    let tr_mountain = fillTableRow(MOUNTAINS[i]);
    tableContent.appendChild(tr_mountain);
}