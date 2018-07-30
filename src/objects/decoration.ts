import GameObject from "./game-object";

export default class Decoration extends GameObject {
    public subtype: string;

    public setAttributes(attributes: any) {
        this.subtype = attributes.subtype;
    }
}
