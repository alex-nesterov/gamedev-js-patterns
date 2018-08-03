import Hero from "./hero";

export default class HeroBuilder implements HeroBuilderInterface {
    private hero: any;

    constructor() {
        this.hero = { attributes: {} };
    }

    public setAccessories(accessories: string[]): HeroBuilder {
        this.hero.attributes.accessories = accessories;
        return this;
    }

    public setClothes(clothes: string[]): HeroBuilder {
        this.hero.attributes.clothes = clothes;
        return this;
    }

    public setEyes(eyes: string): HeroBuilder {
        this.hero.attributes.eyes = eyes;
        return this;
    }

    public setHaircut(heircut: string): HeroBuilder {
        this.hero.attributes.haircut = heircut;
        return this;
    }

    public setName(name: string): HeroBuilder {
        this.hero.name = name;
        return this;
    }

    public setGender(gender: string): HeroBuilder {
        this.hero.gender = gender;
        return this;
    }

    public build(): Hero {
        this.hero.role = "hero";
        return new Hero(this.hero);
    }
}

interface HeroBuilderInterface {
    setHaircut(haircut: string): HeroBuilder;
    setClothes(clothes: string[]): HeroBuilder;
    setAccessories(accessories: string[]): HeroBuilder;
    setEyes(eyes: string): HeroBuilder;
    setName(name: string): HeroBuilder;
    setGender(gender: string): HeroBuilder;
    build(): Hero;
}
