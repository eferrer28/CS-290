omg();
console.log('el o el');
//document.addEventListener('DOMContentLoaded', magicHappens);


function omg(){
    console.log("for me to poop on");
}

function magicHappens(){
    console.log("don't be scared");
    document.getElementById('exercise').addEventListener('click',
        function (event){
        var req = new XMLHttpRequest();

        
        var n = document.getElementById('name').value;
        var r = document.getElementById('reps').value;
        var w = document.getElementById('weight').value;
        var d = document.getElementById('date').value;
        var type = document.getElementById('lbs').value;
        
        req.open('GET', '/http://52.89.169.73:3000/?name=' + n + '&reps=' + r + '&weight='
            + w + '&date=' + d + '&lbs=' + type, true);
        req.setRequestHeader('Content-Type', 'application/json');
        req.addEventListener('load', function () {
            if (req.status >= 200 && req.status < 400) {
                var response = JSON.parse(req.responseText);
                
                alert(req.response); //debug
                document.getElementById("theone").innerHTML = "";
                for (var i = 0; i <= response.length - 1; i++) {
                     document.getElementById("theone").innerHTML += "<tr id='row"+response[i].id+"'><td>"+response[i].name+"</td><td>"+response[i].reps+"</td><td>"+response[i].weight+"</td><td>"+response[i].date+"</td><td>"+isTrue(response[i].lbs)+"</td><td><form action='/update' method='get'><input type='hidden' name= 'id' value='"+response[i].id+"'><input type='submit' name='update' value='Edit'></form></td><td><form action='/delete' onsubmit='deleteRow("+response[i].id+")' method='get'><input type='hidden' name='id' value='"+response[i].id+"'><input type='submit' name='delete' value='Delete'></form></td></tr>";     
                };
                   
                
        
    }else{
        console.log("ERROR IN NETWORK REQUEST " + req.statusText);
    }
        });
        req.send(null);
        event.preventDefault();
    
    });
}


