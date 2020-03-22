// Callback functionlar aslında birer fonksiyon tek farkı biz bunları başka fonksiyonlara parametre olarak gönderebiliyoruz


let process1 = (callback) => { // parametre olarak bir fonk alıyor
    setTimeout(() => {
        console.log("Process1");
        callback(); // önce yukardaki işlem bitecek sonra callback çalışacak. Bu sayede kendimize göre asenkron olan işlemi senkron hale getirdik
    }, 5000);
};
let process2 = () => {
    setTimeout(() => {
        console.log("Process2");
    }, 2500);
};

process1(process2); // önce process1 çalışacak sonra process2 çalışacak
