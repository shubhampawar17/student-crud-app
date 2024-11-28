// import { Component } from '@angular/core';
// import { StudentService } from './services/student.service';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'student-app';
//   studentData:any='';
//   constructor(private studentservice:StudentService){
//     studentservice.getStudents().subscribe((data)=>{
//       this.studentData=data;
//       console.log(this.studentData)
//     });
//   }
  
// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {}

