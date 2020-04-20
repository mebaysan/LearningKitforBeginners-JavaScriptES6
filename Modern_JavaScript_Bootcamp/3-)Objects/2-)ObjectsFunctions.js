let employee = {
    name: 'Enes',
    surname: 'Baysan',
    salary: 2000
}


let employee2 = {
    name: 'Yusuf',
    surname: 'Baysan',
    salary: 3000
}



let increaseSalary = function (employee) {
    console.log(this)
    return {
        info: `${employee.name}'s salary (${employee.salary}) increased by 250₺ and his new salary is ${employee.salary += 250}`,
        newSalary: employee.salary
    } // bu da bize bir obje döndürüyor
}



console.log(increaseSalary(employee).info) // dönen objenin info property'si

console.log(increaseSalary(employee2).newSalary)