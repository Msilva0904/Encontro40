import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirmotoristaComponent } from './incluirmotorista.component';

describe('IncluirmotoristaComponent', () => {
  let component: IncluirmotoristaComponent;
  let fixture: ComponentFixture<IncluirmotoristaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluirmotoristaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirmotoristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
