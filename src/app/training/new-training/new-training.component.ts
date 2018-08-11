import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  trainingTypes = [
    {id: 0, name: 'Crunches'},
    {id: 1, name: 'Touch Toes'},
    {id: 2, name: 'Side Lunges'},
    {id: 3, name: 'Burpees'}
  ];

  @Output() trainingStart = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  onStartTraining() {
      this.trainingStart.emit()
  }
}
