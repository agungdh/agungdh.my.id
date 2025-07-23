import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tehe } from './tehe';

describe('Tehe', () => {
  let component: Tehe;
  let fixture: ComponentFixture<Tehe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tehe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tehe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
