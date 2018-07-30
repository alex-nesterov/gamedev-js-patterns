import {expect} from "chai";
import ObjectFactory from "../../object-factory";
import Registry from "../../registry";
import * as path from "path";
import Decoration from "../../objects/decoration";

let data = require(path.join(__dirname, '/../', 'data', 'registry.json'));
let registry = Registry.create(data);

describe("test decoration", () => {
    const DECORATION_ID = 4;
    let decorationData = registry.objects[DECORATION_ID];
    let decorationObject = ObjectFactory.create(decorationData) as Decoration;

    it("should create decoration object", () => {
        expect(decorationObject).to.be.instanceOf(Decoration);
    });

    it("should clone decoration object", () => {
        expect(decorationObject.clone()).to.be.instanceOf(Decoration);
    });

});