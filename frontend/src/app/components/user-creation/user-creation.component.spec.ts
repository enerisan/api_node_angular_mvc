import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreationComponent } from './user-creation.component';

describe('UserCreationComponent', () => {
  let component: UserCreationComponent;
  let fixture: ComponentFixture<UserCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
