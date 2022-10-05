import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeaderClass } from '../header/header.component';
import { CourseClass } from '../course/course.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { CourseDetails } from '../coursedetails/coursedetails.component';

@NgModule({
  imports: [BrowserModule, FormsModule, 
    RouterModule.forRoot([
      {path:'',component:CourseClass},
      {path:'course/:courseid',component:CourseDetails}
    ])],
  declarations: [AppComponent, HelloComponent, HeaderClass, CourseClass, CourseDetails],
  bootstrap: [AppComponent],
})
export class AppModule {}
