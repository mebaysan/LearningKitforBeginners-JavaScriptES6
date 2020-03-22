var xhr = new XMLHttpRequest(); 

xhr.onreadystatechange = ()=>{
    if(xhr.readyState === 4){ // 4 ise http response hazır demektir
        if(xhr.status === 200){ // 200 ise yani dönen sonuç başarılımı demektir
            console.log(xhr.responseText); // xhr nesnesinin responseText'ini return et
        }else if(xhr.status === 404){
            console.log("Kaynak bulunamadı!");
        }
        
    }
}

xhr.onprogress = ()=>{ // işlem devam ederken bu method kullanılır. mesela sayfa yüklenirken kullanıcıya bir gif veya sayfa yükleniyor mesajı döndürürken kullanılır.
    console.log("İşlem devam ediyor!");
}

xhr.open('GET','msg.txt',true) // server'dan bilgi talep ederken msg.txt dosyasını göndereceğiz. true -> diyerek işlemlerin asenkron yürümesini sağladık.
xhr.send(); // göndereceğiz

/*
ReadyState özellikleri

0 -> server henüz başlatılmamış 
1 -> server connection kurulmuşsa
2 -> request alınmışsa
3 -> request serverda hala işletiliyorsa yani sonuç döndürmesi bekleniyorsa
4 -> request bittiyse ve response hazırsa 

Status Kodları:
200 -> OK başarılı olduğu
403 -> Talep onaylanmadı
404 -> NotFound bulunamadı

*/