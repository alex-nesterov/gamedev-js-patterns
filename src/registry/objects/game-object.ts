export default abstract class GameObject {
    public id: number;
    public x: number = 0;
    public y: number = 0;
    private movable: boolean;
    private removable: boolean;
    // @ts-ignore
    private readonly type: string;
    // @ts-ignore
    private attributes: any;

    constructor(data: any) {
        this.id = data.id;
        this.type = data.type;
        this.attributes = data.attributes;
        this.movable = !!data.movable;
        this.removable = !!data.removable;
        this.setAttributes(data.attributes);
    }

    public move(x: number, y: number) {
        if (!this.isMovable()) {
            throw new Error("this object not movable");
        }
        this.x = x;
        this.y = y;
    }

    public build(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public remove() {
        if (!this.isRemovable()) {
            throw new Error("this object not removable");
        }
    }

    public setAttributes(attributes) {
    }

    public isMovable(): boolean {
        return this.movable;
    }

    public isRemovable(): boolean {
        return this.removable;
    }

    public clone(): GameObject {
        return Object.assign(Object.create(this), this);
    }

}
