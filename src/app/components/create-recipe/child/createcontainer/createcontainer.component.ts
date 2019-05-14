import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createcontainer',
  templateUrl: './createcontainer.component.html',
  styleUrls: ['./createcontainer.component.scss']
})
export class CreatecontainerComponent implements OnInit {

  constructor() { }

  postObj: Object = {
    name: String,
    title: String,
    desc: String,
    steps: {
      step_1: "yo",
    }
  }

  ngOnInit() {
  }

  postRecipe() {
    console.log(this.postObj);
  }

}
