import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
