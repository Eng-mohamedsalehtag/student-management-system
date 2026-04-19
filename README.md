# Student Management System

A comprehensive Angular-based web application for managing student information in educational institutions.

## Features

### 🎓 Student Management

- **View Students**: Display all students in a responsive table format
- **Add New Students**: Complete form with validation for adding new student records
- **Student Details**: View detailed information for individual students
- **Delete Students**: Remove student records with confirmation

### 🔍 Search Functionality

- Real-time search across student names, emails, and departments
- Instant filtering of the student list

### 📱 Responsive Design

- Bootstrap-based responsive UI
- Mobile-friendly interface
- FontAwesome icons for better UX

## Technologies Used

- **Frontend Framework**: Angular 16
- **UI Library**: Bootstrap 5
- **Icons**: FontAwesome
- **Forms**: Angular Reactive Forms
- **State Management**: RxJS BehaviorSubject
- **Styling**: CSS with Bootstrap components

## Project Structure

```
src/
├── app/
│   ├── core/
│   │   └── services/
│   │       └── students.service.ts    # Student data management
│   ├── features/
│   │   └── students/
│   │       ├── components/
│   │       │   └── student-table/     # Reusable student table component
│   │       └── pages/
│   │           ├── add-student/        # Add new student form
│   │           ├── student-details/    # Student details view
│   │           └── students/           # Students list page
│   ├── pages/
│   │   └── home/                      # Home page
│   └── shared/
│       └── components/
│           └── navbar/                # Navigation component
```

## Student Data Model

Each student record contains:

- Personal Information: First Name, Last Name, Age, Gender
- Contact Details: Email, Phone, Address, City, Country
- Academic Info: Department, Level, GPA, Enrollment Date
- Status: Active/Inactive flag

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Angular CLI

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Eng-mohamedsalehtag/student-management-system.git
cd student-management-system
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

### Build for Production

```bash
ng build --prod
```

The build artifacts will be stored in the `dist/` directory.

## Usage

1. **Home Page**: Welcome page with navigation
2. **Students List**: View all students with search functionality
3. **Add Student**: Fill out the form to add new students
4. **Student Details**: Click "View" on any student to see full details
5. **Delete Student**: Click "Delete" to remove a student record

## Development

### Running Tests

```bash
ng test
```

### Code Scaffolding

```bash
ng generate component component-name
ng generate service service-name
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact the development team.
