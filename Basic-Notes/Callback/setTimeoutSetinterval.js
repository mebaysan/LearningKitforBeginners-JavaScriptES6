// Set Timeout -> işlemi belli bir süre sonra başlatır

setTimeout(() => { // 3 saniye sonra işlemi yapacak
    console.log("Naber");
}, 3000);


// Set Interval -> işlemi belli aralıklarla yaptırır
let i = 0;
let value = setInterval(() => {
    i++;
    console.log(`Sayı : ${i}`);
}, 200);

setTimeout(()=>{
    clearInterval(value);
},5000);