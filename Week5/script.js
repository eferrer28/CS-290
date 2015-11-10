function makeTable() {

    var newTable = document.createElement("table");
    var newRow = document.createElement("tr");
    for (var i = 0; i < 4; ++i) {

        var newHeader = document.createElement("th");
        newHeader.textContent = "Header" + [i + 1];
        newRow.appendChild(newHeader);
    }

    newTable.appendChild(newRow);
    document.body.appendChild(newTable);
    var newRow = document.createElement("tr");
    for (var j = 0; j < 3; j++) {
        var newRow = document.createElement("tr");

        for (var k = 0; k < 4; k++) {

            var newData = document.createElement("td");
            newData.textContent = [k + 1] + ",";
            newRow.appendChild(newData);

        }
        newTable.appendChild(newRow);
    }

}

function labelTable() {

    var tag = document.body.getElementsByTagName("td");
    for (var i = 0; i < 4; i++)
        tag[i].textContent += 1;
    for (var i = 0; i < 4; i++)
        tag[i + 4].textContent += 2;
    for (var i = 0; i < 4; i++)
        tag[i + 8].textContent += 3;

}

function addButtons(name) {

        
    var abutton = document.createElement("button");
    document.body.appendChild(abutton);
    var label = document.createTextNode(name);
    abutton.appendChild(label);

    abutton.id = name;

}

function Mark() {

    curElement[start].style.backgroundColor = "yellow";
}

function up() {

    
    curElement[start].style.border = "none";
    start -= 4;
    curElement[start].style.border = "thin solid #0000FF";
    disableBoxes();

}

function down() {

    
    curElement[start].style.border = "none";
    start += 4;
    curElement[start].style.border = "thin solid #0000FF";
    disableBoxes();
}

function left() {

    
    curElement[start].style.border = "none";
    start -= 1;
    curElement[start].style.border = "thin solid #0000FF";
    disableBoxes();

}

function right() {

    
    curElement[start].style.border = "none";
    start += 1;
    curElement[start].style.border = "thin solid #0000FF";
    disableBoxes();



}

function disableBoxes() {
    
    if ((curElement[start].textContent) === ("4,1") || curElement[start].textContent === ("4,2") || curElement[start].textContent === ("4,3")) {
        document.getElementById("right").disabled = true;

    } else {
        
        document.getElementById("right").disabled = false;
    }

    if ((curElement[start].textContent) === ("1,1") || curElement[start].textContent === ("1,2") || curElement[start].textContent === ("1,3")) {
        document.getElementById("left").disabled = true;

    } else {
        
        document.getElementById("left").disabled = false;
    }
    if ((curElement[start].textContent) === ("1,1") || curElement[start].textContent === ("2,1") || curElement[start].textContent === ("3,1") || curElement[start].textContent === ("4,1")) {
        document.getElementById("up").disabled = true;

    } else {
        
        document.getElementById("up").disabled = false;
    }
    if ((curElement[start].textContent) === ("1,3") || curElement[start].textContent === ("2,3") || curElement[start].textContent === ("3,4") || curElement[start].textContent === ("4,3")) {
        document.getElementById("down").disabled = true;

    } else {
        
        document.getElementById("down").disabled = false;
    }

}

makeTable();
labelTable();
addButtons("up");
addButtons("down");
addButtons("left");
addButtons("right");
addButtons("Mark");



var start = +0;
var curElement = document.getElementsByTagName("td");
curElement[start].id = "moo";
document.getElementById("moo").style.border = "thin solid #0000FF";

document.getElementById("left").disabled = true;
document.getElementById("up").disabled = true;



document.getElementById("up").addEventListener("click", up);
document.getElementById("down").addEventListener("click", down);
document.getElementById("left").addEventListener("click", left);
document.getElementById("right").addEventListener("click", right);
document.getElementById("Mark").addEventListener("click", Mark);
