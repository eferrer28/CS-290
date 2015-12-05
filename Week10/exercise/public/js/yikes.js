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
        
        req.open('POST', 'http://52.89.169.73:3000/insert', true)
        req.setRequestHeader('Content-Type', 'application/json');
        req.addEventListener('load', function () {
            if (req.status >= 200 && req.status < 400) {
                var response = JSON.parse(req.responseText);
                
                //alert(req.response); //debug
        
    }else{
        console.log("ERROR IN NETWORK REQUEST " + req.statusText);
    }
        });
        req.send(JSON.stringify(payload));
        event.preventDefault();
    
    });
}