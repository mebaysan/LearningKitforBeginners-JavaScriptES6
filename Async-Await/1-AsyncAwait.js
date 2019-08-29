async function test(data) {
    // async -> mutlaka ve mutlaka bize promise dönecek diyor
    return data; // biz burada herhangi bir promise dönmüyoruz fakat js bize otomatik olarak promise döner
    /*
            JavaScript otomatik olarak bu forma çevirecek
    return new Promise((resolve,reject)=>{
        resolve(data);
    });
    */
}

test("Naber")
    .then(response => console.log(response)); // başarılı olursa bize 3. satırdaki datayı resolve olarak dönecek ve bize cevap verecek. bizde .then ile gelen cevabı(response) yakalayacağız



// await -> bir promise'in bize olumlu dönüş yapmasını bekler

async function test2(item){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(item);
        },2000);
    });
    let response = await promise; // promise'den dönen değerin resolve olmasını bekler
    console.log(response);
    console.log("Direk gelmedi değil mi? :)");
}
test2("Naber");