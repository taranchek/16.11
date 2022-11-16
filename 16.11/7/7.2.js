class Employee {
	show() {
		console.log(this.name);
        console.log(this.salary);
	}
}
let employee = new Employee;
employee.name = 'john';
employee.show(); 
