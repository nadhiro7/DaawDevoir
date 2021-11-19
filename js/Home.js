function menuBar(){
    let menu = document.querySelector(".menu");
    let sp = document.querySelectorAll(".menu span");
    let nav = document.querySelector("nav ul");
    let navigation = document.querySelector("nav");
    if(sp[0].classList.contains("sp1")){
        sp[0].classList.remove("sp1");
        sp[1].classList.remove("sp2");
        sp[2].classList.remove("sp3");
        nav.style.width = "0px";
        nav.style.overflow = "hidden";
        menu.classList.replace("positionRight" , "positionLeft");
        navigation.style.backgroundColor = "transparent";
    }else{
        sp[0].classList.add("sp1");
        sp[1].classList.add("sp2");
        sp[2].classList.add("sp3");
        nav.style.width = "100%";
        menu.classList.replace("positionLeft" , "positionRight");
        nav.style.overflow = "visible";
        if(document.querySelector('html').scrollWidth < 991 ){
            navigation.style.backgroundColor = "#ededed";
        }
    }
}
let body = document.body;
let nav = document.querySelector("nav");
body.onscroll = ()=>{
    if(document.querySelector('html').scrollTop >= 51){
        nav.style.top = "0"
    }else{
        let top = 50 - document.querySelector('html').scrollTop;
        nav.style.top = `${top}px`
    }
}
let inputs1 = document.querySelectorAll(".add form div input");
let labels1 = document.querySelectorAll(".add form div label");
let inputs2 = document.querySelectorAll(".deletEdit > form div input");
let labels2 = document.querySelectorAll(".deletEdit > form div label");
for(let i =0 ; i < inputs1.length ; i++){
    inputs1[i].addEventListener("focus",()=>{
        labels1[i].classList.add("labelFocus");
    })
}
for(let i =0 ; i < inputs1.length ; i++){
    inputs1[i].addEventListener("blur",()=>{
        if(inputs1[i].value == "") labels1[i].classList.remove("labelFocus");
    })
}
for(let i =0 ; i < inputs2.length ; i++){
    inputs2[i].addEventListener("focus",()=>{
        labels2[i].classList.add("labelFocus");
    })
}
for(let i =0 ; i < inputs2.length ; i++){
    inputs2[i].addEventListener("blur",()=>{
        if(inputs2[i].value == "") labels2[i].classList.remove("labelFocus");
    })
}
let data = JSON.parse(localStorage.getItem("user"));
if(data != null){
   document.getElementById("name").innerHTML = `${data.fname} ${data.lname}`;
   document.getElementById("aName").innerHTML = `${data.userName}`;
}
let form = document.getElementById("addForm");
form.addEventListener("submit" , (e) => {
    e.preventDefault();
})

