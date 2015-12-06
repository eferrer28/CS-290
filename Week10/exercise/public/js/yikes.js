document.addEventListener('DOMContentLoaded', magicHappens);

console.log("don't be scared");

function magicHappens(){
    console.log("why u know oork");
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
        console.log("for me to poop on");
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
                
                alert(req.response); //debug
     
                
                
                
        
    }else{
        console.log("ERROR IN NETWORK REQUEST " + req.statusText);
    }
        });
        req.send(JSON.stringify(payload));
        event.preventDefault();
    
    });
}


