import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private studentsSubject = new BehaviorSubject<any[]>([
    {
      id: 1,
      firstName: 'Ali',
      lastName: 'Hassan',
      age: 21,
      gender: 'Male',
      email: 'ali.hassan@email.com',
      phone: '01000000000',
      address: '12 Main Street',
      city: 'Cairo',
      country: 'Egypt',
      department: 'Computer Science',
      level: 3,
      GPA: 3.2,
      enrollmentDate: '2023-09-01',
      isActive: true,
    },
    {
      id: 2,
      firstName: 'Sara',
      lastName: 'Ahmed',
      age: 22,
      gender: 'Female',
      email: 'sara.ahmed@email.com',
      phone: '01000000001',
      address: '34 Main Street',
      city: 'Cairo',
      country: 'Egypt',
      department: 'Information Systems',
      level: 3,
      GPA: 3.5,
      enrollmentDate: '2023-09-02',
      isActive: true,
    },
    {
      id: 3,
      firstName: 'Omar',
      lastName: 'Youssef',
      age: 23,
      gender: 'Male',
      email: 'omar.youssef@email.com',
      phone: '01000000002',
      address: '56 Main Street',
      city: 'Cairo',
      country: 'Egypt',
      department: 'Mechanical Engineering',
      level: 3,
      GPA: 3.8,
      enrollmentDate: '2023-09-03',
      isActive: true,
    },
    {
      id: 4,
      firstName: 'Ahmed',
      lastName: 'Mohamed',
      age: 24,
      gender: 'Male',
      email: 'ahmed.mohamed@email.com',
      phone: '01000000003',
      address: '78 Main Street',
      city: 'Cairo',
      country: 'Egypt',
      department: 'Electrical Engineering',
      level: 3,
      GPA: 3.9,
      enrollmentDate: '2023-09-04',
      isActive: true,
    },
  ]);
  students$: Observable<any[]> = this.studentsSubject.asObservable();

  constructor() {}
  //get all students
  getStudents(): Observable<any[]> {
    return this.students$;
  }
  // Add a new student
  addStudent(student: any) {
    const currentStudents = this.studentsSubject.value;
    student.id = Date.now();
    this.studentsSubject.next([...currentStudents, student]);
  }
  // Delete Student
  deleteStudent(id: number) {
    const updated = this.studentsSubject.value.filter((s) => s.id !== id);
    this.studentsSubject.next(updated);
  }

  // Get Student By Id
  getStudentById(id: number): Observable<any | undefined> {
    return this.students$.pipe(
      map((students) => students.find((s) => s.id === id)),
    );
  }
}