let listUsers = document.querySelector(".users");
form.onsubmit = () => {
    let firstName = document.querySelectorAll('#addForm input')[0].value;
    let lastName = document.querySelectorAll('#addForm input')[1].value;
    let email = document.querySelectorAll('#addForm input')[2].value;
    let date = document.querySelectorAll('#addForm input')[3].value;
    if(firstName == "" || lastName == "" || email == "" || date == "" || document.querySelectorAll('#addForm input')[4].value == "" || document.querySelectorAll('#addForm input')[5].value == ""){
        document.querySelector("#addForm span").style.display = "block";
        document.querySelector("#addForm span").innerHTML = "Please fill all fields";
        document.querySelector("#addForm span").style.color = "red";
        return false;
    }else{
        document.querySelector("#addForm span").style.display = "block";
        document.querySelector("#addForm span").innerHTML = "Add Successful";
        document.querySelector("#addForm span").style.color = "green";
        setTimeout(()=>{
            document.querySelector("#addForm span").style.display = "none";
        },1000);
        let div = document.createElement("div");
        div.classList.add("userRow");
        let id = document.createElement("p");
        id.innerHTML = `${listUsers.childElementCount}`;
        let fname = document.createElement("p");
        fname.innerHTML = `${firstName}`;
        let lname = document.createElement("p");
        lname.innerHTML = `${lastName}`;
        let emailElement = document.createElement("p");
        emailElement.innerHTML = `${email}`;
        let dateElement = document.createElement("p");
        dateElement.innerHTML = `${date}`;
        let phone = document.createElement("p");
        phone.innerHTML = `${document.querySelectorAll('#addForm input')[4].value}`;
        let address = document.createElement("p");
        address.innerHTML = `${document.querySelectorAll('#addForm input')[5].value}`;
        div.appendChild(id);
        div.appendChild(fname);
        div.appendChild(lname);
        div.appendChild(emailElement);
        div.appendChild(dateElement);
        div.appendChild(phone);
        div.appendChild(address);
        listUsers.appendChild(div);
        for(let i = 0 ; i < document.querySelectorAll('#addForm input').length ; i++){
            document.querySelectorAll('#addForm input')[i].value = "";
            document.querySelectorAll('#addForm input')[i].focus();
        }
    }

}
let editForm = document.getElementById("editForm");
editForm.addEventListener("submit" , (e) => {
    e.preventDefault();
});
let getEdit = document.getElementById("getUserEdit");
getEdit.addEventListener("submit" , (e) => {
    e.preventDefault();
})
getEdit.onsubmit = () => {
    let id = document.querySelectorAll('#getUserEdit input')[0].value;
    if(id > 0 && id < listUsers.childElementCount){
        editForm.style.display = "flex";
        document.querySelectorAll('#editForm input')[0].value = listUsers.children[id].children[5].innerHTML;
        document.querySelectorAll('#editForm input')[1].value = listUsers.children[id].children[6].innerHTML;
        document.querySelectorAll('#editForm input')[2].value = listUsers.children[id].children[3].innerHTML;
        document.querySelectorAll('#editForm input')[3].value = listUsers.children[id].children[4].innerHTML;
        document.querySelectorAll('#editForm input')[0].focus();
        document.querySelectorAll('#editForm input')[1].focus();
        document.querySelectorAll('#editForm input')[2].focus();
        document.querySelectorAll('#editForm input')[3].focus();
    }else{
        document.querySelectorAll('#getUserEdit input')[0].value = "";
        document.querySelectorAll('#getUserEdit input')[0].placeholder = "Please enter a valid id";
    }
}
editForm.onsubmit = () => {
    let phone = document.querySelectorAll('#editForm input')[0].value;
    let address = document.querySelectorAll('#editForm input')[1].value;
    let email = document.querySelectorAll('#editForm input')[2].value;
    let date = document.querySelectorAll('#editForm input')[3].value;
    if(phone == "" || address == "" || email == "" || date == ""){
        document.querySelector("#editForm span").style.display = "block";
        document.querySelector("#editForm span").innerHTML = "Please fill all fields";
        document.querySelector("#editForm span").style.color = "red";
        return false;
    }else{
        document.querySelector("#editForm span").style.display = "block";
        document.querySelector("#editForm span").innerHTML = "Edit Successful";
        document.querySelector("#editForm span").style.color = "green";
        setTimeout(()=>{
            document.querySelector("#editForm span").style.display = "none";
        },1000);
        let id = document.querySelectorAll('#getUserEdit input')[0].value;
        listUsers.children[id].children[5].innerHTML = phone;
        listUsers.children[id].children[6].innerHTML = address;
        listUsers.children[id].children[3].innerHTML = email;
        listUsers.children[id].children[4].innerHTML = date;
        document.querySelectorAll('#editForm input')[0].value = "";
        document.querySelectorAll('#editForm input')[1].value = "";
        document.querySelectorAll('#editForm input')[2].value = "";
        document.querySelectorAll('#editForm input')[3].value = "";
        editForm.style.display = "none";
        document.querySelectorAll('#getUserEdit input')[0].value = "";
        document.querySelectorAll('#getUserEdit input')[0].placeholder = "Enter id";
    }
}

let getDelete = document.getElementById("getUserDelete");
getDelete.addEventListener("submit" , (e) => {
    e.preventDefault();
});
getDelete.onsubmit = () => {
    let id = document.querySelectorAll('#getUserDelete input')[0].value;
    if(id > 0 && id < listUsers.childElementCount){
        editForm.style.display = "flex";
        document.querySelectorAll('.del span p')[0].innerHTML = listUsers.children[id].children[1].innerHTML;
        document.querySelectorAll('.del span p')[1].innerHTML = listUsers.children[id].children[2].innerHTML;
        document.querySelectorAll('.del span p')[2].innerHTML = listUsers.children[id].children[3].innerHTML;
        document.querySelectorAll('.del span p')[3].innerHTML = listUsers.children[id].children[4].innerHTML;
    }else{
        document.querySelectorAll('#getUserDelete input')[0].value = "";
        document.querySelectorAll('#getUserDelete input')[0].placeholder = "Please enter a valid id";
    }
}
let Delete = document.getElementById("delete");
Delete.addEventListener("click" , () => {
    let id = document.querySelectorAll('#getUserDelete input')[0].value;
    listUsers.removeChild(listUsers.children[id]);
    document.querySelectorAll('#getUserDelete input')[0].value = "";
    document.querySelectorAll('#getUserDelete input')[0].placeholder = "Enter id";
    document.querySelectorAll('.del span p')[0].innerHTML = "";
    document.querySelectorAll('.del span p')[1].innerHTML = "";
    document.querySelectorAll('.del span p')[2].innerHTML = "";
    document.querySelectorAll('.del span p')[3].innerHTML = "";
});
