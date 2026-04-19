import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css'],
})
export class StudentTableComponent {
  @Input() students: any[] = [];
  @Input() searchText: string = '';
  @Output() deleteStudent = new EventEmitter<number>();

  constructor(private router: Router) {}

  // 🔹 search
  filterStudents() {
    if (!this.searchText) {
      return this.students;
    }
    const lowerSearch = this.searchText.toLowerCase();
    return this.students.filter(
      (student) =>
        student.firstName.toLowerCase().includes(lowerSearch) ||
        student.lastName.toLowerCase().includes(lowerSearch) ||
        student.department.toLowerCase().includes(lowerSearch),
    );
  }

  // 🔹 delete
  onDelete(id: number) {
    this.deleteStudent.emit(id);
  }

  // 🔹 view details
  onView(id: number) {
    this.router.navigate(['/student', id]);
  }
}
