import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeaderClass } from '../header/header.component';
import { CourseClass } from '../course/course.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, HeaderClass, CourseClass],
  bootstrap: [AppComponent],
})
export class AppModule {}
