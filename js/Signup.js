let show1 =document.getElementById('show1');
show1.onclick = ()=>{
    if(show1.classList.contains("fa-eye")){
        show1.classList.replace("fa-eye" , "fa-eye-slash");
        document.getElementById("password").type = "text";
    }else{
        show1.classList.replace("fa-eye-slash" ,"fa-eye" );
        document.getElementById("password").type = "password";
    }
}
let show2 =document.getElementById('show2');
show2.onclick = ()=>{
    if(show2.classList.contains("fa-eye")){
        show2.classList.replace("fa-eye" , "fa-eye-slash");
        document.getElementById("cpassword").type = "text";
    }else{
        show2.classList.replace("fa-eye-slash" ,"fa-eye" );
        document.getElementById("cpassword").type = "password";
    }
}
let form = document.getElementById("form");
form.addEventListener("submit" , (e) => {
    e.preventDefault();
})
let fnameValid = false,lnameValid = false,phoneValid = false,emailValid = false,userNameValid = false,passwordValid = false,addressValid = false,cpasswordValid = false;
function valid(i,j){
    document.querySelectorAll('input')[i].style.outline = "auto";
    document.querySelectorAll('input')[i].style.outlineColor = "green";
    if(j != undefined){
        icon[j].classList.replace("fa-times-circle","fa-check");
        icon[j].style.color = "green";
        icon[j].title = "Valid"
    }
}
function invalid(i,j){
    document.querySelectorAll('input')[i].style.outline = "auto"
    document.querySelectorAll('input')[i].style.outlineColor = "red";
    if(j != undefined){
        icon[j].classList.replace("fa-check","fa-times-circle");
        icon[j].style.color = "red";
        icon[j].title = "Invalid"
    }
}
let icon = document.querySelectorAll(".icon");
for(let i = 0 ; i < 2 ; i++){
    document.querySelectorAll('input')[i].onkeyup = ()=>{
        icon[i].style.display = "block";
      let inputValue = document.querySelectorAll('input')[i].value;
      if(inputValue === "" || inputValue === null || inputValue.startsWith(" ") || inputValue.endsWith(" ") || inputValue.trim("") == " " ||!inputValue.match(/^[a-zA-Z0-9]+$/)){
        invalid(i,i);
        i == 0 ? fnameValid = false : lnameValid = false;
      }else{
        valid(i,i);
        i==0 ? fnameValid = true : lnameValid = true;
      }
    }
}
document.querySelectorAll('input')[3].onkeyup = ()=>{
  let inputValue = document.querySelectorAll('input')[3].value;
  if(inputValue === "" || inputValue === null || inputValue.length != 10 || !inputValue.startsWith("0")){
    invalid(3);
    phoneValid = false;
  }else{
    phoneValid = true;
    valid(3);
  }
}
document.querySelectorAll('input')[4].onkeyup = ()=>{
    icon[2].style.display = "block";
  let inputValue = document.querySelectorAll('input')[4].value;
  if(inputValue === "" || inputValue === null || inputValue.startsWith(" ") || inputValue.endsWith(" ") || inputValue.trim("") == " "){
    invalid(4,2);
    addressValid = false;
  }else{
    valid(4,2);
    addressValid = true;
  }
}
document.querySelectorAll('input')[5].onkeyup = ()=>{
    icon[3].style.display = "block";
    let email = document.querySelectorAll('input')[5].value;
    if(email.includes("@") && (email.includes("gmail.com") || email.includes("yahoo.com") || email.includes("univ-constantine2.dz") || email.includes("hotmail.com") || email.includes("outlook.com"))){
      if(email.includes(" ")){
        invalid(5,3);
        emailValid = false;
      }else{
        valid(5,3);
        emailValid = true;
      }
    }else{
      invalid(5,3);
      emailValid = false;
    }
  }

  document.querySelectorAll('input')[6].onkeyup = ()=>{
    icon[4].style.display = "block";
    let userName = document.querySelectorAll('input')[6].value;
    if(userName.includes(" ") || userName.trim("") == " " || userName == "" || userName == null){
      invalid(6,4);
      userNameValid = false;
    }else{
        valid(6,4);
        userNameValid = true;
    }
  }

for(let i = 7 ; i < 9 ; i++){
    document.querySelectorAll('input')[i].onkeyup = ()=>{
        if(document.querySelectorAll('input')[i].value.includes(" ")){
            invalid(i);
            i == 7 ? passwordValid = false : cpasswordValid = false;
          }else{
            document.querySelectorAll('input')[i].style.outline = "none";
            if(document.querySelectorAll('input')[i].value.length >= 8){
              if(i == 8){
                if(document.querySelectorAll('input')[i].value == document.querySelectorAll('input')[7].value){
                    cpasswordValid = true;
                    valid(i);
                }else{
                  invalid(i);
                  cpasswordValid = false;
                }
              }else{
                passwordValid = true;
                valid(i);
              }
          }
      }
    }
}
function SignUp(){
    if(fnameValid && lnameValid && phoneValid && emailValid && userNameValid && passwordValid && addressValid && cpasswordValid){
        let fname = document.querySelectorAll('input')[0].value;
        let lname = document.querySelectorAll('input')[1].value;
        let phone = document.querySelectorAll('input')[3].value;
        let email = document.querySelectorAll('input')[5].value;
        let userName = document.querySelectorAll('input')[6].value;
        let password = document.querySelectorAll('input')[7].value;
        let address = document.querySelectorAll('input')[4].value;
        let birthday = document.querySelectorAll('input')[7].value;
        let data = {
            fname : fname,
            lname : lname,
            phone : phone,
            email : email,
            userName : userName,
            password : password,
            address : address,
            birthday : birthday
        }
        localStorage.setItem("user",JSON.stringify(data));
        document.querySelectorAll('.form span')[0].innerHTML = "Your account has been successfully created";
        document.querySelectorAll('.form span')[0].style.color = "green";
        document.querySelectorAll('.form span')[0].style.fontSize = "1.5rem";
        document.querySelectorAll('.form span')[0].style.fontWeight = "bold";
        document.querySelectorAll('.form span')[0].style.textAlign = "center";
        document.querySelectorAll('.form span')[0].style.marginTop = "1rem";
        document.querySelectorAll('.form span')[0].style.marginBottom = "1rem";
        document.querySelectorAll('.form span')[0].style.display = "block";
        document.querySelectorAll('.form span')[0].style.alignSelf = "center";
        document.querySelectorAll('.form span')[1].style.display = "none";
        document.querySelector('.form a').style.display = "none";
        document.querySelector('.form form').style.display = "none";
        document.querySelector('.form div').style.display = "none";
        document.querySelector('.form h2').style.display = "none";
        setTimeout(()=>{
          location.href = "../Home.html";
        },5000);
    }else{
        document.querySelectorAll('.form span')[0].style.display = "block";
        setTimeout(()=>{
            check1();
        },500);
        setTimeout(()=>{
            check2();
        },500);
        setTimeout(()=>{
            check3();
        },500);
        setTimeout(()=>{
            addressValid ? valid(4,2) : invalid(4,2);
        },500);
    }
}
function check1(){
    fnameValid ? valid(0,0) : invalid(0,0);
    lnameValid ? valid(1,1) : invalid(1,1);
    phoneValid ? valid(3) : invalid(3);
    
}
function check2(){
    emailValid ? valid(5,3) : invalid(5,3);
    userNameValid ? valid(6,4) : invalid(6,4);
    passwordValid ? valid(7) : invalid(7);
}
function check3(){
    cpasswordValid ? valid(8) : invalid(8);
}
