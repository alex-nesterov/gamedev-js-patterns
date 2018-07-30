import {expect} from "chai";
import Farm from "../../objects/farm";
import Mill from "../../objects/mill";
import Storehouse from "../../objects/storehouse";
import ObjectFactory from "../../object-factory";
import Registry from "../../registry";
import * as path from "path";

let data = require(path.join(__dirname, '/../', 'data', 'registry.json'));
let registry = Registry.create(data);

describe("test farm", () => {
    const FARM_ID = 1;
    let farmData = registry.objects[FARM_ID];
    let farmObject = ObjectFactory.create(farmData) as Farm;

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
    let millData = registry.objects[MILL_ID];
    let millObject = ObjectFactory.create(millData) as Mill;


    it("should create mill object", () => {
        expect(millObject).to.be.instanceOf(Mill);
    });

    it("should not move mill object", () => {
        expect(() => millObject.move(2, 2)).to.throw(Error);
    });
});

describe("test storehouse", () => {
    const STOREHOUSE_ID = 3;
    let storehouseData = registry.objects[STOREHOUSE_ID];
    let storehouseObject = ObjectFactory.create(storehouseData) as Storehouse;

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
