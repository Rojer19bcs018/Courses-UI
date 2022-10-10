import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { courses,course } from '../course/course.model';
import { CartService } from '../app/cart.service';

@Component({
  selector:'app-course-details',
  templateUrl:'./coursedetails.component.html'
})

export class CourseDetails implements OnInit{
    Course:course | undefined;
    constructor(
      private route:ActivatedRoute,
      private cartService: CartService){}
      addToCart(Course: course) {
        this.cartService.addToCart(Course);
        window.alert('Your product has been added to the cart!');
      }
      ngOnInit(){
           const routeParams = this.route.snapshot.paramMap;
           const fromRoute = Number(routeParams.get('courseid'));

           this.Course = courses.find(Course => Course.id === fromRoute);
      }
    
}