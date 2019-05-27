loadEmployee = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'employees.json', true);

    xhr.onload = () => {
        if (this.status === 200) {
            console.log(this.responseText);
            console.log(JSON.parse(this.responseText));
        }
    }
    xhr.send();
}
document.querySelector('#getEmployee').addEventListener('click', loadEmployee); // ilk parametre event adı ikinci parametre event emitlenince gerçekleşecek fonksiyon
