import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { NgForm } from '@angular/forms';
import { AfterContentChecked, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  grades = ['Good', 'Bad', 'Excellent'];

  model: Student = new Student(11, 'Rajesh', this.grades[2], 'Music');

  submitted = false;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngAfterContentChecked(): void {
    this.cdRef.detectChanges()
  }

  ngOnInit(): void {
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

  newStudent() {
    this.model = new Student(42, "", "");
  }

  onSubmit(f: any) {
    this.submitted = true;
    console.log(this.submitted);
    console.log(JSON.stringify(f));
    console.log(JSON.stringify(f.name));
    console.log(JSON.stringify(f.optional));
    console.log(JSON.stringify(f.grade as string));

  }

}
