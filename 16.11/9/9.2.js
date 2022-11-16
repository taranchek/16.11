class Student {
	show() {
		console.log(this.name);
        console.log(this.surn);
	}
    cape(){
        console.log(this.name[0].toUpperCase()+'.'+this.surn[0].toUpperCase()+'.');
        this.show();
    }
}
let student = new Student;
student.name = 'kris';
student.surn = 'johnov';
student.cape();