console.log('Loaded!');
var submit = document.getElementById('submit_btn');
submit.on('click',function(req,res){
    var request = new XMLHttpRequest();
    
    request.onreadystateexchange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
            if(request.status == 200)
            alert("logged in Successfully");
            
            else if(request.status == 403)
            alert("username/password is incorrect");
            
            else if(request.status  == 500)
            alert("something went wrong on the server");
        }
    };
    
   var username = document.getElementById('username');
   var password = document.getElementById('password');
   request.open('POST','http://sonukrj08.imad.hasura-app.io/login',true);
   request.setRequestHeader('content-type','application/json');
   request.send(JSON.stringify({username:username,password:password}));
});