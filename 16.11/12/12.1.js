class Employee {
	constructor(name, salary) {
		console.log(name + ' ' + salary);
	}
    show() {
		console.log(this.name);
        console.log(this.salary);
	}
}
new Employee('john', '330');
