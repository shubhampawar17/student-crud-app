// src/app/services/student.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://your-api-url/students';  // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {  // Return an Observable of Student array
    return this.http.get<Student[]>(this.apiUrl);
  }
  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student);
  }

  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}


//src/app/student.service.ts
// import { Injectable } from '@angular/core';
// import { Student } from '../models/student.model';
// import { Observable } from 'rxjs';
// @Injectable({
//   providedIn: 'root'
// })
// export class StudentService {
//   private students: Student[] = [];

//   constructor() { }

//   // Create a new student
//   addStudent(student: Student): void {
//     this.students.push(student);
//   }

//   // Get all students
//   getStudents(): Student[] {
//     return this.students;
//   }

//   // Get student by id
//   getStudentById(id: number): Student | undefined {
//     return this.students.find(s => s.id === id);
//   }

//   // Update student details
//   updateStudent(updatedStudent: Student): void {
//     const index = this.students.findIndex(s => s.id === updatedStudent.id);
//     if (index !== -1) {
//       this.students[index] = updatedStudent;
//     }
//   }

//   // Delete student by id
//   deleteStudent(id: number): void {
//     const index = this.students.findIndex(s => s.id === id);
//     if (index !== -1) {
//       this.students.splice(index, 1);
//     }
//   }
// }


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class StudentService {
//   private apiUrl = 'http://your-api-url/students'; // Replace with your actual API URL

//   constructor(private http: HttpClient) {}

//   getStudents(): Observable<any[]> {
//     return this.http.get<any[]>(this.apiUrl);
//   }

//   addStudent(student: any): Observable<any> {
//     return this.http.post(this.apiUrl, student);
//   }

//   updateStudent(student: any): Observable<any> {
//     return this.http.put(`${this.apiUrl}/${student.id}`, student);
//   }

//   deleteStudent(id: number): Observable<any> {
//     return this.http.delete(`${this.apiUrl}/${id}`);
//   }
// }


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http'
// import { Observable } from 'rxjs';
// @Injectable({
//   providedIn: 'root'
// })
// export class StudentService {
//   url='http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students';
//   constructor(private http:HttpClient) {}
//   getStudents()
//   {
//     return this.http.get(this.url);
//    }
//    addStudent(newStudentData:any)
//    {
//     return this.http.post(this.url,newStudentData);
//    }
//    deleteStudent(id:any)
//    {
//       return this.http.delete(this.url+"/"+id);
//    }
//    updateStudent(id: number, studentData: any): Observable<any> {
//     return this.http.put(`${this.url}/${id}`, studentData);  // Ensure endpoint is correct
//   }

//   getAllStudents(): Observable<any> {
//     return this.http.get(this.url);
//   }
  
// }
