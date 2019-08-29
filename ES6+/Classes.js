class Employee {
    constructor(name, age, salary) {
        this.name = name,
            this.age = age,
            this.salary = salary
    }

    showInfos = () => console.log(`Ad: ${this.name} - Yaş: ${this.age} - Maaş: ${this.salary}`);
}
const emp = new Employee('Enes',18,3000);
emp.showInfos();