import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DummyComponent } from './dummy.component';
import { FormsModule } from '@angular/forms';

describe('DummyComponent', () => {
  let fixture: ComponentFixture<DummyComponent>;

  beforeEach(() => {
    //1. Create a fake NgModule 
    TestBed.configureTestingModule({
      declarations: [
        DummyComponent
      ],
      imports: [ FormsModule ]
      //schemas: [NO_ERRORS_SCHEMA]
    });

    //2. Get a fixture of the component
    fixture = TestBed.createComponent(DummyComponent);
  });

  it("message data member should initially contain hello", () => {
      //access the component class
      expect(fixture.componentInstance.message).toBe("hello");
  });

  it("should display hello in the span element inside the template", () => {
    let element = fixture.debugElement.query(By.css("span"));

    //force the change detection mechanism to trigger
    fixture.detectChanges();

    expect(element.nativeElement.textContent).toBe("hello");
  });

  // it("should the textbox value in the span element", () => 
  // {
  //   let element = fixture.debugElement.query(By.css('input'));
  //   element.nativeElement.value = "WELCOME";
  //   //element.nativeElement.dispatchEvent(new Event('input'));
        
  //   fixture.detectChanges();
  //   expect(fixture.debugElement.query(By.css('span')).nativeElement.textContent).toBe("WELCOME");
    
  // });
});
