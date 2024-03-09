import { Component } from '@angular/core';
import { Question, QuestionService } from '../question.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  
  message:string="";

  question:Question=new Question(0,'','','','','','','');

  constructor(private questionService : QuestionService,private router:Router)
  {
   
  }

  addQuestion()
  {
      this.questionService.addQuestion(this.question).subscribe(answer=>this.message="question added");
  }

  viewQuestion()
  {
    this.questionService.viewQuestion(this.question.qno,this.question.subject).subscribe(question=>this.question=question);
  }

  updateQuestion()
  {
    this.questionService.updateQuestion(this.question).subscribe(answer=>this.message="question updated");
  }

  deleteQuestion()
  {
    this.questionService.deleteQuestion(this.question.qno,this.question.subject).subscribe(answer=>this.message="question deleted");
  } 


  
}
