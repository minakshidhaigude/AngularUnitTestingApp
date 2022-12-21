import { NO_ERRORS_SCHEMA, Pipe } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { of } from "rxjs";
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { HeroService } from "../hero.service";
import { DashboardComponent } from "./dashboard.component";

describe("DashboardComponent", () => {
    let fixture: ComponentFixture<DashboardComponent>;
    let mockHeroService;
    let HEROES;

    @Pipe({
        name: 'strength'
    })
    class StrengthPipeStub
    {
        transform(value: any): any
        {

        }
    }

    beforeEach(() => {
        mockHeroService = jasmine.createSpyObj(['getHeroes']);
        
        TestBed.configureTestingModule({
            declarations: [DashboardComponent, HeroSearchComponent, StrengthPipeStub],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [{provide: HeroService, useValue: mockHeroService }]
        });

        HEROES = [
            {id:1, name: 'SpiderDude', strength: 8}
        ];
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture = TestBed.createComponent(DashboardComponent);
        
    });

    it("should contain a hero search component", () => {
        fixture.detectChanges();

        let element = fixture.debugElement.query(By.directive(HeroSearchComponent));
        //console.log(element.componentInstance);
        expect(element.componentInstance).toEqual(jasmine.any(HeroSearchComponent));
        
    });

});