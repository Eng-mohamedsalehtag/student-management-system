import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/core/services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent {
  studentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private studentsService: StudentsService,
    private router: Router,
  ) {
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(16), Validators.max(100)]],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      department: ['', Validators.required],
      level: ['', [Validators.required, Validators.min(1), Validators.max(4)]],
      GPA: ['', [Validators.required, Validators.min(0), Validators.max(4)]],
      enrollmentDate: ['', Validators.required],
      isActive: [true],
    });
  }

  onSubmit() {
    if (this.studentForm.valid) {
      this.studentsService.addStudent(this.studentForm.value);
      this.router.navigate(['/students']);
    }
  }
}
