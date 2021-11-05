import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtifactsComponent } from './artifacts.component';

describe('ObjectsComponent', () => {
  let component: ArtifactsComponent;
  let fixture: ComponentFixture<ArtifactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtifactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtifactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});