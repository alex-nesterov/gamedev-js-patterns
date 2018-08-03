import GameObject from "./game-object";

export default class ObjectFactory {
    public static create(data: any): GameObject {
        return new (require(`./${data.type}`).default)(data);
    }
}
