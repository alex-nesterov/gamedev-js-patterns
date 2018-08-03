import { expect } from "chai";
import Hero from "../../player/characters/hero";
import HeroBuilder from "../../player/characters/hero-builder";

describe("test builder", () => {
    it("should create decoration object", () => {
        const hero = new HeroBuilder()
            .setName("Alex")
            .setGender("male")
            .setHaircut("buzz cut")
            .setEyes("hazel")
            .setClothes(["jeans", "t-short"])
            .setAccessories(["watch"])
            .build();
        expect(hero).to.be.instanceOf(Hero);
        expect(hero).to.have.property("name", "Alex");
    });
});
