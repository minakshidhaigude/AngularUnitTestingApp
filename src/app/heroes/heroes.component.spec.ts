import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component";

describe('HeroesComponent', () => {
    describe('delete() method', () => {
        let component: HeroesComponent;
        let mockHeroService;
        let HEROES;

        beforeEach(() => {
            mockHeroService = jasmine.createSpyObj(['deleteHero']);
            
            //specify the return value of the mock method
            mockHeroService.deleteHero.and.returnValue(of());

            component = new HeroesComponent(mockHeroService);

            //fake data
            HEROES = [
                {id:1, name: 'SpiderDude', strength: 8},
                {id:2, name: 'Wonderful Woman', strength: 24},
                {id:3, name: 'SuperDude', strength: 55}
            ];
        });
        afterEach(() => {
            component = null;
        });

        it("should remove the hero object which is passed to it from the local array", () => {
            component.heroes = HEROES;
            component.delete(HEROES[2]);
            expect(component.heroes.length).toBe(2);
        });

        it("should call deleteHero() method of the service", () => {
            component.heroes = HEROES;
            component.delete(HEROES[2]);

            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
        });
    });
});