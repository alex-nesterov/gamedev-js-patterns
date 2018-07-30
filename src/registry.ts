import GameObject from "./objects/game-object";
import ObjectFactory from "./object-factory";

export default class Registry {

    public readonly objects: { [id: string]: GameObject };
    private static instance: Registry;

    public static getInstance(): Registry {
        if (!Registry.instance) {
            throw new Error(`Registry is not initialized`);
        }
        return Registry.instance;
    }

    constructor(data) {
        if (Registry.instance) {
            throw new Error(`Registry is initialized`);
        }
        this.objects = Registry.createModels(ObjectFactory.create, data.objects, "id");
    }

    public static createModels(factory, data: any[], indexKey: string): { [key: string]: any } {
        const models = {};
        data.forEach((attributes) => {
            const model = factory(attributes);
            models[model[indexKey]] = model;
        });
        return models;
    }
    public static create(data): Registry {
        if (Registry.instance) {
            throw new Error(`Registry is initialized`);
        }
        return Registry.instance = new Registry(data);
    }
}