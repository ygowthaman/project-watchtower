import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryDashboardComponent } from '../components/story-dashboard/story-dashboard.component';
import { AngularMaterialModule } from 'src/app/modules/angular-material.module';
import { AppRoutingModule } from '../app-routing.module';
import { PeopleComponent } from '../components/people/people.component';
import { PlacesComponent } from '../components/places/places.component';
import { ArtifactsComponent } from '../components/artifacts/artifacts.component';
import { CreaturesComponent } from '../components/creatures/creatures.component';
import { ScenesComponent } from '../components/scenes/scenes.component';
import { StoryService } from '../services/story.service';

@NgModule({
  declarations: [
    StoryDashboardComponent,
    PeopleComponent,
    PlacesComponent,
    ArtifactsComponent,
    CreaturesComponent,
    ScenesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AngularMaterialModule
  ],
  exports: [],
  providers: [
    StoryService
  ]
})
export class StoryModule { }