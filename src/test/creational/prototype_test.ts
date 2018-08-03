import { expect } from "chai";
import * as path from "path";
import Decoration from "../../registry/objects/decoration";
import ObjectFactory from "../../registry/objects/object-factory";
import Registry from "../../registry/registry";
Registry.clear();
describe("test decoration", () => {
    const data = require(path.join(__dirname, "/../", "data", "registry.json"));
    const registry = Registry.create(data);
    const DECORATION_ID = 4;
    const decorationData = registry.objects[DECORATION_ID];
    const decorationObject = ObjectFactory.create(decorationData) as Decoration;

    it("should create decoration object", () => {
        expect(decorationObject).to.be.instanceOf(Decoration);
    });

    it("should clone decoration object", () => {
        expect(decorationObject.clone()).to.be.instanceOf(Decoration);
    });

});
