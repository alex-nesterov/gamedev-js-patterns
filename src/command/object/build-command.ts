import GameObject from "../../registry/objects/game-object";

export default class BuildCommand {
    private object: GameObject;
    private x: number;
    private y: number;

    constructor(object: GameObject, x: number, y: number) {
        this.object = object;
        this.x = x;
        this.y = y;
    }

    execute() {
        this.object.build(this.x, this.y);
        return this.object;
    }
}
