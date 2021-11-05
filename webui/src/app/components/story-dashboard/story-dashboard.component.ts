import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core/common-behaviors/color';

@Component({
  selector: 'app-story-dashboard',
  templateUrl: './story-dashboard.component.html',
  styleUrls: ['./story-dashboard.component.scss']
})
export class StoryDashboardComponent implements OnInit {

  constructor() { }

  links = [
    { displayText: 'People', route: 'people'},
    { displayText: 'Places', route: 'places'},
    { displayText: 'Artifacts', route: 'artifacts'},
    { displayText: 'Creatures', route: 'creatures'},
    { displayText: 'Scenes', route: 'scenes'},
  ];
  activeLink = this.links[0].displayText;
  background: ThemePalette = undefined;

  ngOnInit(): void {
  }

}
