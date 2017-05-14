import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMangasComponent } from './list-mangas.component';

describe('ListMangasComponent', () => {
  let component: ListMangasComponent;
  let fixture: ComponentFixture<ListMangasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMangasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMangasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
