import GameObject from "./game-object";

export default class Storehouse extends GameObject {
    public capacity: number;
    public amount: number;

    public setAttributes(attributes: any) {
        this.capacity = attributes.capacity;
        this.amount = attributes.amount;
    }

    public isMovable() {
        if (this.amount) {
            return false;
        }
        return super.isMovable();
    }

    public isRemovable() {
        if (this.amount) {
            return false;
        }
        return super.isRemovable();
    }

    public import(amount: number) {
        if (!this.isEnoughFreeSpace(amount)) {
            throw new Error("Not enough free space");
        }
        this.amount += amount;
    }

    public isEnoughFreeSpace(amount: number): boolean {
        return this.capacity > this.amount + amount;
    }
}
