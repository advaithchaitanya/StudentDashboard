import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'studentDashboard';
  students:{name:string; grade : string}[]=[]
  name:string='';
  grade:string='';
  addStudent(){
    if(this.name && this.grade){
      const student = {
        name: this.name,
        grade: this.grade
      };
      console.log('Student added:', student);
      this.name = '';
      this.grade = '';
      this.students.push(student)
    } else {
      alert('Please fill in both fields.');
    }
  }
}
