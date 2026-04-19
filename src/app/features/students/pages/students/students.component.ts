import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentsService } from 'src/app/core/services/students.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  students$!: Observable<any[]>;
  searchControl = new FormControl('');

  constructor(private studentService: StudentsService) {}

  ngOnInit(): void {
    this.students$ = this.studentService.getStudents();
  }

  // 👇 يستقبل delete من child
  onDeleteStudent(id: number) {
    this.studentService.deleteStudent(id);
  }
}
