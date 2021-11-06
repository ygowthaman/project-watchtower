import { Component, OnInit } from '@angular/core';
import { IStory, Story } from 'src/app/models/story.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  story: Story;

  constructor() { }

  ngOnInit(): void {
    this.story = new Story();
  }

  newStory() {
    console.log(this.story);
  }
}
