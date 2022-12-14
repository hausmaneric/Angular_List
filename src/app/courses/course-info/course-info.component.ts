import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../cours';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

  course!: Course;

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.retrieveById(+this.activatedRoute.snapshot.params['id']).subscribe({
      next: course => this.course = course,
      error: err => console.log('Error', err)
    });
  }

  save(): void{
    this.courseService.save(this.course).subscribe({
      next: course => console.log("Saved with sucess", course),
      error: err => console.log("Error", err)
    });
  }
}
