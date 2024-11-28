// src/app/app.module.ts
// src/app/app.module.ts
// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  // Import RouterModule
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ShowStudentComponent } from './show-student/show-student.component';
import { FormsModule } from '@angular/forms';

// const routes: Routes = [  // Define routes here
//   { path: '', component: ShowStudentComponent },
//   { path: 'add-student', component: AddStudentComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    ShowStudentComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule// Add RouterModule with routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';  // For ngModel
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { AddStudentComponent } from './add-student/add-student.component';
// import { ShowStudentComponent } from './show-student/show-student.component';
// import { StudentService } from './services/student.service';
// import { HttpClientModule } from '@angular/common/http';
// @NgModule({
//   declarations: [
//     AppComponent,
//     AddStudentComponent,
//     ShowStudentComponent,
    
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule
//   ],
//   providers: [StudentService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
// import { RouterModule , Routes } from '@angular/router';
// import { MatButtonModule } from '@angular/material/button';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatTableModule } from '@angular/material/table';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { AppComponent } from './app.component';
// import { AddStudentComponent } from './add-student/add-student.component';
// import { ShowStudentComponent } from './show-student/show-student.component';
// import { StudentService } from './services/student.service';
// import { EditStudentComponent } from './edit-student/edit-student.component';
// //import { StudentModelComponent } from './student.model/student.model.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     AddStudentComponent,
//     ShowStudentComponent,
//     StudentModelComponent,
//     EditStudentComponent,

//   ],
//   imports: [
//     BrowserModule,
//     HttpClientModule,
//     FormsModule,
//     MatButtonModule,
//     MatDialogModule,
//     MatInputModule,
//     MatFormFieldModule,
//     MatTableModule,
//     BrowserAnimationsModule,
//     RouterModule
//   ],
//   providers: [StudentService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { AddStudentComponent } from './add-student/add-student.component';
// import { ReactiveFormsModule } from '@angular/forms';
// import { ShowStudentComponent } from './show-student/show-student.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// @NgModule({
//   declarations: [
//     AppComponent,
//     AddStudentComponent,
//     ShowStudentComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,HttpClientModule,ReactiveFormsModule, BrowserAnimationsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
