import { expect } from "chai";
import * as path from "path";
import Farm from "../../registry/objects/farm";
import Mill from "../../registry/objects/mill";
import ObjectFactory from "../../registry/objects/object-factory";
import Storehouse from "../../registry/objects/storehouse";
import Registry from "../../registry/registry";

Registry.clear();
const data = require(path.join(__dirname, "/../", "data", "registry.json"));
const registry = Registry.create(data);

describe("test farm", () => {
    const FARM_ID = 1;
    const farmData = registry.objects[FARM_ID];
    const farmObject = ObjectFactory.create(farmData) as Farm;

    it("should create farm object", () => {
        expect(farmObject).to.be.instanceOf(Farm);
    });

    it("should move farm", () => {
        farmObject.move(2, 2);
        expect(farmObject).to.have.property("x", 2);
    });
});

describe("test mill", () => {
    const MILL_ID = 2;
    const millData = registry.objects[MILL_ID];
    const millObject = ObjectFactory.create(millData) as Mill;

    it("should create mill object", () => {
        expect(millObject).to.be.instanceOf(Mill);
    });

    it("should not move mill object", () => {
        expect(() => millObject.move(2, 2)).to.throw(Error);
    });
});

describe("test storehouse", () => {
    const STOREHOUSE_ID = 3;
    const storehouseData = registry.objects[STOREHOUSE_ID];
    const storehouseObject = ObjectFactory.create(storehouseData) as Storehouse;

    it("should create storehouse object", () => {
        expect(storehouseObject).to.be.instanceOf(Storehouse);
    });

    it("should not be removable storehouse", () => {
        expect(storehouseObject.isRemovable()).to.be.false;
    });

    it("should import resources to storehouse", () => {
        storehouseObject.import(10);
        expect(storehouseObject).to.have.property("amount", 60);
    });

    it("should not import resources to storehouse", () => {
        expect(() => storehouseObject.import(50)).to.throw(Error);
    });
});
