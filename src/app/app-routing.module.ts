// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { ShowStudentComponent } from './show-student/show-student.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  { path: 'add-student', component: AddStudentComponent },
  { path: 'show-student', component: ShowStudentComponent },
  { path: '', redirectTo: '/show-student', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AddStudentComponent } from './add-student/add-student.component';
// import { ShowStudentComponent } from './show-student/show-student.component';
// const routes: Routes = [
//   {
//     path:"addStudent",
//     component:AddStudentComponent
//   },
//   {
//     path:"showStudent",
//     component:ShowStudentComponent
//   },
//   // { path: '', redirectTo: '/showStudent', pathMatch: 'full' },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
