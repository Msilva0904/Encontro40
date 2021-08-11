import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarmotoristaComponent } from './listarmotorista.component';

describe('ListarmotoristaComponent', () => {
  let component: ListarmotoristaComponent;
  let fixture: ComponentFixture<ListarmotoristaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarmotoristaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarmotoristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
