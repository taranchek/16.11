class Employee {
	#name;
    #age;
    #salary;
	constructor(name,age,salary) {
		this.#name = name;
        this.#age = age;
        this.#salary = salary;
	}	
    show() {
		return this.#name + ' ' + this.#salary + ' ' +  this.#age;
	}
	
}
let employee = new Employee('john', 20, 330);
console.log(employee.show());

