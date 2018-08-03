import { expect } from "chai";
import * as path from "path";
import Registry from "../../registry/registry";
Registry.clear();
describe("test singleton", () => {
    const data = require(path.join(__dirname, "/../", "data", "registry.json"));
    const registry = Registry.create(data);
    it("should create registry singletone", () => {
        expect(registry).to.be.instanceOf(Registry);
    });

    it("should have objects data", () => {
        expect(registry).to.have.nested.property("objects[1]");
    });

    it("should not create Registry", () => {
        expect(() => Registry.create(data)).to.throw();
    });

    it("should not create new instance of Registry", () => {
        expect(() => new Registry(data)).to.throw();
    });

    it("should have instance of Registry", () => {
        expect(Registry.getInstance()).to.instanceOf(Registry);
    });

    it("should clear instance", () => {
        Registry.clear();
        expect(() => Registry.getInstance()).to.throw();
    });

});
