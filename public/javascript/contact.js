// form validation 
document.getElementById("submit").onclick=validate;
var count=0;
function validate(){
    validateName();
    validateEmail();
    validatePhone();
    validateSubject();
    validateMessage();
    if(count==5){
       alert("you send your question correctly");
    }
    return false;
}

function validateName(){
    var username=document.getElementById("name").value;
    if(username.length==0){
        alert("please enter your name");
        return false;
    }
    else if(username.length<3){
        alert("Please enter a valid user name with more than 2 character");
        return false;
    }
    else if(/[0-9]/.test(username)){
        alert("username should not contain numbers");
        return false;
    }
    else{
        count++;
        return true;
    }
    }

function validateEmail(){
        var email=document.getElementById("email");
        if(email.value==""){
            alert("Please enter an email");
            return false;
        }
        else{
            var email2 = document.getElementById("email").value;
            var atpos = email2.indexOf("@");
            var dotpos = email2.lastIndexOf(".");
        
            if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email2.length) {
                alert("not a valid format email");
                return false;
            } else {
                count++;
                return true;
            } 
    
        }
} 

function validatePhone(){
    let phone = document.getElementById("phone");
    if (phone.value == "") {
        alert("Enter your phone");
        return false;
    } else {
        count++;
        return true;
    }
}

function validateSubject(){
    let subject = document.getElementById("subject");
    if (subject.value == "") {
        alert("Enter your subject");
        return false;
    } else {
        count++;
        return true;
    }
}

function validateMessage(){
    let message = document.getElementById("message");
    if (message.value == "") {
        alert("Enter your message");
        return false;
    } 
    else if(message.value.length<10){
        alert("Please enter a specific message that explain your question");
        return false;
    }
    else {
        count++;
        return true;
    }
}