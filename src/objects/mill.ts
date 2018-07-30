import GameObject from "./game-object";

export default class Mill extends GameObject
{
    public workers: number;
    public cycle: number;
    public resourceAmount: number;

    public setAttributes(attributes: any) {
        this.workers = attributes.workers;
        this.cycle = attributes.cycle;
        this.resourceAmount = attributes.resource_amount;
    }
}
