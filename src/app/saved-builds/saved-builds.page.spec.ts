import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SavedBuildsPage } from './saved-builds.page';

describe('SavedBuildsPage', () => {
  let component: SavedBuildsPage;
  let fixture: ComponentFixture<SavedBuildsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedBuildsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
