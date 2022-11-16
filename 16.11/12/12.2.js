class Employee {
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}
	
	show() {
		return this.name;
	}
    
}
let employee = new Employee('john', 330);

console.log(employee.show());

