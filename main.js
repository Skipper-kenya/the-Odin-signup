let pwd = document.querySelector("#pwd");
let pwdConfirm = document.querySelector("#pwd_confirm");
let errorClass = document.querySelector("#pwdDiv")


function pwdMatch(){
    if(pwd.value !== pwdConfirm.value){
        errorClass.classList.add("error");
        pwd.style.borderColor = "red"
        pwdConfirm.style.borderColor = "red"
    }else{
        errorClass.classList.remove("error");
        pwd.style.borderColor = ""
        pwdConfirm.style.borderColor = ""
    }
}

pwd.addEventListener("input",pwdMatch)
pwdConfirm.addEventListener("input",pwdMatch)

