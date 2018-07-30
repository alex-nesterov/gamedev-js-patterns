import GameObject from "./objects/game-object";

export default class ObjectFactory {
    public static create(data: any): GameObject {
        return new (require(`./objects/${data.type}`).default)(data);
    }
}