import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeaderClass } from '../header/header.component';
import { CourseClass } from '../course/course.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { CourseDetails } from '../coursedetails/coursedetails.component';
import { CartComponent } from '../cart/cart.component';

@NgModule({
  imports: [BrowserModule, FormsModule, 
    RouterModule.forRoot([
      {path:'',component:CourseClass},
      {path:'course/:courseid',component:CourseDetails},
      { path: 'cart', component: CartComponent },
    ])],
  declarations: [AppComponent, HelloComponent, HeaderClass, CourseClass, CourseDetails,CartComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
