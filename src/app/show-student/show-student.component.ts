// src/app/show-student/show-student.component.ts
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service'; // Adjust the import path as necessary
import { Student } from '../models/student.model';  // Adjust the path if needed

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent implements OnInit {
  students: Student[] = [];  // Declare the students array

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();  // Call the method to load students when the component initializes
  }

  loadStudents(): void {
    this.studentService.getStudents().subscribe((data: Student[]) => {
      this.students = data;  // Assign the received data to the students array
    });
  }
  deleteStudent(id: number): void {
    this.studentService.deleteStudent(id).subscribe(() => {
      alert('Student deleted successfully!');
      this.loadStudents(); // Refresh the list
    });
  }
}



// import { Component, OnInit } from '@angular/core';
// import { StudentService } from '../services/student.service';
// import { MatDialog } from '@angular/material/dialog';
// import { AddStudentComponent } from '../add-student/add-student.component';
// import { student } from '../student.model/student.model.component';
// @Component({
//   selector: 'app-show-student',
//   templateUrl: './show-student.component.html',
//   styleUrls: ['./show-student.component.css']
// })
// export class ShowStudentComponent implements OnInit {
//   // Explicitly define 'students' as an array of Student objects
//   students: student[] = [];
  
//   constructor(private studentService: StudentService) {}

//   ngOnInit(): void {
//     this.loadStudents();
//   }

//   loadStudents(): void {
//     this.studentService.getStudents().subscribe(data => {
//       this.students = data;  // TypeScript will now expect 'data' to be of type Student[]
//     });
//   }

//   deleteStudent(id: number): void {
//     this.studentService.deleteStudent(id).subscribe(() => {
//       this.loadStudents();
//     });
//   }

//   openEditDialog(student: any): void {
//     const dialogRef = this.dialog.open(AddStudentComponent, {
//       width: '400px',
//       data: student
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       if (result) {
//         this.studentService.updateStudent(result).subscribe(() => {
//           this.loadStudents();
//         });
//       }
//     });
//   }
// }


// import { Component } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
// import { StudentService } from '../services/student.service';

// @Component({
//   selector: 'app-show-student',
//   templateUrl: './show-student.component.html',
//   styleUrls: ['./show-student.component.css']
// })
// export class ShowStudentComponent {
//   studentData: any = '';
//   isModalOpen = false;
//   selectedStudentId!: number;

//   updateStudentForm = new FormGroup({
//     rollNo: new FormControl({ value: '', disabled: true }),  // Keep rollNo as number and disabled
//     name: new FormControl(''),
//     age: new FormControl(''),
//     email: new FormControl(''),
//     date: new FormControl(''),
//     isMale: new FormControl(false)  // Boolean value for isMale
//   });

//   constructor(private studentService: StudentService) {
//     this.loadStudents();
//   }

//   loadStudents() {
//     this.studentService.getStudents().subscribe((data: any) => {
//       this.studentData = data;
//     });
//   }

//   deleteStudent(id: any) {
//     this.studentService.deleteStudent(id).subscribe(() => {
//       this.loadStudents();
//     });
//   }

//   openUpdateModal(student: any) {
//     this.isModalOpen = true;
//     this.selectedStudentId = student.id;
//     this.updateStudentForm.patchValue({
//       rollNo: student.rollNo,
//       name: student.name,
//       age: student.age,
//       email: student.email,
//       date: student.date,
//       isMale: student.isMale
//     });
//   }

//   closeModal() {
//     this.isModalOpen = false;
//   }

//   updateStudent() {
//     if (this.updateStudentForm.valid) {
//       const updatedData = this.updateStudentForm.value;
//       this.studentService.updateStudent(this.selectedStudentId, updatedData)
//         .subscribe(
//           (response) => {
//             console.log('Student updated successfully:', response);
//             alert('Student updated successfully!');
//             this.isModalOpen = false;
//             this.refreshStudentList();  // Refresh the list after update
//           },
//           (error) => {
//             console.error('Error updating student:', error);
//             alert('Failed to update student. Please try again.');
//           }
//         );
//     } else {
//       alert('Please fill in all required fields correctly.');
//     }
//   }

//   refreshStudentList() {
//     this.studentService.getAllStudents().subscribe(data => {
//       this.studentData = data;
//     });
//   }
// }


// import { Component } from '@angular/core';
// import { StudentService } from '../services/student.service';
// @Component({
//   selector: 'app-show-student',
//   templateUrl: './show-student.component.html',
//   styleUrls: ['./show-student.component.css']
// })
// export class ShowStudentComponent {
//   studentData:any='';
//   constructor(private studentService:StudentService){
//     this.loadStudents();
//   }
//   loadStudents()
//   {
//     this.studentService.getStudents().subscribe((data:any)=>{
//       this.studentData=data;
//       console.log(this.studentData)
//     });
//   }
//   deleteStudent(id:any)
//   {
//     console.log(id);
//     this.studentService.deleteStudent(id).subscribe(() =>{this.loadStudents()});
    
//   }
// }
