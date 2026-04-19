import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css'],
})
export class StudentTableComponent {
  @Input() students: any[] = [];

  @Output() deleteStudent = new EventEmitter<number>();

  constructor(private router: Router) {}

  // 🔹 delete
  onDelete(id: number) {
    this.deleteStudent.emit(id);
  }

  // 🔹 view details
  onView(id: number) {
    this.router.navigate(['/student', id]);
  }
}
