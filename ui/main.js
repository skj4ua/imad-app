console.log('Loaded!');
var reg = document.getElementById('reg_btn');

var submit = document.getElementById('submit_btn');


submit.onclick=function(){
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
    
   var username = document.getElementById('username').value;
   var password = document.getElementById('password').value;
   console.log(username);
   console.log(password);
   request.open('POST','http://sonukrj08.imad.hasura-app.io/login',true);
   request.setRequestHeader('content-type','application/json');
   request.send(JSON.stringify({username:username,password:password}));
};

reg.onclick=function(){
    var request = new XMLHttpRequest();
    
    request.onreadystateexchange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
            if(request.status == 200)
            alert("registration Successfully");
            else if(request.status == 403)
            alert("username/password is incorrect");
            else
            alert("something went wrong on the server");
        }
    };
    
   var username = document.getElementById('username').value;
   var password = document.getElementById('password').value;
   request.open('POST','http://sonukrj08.imad.hasura-app.io/create-user',true);
   request.setRequestHeader('content-type','application/json');
   request.send(JSON.stringify({username:username,password:password}));
};