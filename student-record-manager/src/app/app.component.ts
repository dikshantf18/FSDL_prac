import { Component } from '@angular/core';

interface Student {
  name: string;
  rollNo: number;
  grade: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  students: Student[] = [];
  student: Student = { name: '', rollNo: 0, grade: '' };
  isEditMode = false;
  editIndex = -1;

  addStudent() {
    if (this.isEditMode) {
      this.students[this.editIndex] = { ...this.student };
      this.isEditMode = false;
    } else {
      this.students.push({ ...this.student });
    }
    this.student = { name: '', rollNo: 0, grade: '' };
  }

  editStudent(index: number) {
    this.student = { ...this.students[index] };
    this.isEditMode = true;
    this.editIndex = index;
  }
}
