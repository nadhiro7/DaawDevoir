let show =document.getElementById('show');
let password = document.getElementById("password");
let errors = document.querySelectorAll('.error');
let email = document.getElementById("email");
show.onclick = ()=>{
    if(show.classList.contains("fa-eye")){
        show.classList.replace("fa-eye" , "fa-eye-slash");
        document.querySelectorAll('input')[1].type = "text";
    }else{
        show.classList.replace("fa-eye-slash" ,"fa-eye" );
        document.querySelectorAll('input')[1].type = "password";
    }
}
let form = document.getElementById("form");
form.addEventListener("submit" , e=>{
    e.preventDefault();
})
function login(){
    errors[0].style.display = "none";
    errors[1].style.display = "none";
    
    if(email.value == "" || email.value == null || !email.value.includes('@')){
        errors[0].style.display = "block";
        if(password.value == "" || password.value == null){
            errors[1].innerHTML = "Your password invalid";
            errors[1].style.display = "block";
        }
    }else{
        if(password.value == "" || password.value == null){
            errors[1].innerHTML = "Your password incorrect";
            errors[1].style.display = "block";
        }else{
            location.replace("../Home.html")
        }
    }
}