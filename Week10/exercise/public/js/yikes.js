function magicHappens(){
    document.getElementById('exercise').addEventListener('click',
        function (event){
        var req = new XMLHttpRequest();
        var payload = {
            name: null,
            reps: null,
            weight: null,
            date: null,
            lbs: null
            
        };
        payload.name = document.getElementById('name').value;
        payload.reps = document.getElementById('reps').value;
        payload.weight = document.getElementById('weight').value;
        payload.date = document.getElementById('date').value;
        payload.lbs= document.getElementById('lbs').value;
        
        req.open('POST', '/', true)
        req.setRequestHeader('Content-Type', 'application/json');
        req.addEventListener('load', function () {
            if (req.status >= 200 && req.status < 400) {
                var response = JSON.parse(req.responseText);
                
                //alert(req.response); //debug
                var mainTable = document.getElementById('mainTable');
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

				var editDelete = document.createElement('form');
				newRow.children[5].appendChild(editDelete);
				editDelete.setAttribute('method', 'post');

				for (var i = 0; i < 3; i++){
					var newInput = document.createElement('input');
					editDelete.appendChild(newInput);
				}
                
                
                
        
    }else{
        console.log("ERROR IN NETWORK REQUEST " + req.statusText);
    }
        });
        req.send(JSON.stringify(payload));
        event.preventDefault();
    
    });
}


document.addEventListener("DOMContentLoaded", magicHappens);