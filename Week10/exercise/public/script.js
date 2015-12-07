

function(){
    
    
}


function workPLZ(){
    /*
    document.getElementsById
    ('exercise').addEventListener('click', function(event){
    
	var req = new XMLHttpRequest();
	var workout = {};

	workout.name = document.getElementById("name").value;
	workout.reps = document.getElementById("reps").value;
	workout.weight = document.getElementById("weight").value;
	workout.date = document.getElementById("date").value;
	workout.lbs = document.getElementById("lbs").value;

	req.open("GET", "http://http://52.89.169.73:3000/insert?"+
		"name=" + workout.name + "&reps=" + workout.reps + 
		"&weight=" + workout.weight + "&date=" + workout.date + "&lbs=" + workout.lbs, true);
	req.setRequestHeader("Content-type", "application/json");
	req.addEventListener("load", function(){
			console.log("SHOW ME SOMETHING");
	});
	req.send(null);
})
};
*/
        document.getElementsById
    ('exercise').addEventListener('click', function(event){
		var req = new XMLHttpRequest();
		var payload = {};
        console.log("4");
		payload.name = document.getElementById('name').value;
		payload.reps = document.getElementById('reps').value;
		payload.weight = document.getElementById('weight').value;
		payload.date = document.getElementById('date').value;
		payload.units = document.getElementById('lbs').value;
		payload.workout = true;
            
		req.open('POST', '/', true);
        alert("3645");
		req.setRequestHeader('Content-Type', 'application/json');
		req.addEventListener('load',function(){
			if(req.status >= 200 && req.status < 400){
				var response = JSON.parse(req.responseText);
                console.log("word");
                /*
				var mainTable = document.getElementById('tbody');
				var newRow = document.createElement('tr');
				newRow.setAttribute('id', 'row' + response.id);
				mainTable.appendChild(newRow);
                
				for (var i = 0; i < 6; i++){
					var newCell = document.createElement('td');
					newRow.appendChild(newCell);
				}

				newRow.children[0].textContent = response.name;
				newRow.children[1].textContent = response.reps;
				newRow.children[2].textContent = response.weight;
				newRow.children[3].textContent = response.date;
				newRow.children[4].textContent = response.lbs;
                */
            }
        });
        });
};  

document.addEventListener('DOMContentloaded', editstuff);
document.addEventListener('DOMContentloaded', workPLZ);