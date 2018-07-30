import {expect} from "chai";
import Registry from "../../registry";
import * as path from "path";

let data = require(path.join(__dirname, '/../', 'data', 'registry.json'));
let registry = Registry.create(data);

describe("test singleton", () => {
    it("should create registry singletone", () => {
        expect(registry).to.be.instanceOf(Registry);
    });

    it("should have objects data", () => {
        expect(registry).to.have.nested.property('objects[1]');
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
});