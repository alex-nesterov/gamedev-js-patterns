import PlayerCharacter from "./player-character";

export default class Worker extends PlayerCharacter {

    public salary: number;

    public setAttributes(attributes: any) {
        this.salary = attributes.salary;
    }
}
