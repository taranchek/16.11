class Student {
	show() {
		console.log(this.name);
        console.log(this.surn);
	}
}
let student = new Student;
student.name = 'kris';
student.surn = 'johnov';
student.show();