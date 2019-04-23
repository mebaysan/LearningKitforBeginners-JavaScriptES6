var users = [
    {email:"menesbaysan@gmail.com",password:"12345"},
    {email:"oyunmenesbaysan@gmail.com",password:"12345"},
]
var tweets = [
    {email:"menesbaysan@gmail.com",tweet:"Bugün hava çok güzel!"},
    {email:"menesbaysan@gmail.com",tweet:"Bugün hava çok güzel2!"},
    {email:"menesbaysan@gmail.com",tweet:"Bugün hava çok güzel3!"},
    {email:"oyunmenesbaysan@gmail.com",tweet:"Bugün hava çok kötü!"},
    {email:"oyunmenesbaysan@gmail.com",tweet:"Bugün hava çok kötü2!"},
]

var email = prompt("email?")
var password = prompt("şifre?")


function kullaniciVarmi(email,password) {
    
    for(i=0;i<users.length;i++){
        if (users[i].email==email && users[i].password==password) {
            return true;
        }else{
            alert("Kullanıcı bulunamadı!");
            return false;
        }
    }
}


function login() {
    if(kullaniciVarmi(email,password)){
        console.log(tweets);
    }else{
        alert("Kullanıcı adı veya şifre hatalı!");
    }
}

login(email,password);