




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
        document.getElementById
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
                
				var ntable = document.getElementById('data');
				var nrow = document.createElement('tr');
				newRow.setAttribute('id', 'row' + response.id);
				mainTable.appendChild(newRow);
                
				for (var i = 0; i < 6; i++){
					var newCell = document.createElement('td');
					newRow.appendChild(newCell);
				}

				nrow.children[0].textContent = response.name;
				nrow.children[1].textContent = response.reps;
				nrow.children[2].textContent = response.weight;
				nrow.children[3].textContent = response.date;
				nrow.children[4].textContent = response.lbs;
                
                var modEx = document.createElement('form');
				newRow.children[5].appendChild(modEx);
				modEx.setAttribute('method', 'post');

				for (var i = 0; i < 3; i++){
					var newInput = document.createElement('input');
					modEx.appendChild(newInput);
				}

				modEx.children[0].setAttribute('type', 'hidden');
				modEx.children[0].setAttribute('name', 'id');
				modEx.children[0].setAttribute('value', response.id);

				modEx.children[1].setAttribute('type', 'submit');
				modEx.children[1].setAttribute('name', 'edit');
				modEx.children[1].setAttribute('value', 'edit');

				modEx.children[2].setAttribute('type', 'submit');
				modEx.children[2].setAttribute('name', 'deleted');
				modEx.children[2].setAttribute('value', 'delete');
				modEx.children[2].addEventListener('click', delFunction, true);
                
                req.(send.JSON.stringify(payload));
            }else{
                console.log("error");
            }
        });
            
        });

    	var deleteEx = document.getElementsByClassName('deleteWorkout');

	var delFunction = function(event){
		var req = new XMLHttpRequest();

		var payload = {};
		payload.id = this.parentNode.firstElementChild.value;
		payload.del = true;

		req.open('POST', '/', false);
		req.setRequestHeader('Content-Type', 'application/json');
		req.send(JSON.stringify(payload));
		event.preventDefault;
		var response = JSON.parse(req.responseText);
		var delParent = document.getElementById('row' + response.id).parentNode;
		delParent.removeChild(document.getElementById('row' + response.id));
	};

	for(var i = 0; i < deleteEx.length; i++){
		deleteEx[i].addEventListener('click', delFunction);
	}

