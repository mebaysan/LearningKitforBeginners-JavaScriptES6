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

function login() {
    if((email==users[0].email && password==users[0].password)||(email==users[1].email && password==users[1].password)){
        alert(tweets);
    }else{
        alert("Kullanıcı adı veya şifre hatalı!");
    }
}

login(email,password);