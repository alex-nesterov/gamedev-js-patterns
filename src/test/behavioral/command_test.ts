import { expect } from "chai";
import * as path from "path";
import Decoration from "../../registry/objects/decoration";
import ObjectFactory from "../../registry/objects/object-factory";
import Registry from "../../registry/registry";
import BuildCommand from "../../command/object/build-command";
Registry.clear();
describe("test command", () => {
    const data = require(path.join(__dirname, "/../", "data", "registry.json"));
    const registry = Registry.create(data);
    const DECORATION_ID = 4;
    const decorationData = registry.objects[DECORATION_ID];
    const decorationObject = ObjectFactory.create(decorationData) as Decoration;

    it("should create decoration object", () => {
        expect(decorationObject).to.be.instanceOf(Decoration);
    });

    it("should build decoration object", () => {
        expect(new BuildCommand(decorationObject,1,1).execute()).to.have.property('x',1);
    });

});
