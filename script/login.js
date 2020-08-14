let password = "1";
let username = "1";

function login(){
    let usernameValue=document.querySelector("#username").value;
    let passwordValue=document.querySelector("#password").value;
    let jump = false;
    
    if((username==usernameValue) && (password == passwordValue)){
        jump = true;
    }

    if(jump){
        location.href='http://127.0.0.1:5500/pages/admin.html';
    }

    console.log(passwordValue,usernameValue, jump);


    
}

