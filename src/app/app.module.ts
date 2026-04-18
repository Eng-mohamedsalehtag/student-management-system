import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentsComponent } from './features/students/pages/students/students.component';
import { StudentTableComponent } from './features/students/components/student-table/student-table.component';
import { AddStudentComponent } from './features/students/pages/add-student/add-student.component';
import { StudentDetailsComponent } from './features/students/pages/student-details/student-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StudentsComponent,
    StudentTableComponent,
    AddStudentComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
