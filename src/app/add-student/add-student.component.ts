// src/app/add-student/add-student.component.ts
import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from '../models/student.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  student: Student = { id: 0, name: '', age: 0, grade: '' };

  constructor(private studentService: StudentService, private router: Router) {}

  addStudent(): void {
    this.studentService.addStudent(this.student).subscribe(() => {
      alert('Student added successfully!');
      this.student = { id: 0, name: '', age: 0, grade: '' };  // Reset form
    });
}
}


// import { Component } from '@angular/core';
// import { StudentService } from '../services/student.service';
// import { MatDialogRef } from '@angular/material/dialog';

// @Component({
//   selector: 'app-add-student',
//   templateUrl: './add-student.component.html',
//   styleUrls: ['./add-student.component.css']
// })
// export class AddStudentComponent {
//   student = { name: '', age: 0, grade: '' };

//   constructor(private studentService: StudentService, public dialogRef: MatDialogRef<AddStudentComponent>) {}

//   addStudent(): void {
//     this.studentService.addStudent(this.student).subscribe(() => {
//       this.dialogRef.close();
//     });
//   }
// }


// import { Component } from '@angular/core';
// import { FormsModule,FormControl, FormGroup } from '@angular/forms';
// import { StudentService } from '../services/student.service';
// @Component({
//   selector: 'app-add-student',
//   templateUrl: './add-student.component.html',
//   styleUrls: ['./add-student.component.css']
// })
// export class AddStudentComponent {
//   newStudentForm=new FormGroup({
//     rollNo:new FormControl(),
//     name:new FormControl(),
//     age:new FormControl(),
//     email:new FormControl(),
//     date:new FormControl(),
//     isMale:new FormControl()
// });
// constructor(private studentService:StudentService){}
// addNewStudent() {
//   this.studentService.addStudent(this.newStudentForm.value).subscribe((data) => {
//     console.log('New student added:', data);
//     alert('Student added successfully!');
//     this.newStudentForm.reset(); // Reset form after submission
//   });
// }
// }