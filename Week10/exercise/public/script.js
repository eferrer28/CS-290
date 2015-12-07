
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
            
		req.open('POST', '/insert', true);
        alert("3645");
		req.setRequestHeader('Content-Type', 'application/json');
		req.addEventListener('load',function(){
			if(req.status >= 200 && req.status < 400){
				var response = JSON.parse(req.responseText);
                console.log("word");
                
				var ntable = document.getElementById('data');
				var nrow = document.createElement('tr');
				ntable.setAttribute('id', 'row' + response.id);
				nrow.appendChild(newRow);
                


                
            }else{
                console.log("error");
            }
             req.send.JSON.stringify(payload));

        });
            
        });
