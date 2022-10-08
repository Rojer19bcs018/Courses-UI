import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { courses,course } from '../course/course.model';

@Component({
  selector:'app-course-details',
  templateUrl:'./coursedetails.component.html'
})

export class CourseDetails implements OnInit{
    Course:course | undefined;
    constructor(private route:ActivatedRoute){}
      ngOnInit(){
           const routeParams = this.route.snapshot.paramMap;
           const fromRoute = Number(routeParams.get('courseid'));

           this.Course = courses.find(Course => Course.id === fromRoute);
      }
    
}