//Butonları seçelim

const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

// Inputları seçelim

const addKey = document.querySelector("#addkey");
const addValue = document.querySelector("#addvalue");
const deleteKey = document.querySelector("#deletekey");

// Eventleri oluşturalım

add.addEventListener("click", addItem);
del.addEventListener("click", deleteItem);
clear.addEventListener("click", clearItems);


function addItem(e) {
    sessionStorage.setItem(addKey.value, addValue.value); // anahtar ve değerini yolluyoruz. sessionstorage'a kayıt yaptık.
}
function deleteItem(e) {
    sessionStorage.removeItem(deleteKey.value); // removeItem tek parametre alır.
}
function clearItems(e) {
    sessionStorage.clear();         // session storage'i sıfırlar
}