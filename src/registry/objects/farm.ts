import GameObject from "./game-object";

export default class Farm extends GameObject {
    public area: number;
    public seeds: any;
    public cycleTime: number;
    public resourceAmount: number;

    public setAttributes(attributes: any) {
        this.area = attributes.area;
        this.seeds = attributes.seeds;
        this.cycleTime = attributes.cycle_time;
        this.resourceAmount = attributes.resource_amount;
    }
}
