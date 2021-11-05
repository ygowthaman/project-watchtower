import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from 'src/app/components/landing-page/landing-page.component';
import { StoryDashboardComponent } from 'src/app/components/story-dashboard/story-dashboard.component';
import { PeopleComponent } from 'src/app/components/people/people.component';
import { PlacesComponent } from 'src/app/components/places/places.component';
import { ArtifactsComponent } from 'src/app/components/artifacts/artifacts.component';
import { CreaturesComponent } from 'src/app/components/creatures/creatures.component';
import { ScenesComponent } from 'src/app/components/scenes/scenes.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'story-dashboard',
    component: StoryDashboardComponent,
    children: [
      { path: 'people', component: PeopleComponent },
      { path: 'places', component: PlacesComponent },
      { path: 'artifacts', component: ArtifactsComponent },
      { path: 'creatures', component: CreaturesComponent },
      { path: 'scenes', component: ScenesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
