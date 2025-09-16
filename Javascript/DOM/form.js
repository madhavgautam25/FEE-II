function data(){
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const  password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    if(email==="" || contact==="" || password==="" || confirmPassword===""){
        alert("All fields are mandatory!")
        return false
    }else if(contact.length !== 10){
        alert("Phone number must be of 10 digits!")
        return false
    }else if(isNaN(contact)){
        alert("Only digits should be there!")
        return false
    }else if(password !== confirmPassword){
        alert("Password is not matched with confirm password")
        return false
    }else if(password.length<8){
        alert("Password should be of atleast 8 characters!")
        return false
    }
    else{
        return true
    }
}