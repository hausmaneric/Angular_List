import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CourseInfoComponent } from "./course-info/course-info.component";
import { CourseListComponent } from "./course-list/course-list.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { StarModule } from "../shared/component/start/star.module";
import { appPipeModule } from "../shared/pipe/app-pipe.module";


@NgModule({
  declarations: [
    CourseInfoComponent,
    CourseListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StarModule,
    appPipeModule,
    RouterModule.forChild([
      {
        path:'courses',
        component: CourseListComponent,
      },
      {
        path:'course/info/:id',
        component: CourseInfoComponent
      },
    ])
  ]
})
export class CourseModule{

}
