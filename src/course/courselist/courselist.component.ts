import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
})
export class CourseClass implements OnInit {
  courses: Course[] = [new Course('Science', 'Prabhu', 'Yes')];
  constructor() {}
  ngOnInit() {}
}
