import { Component } from '@angular/core';
import { courses } from './course.model';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
})
export class CourseClass {
  courses = courses
}

