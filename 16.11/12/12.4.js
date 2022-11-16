class Employee {
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}

    show() {
        this.salary = this.salary + (this.salary/10);
        return this.salary;
    }
}
let employee = new Employee('john', 330);
console.log(employee.show());