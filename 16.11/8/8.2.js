class Student {
	show() {
		console.log(this.name);
        console.log(this.surn);
	}
    cape(){
        this.name = this.name[0].toUpperCase() + this.name.slice(1);
        this.surn = this.surn[0].toUpperCase() + this.surn.slice(1);
        this.show();
    }
}
let student = new Student;
student.name = 'john';
student.surn = 'johnov';
student.cape();