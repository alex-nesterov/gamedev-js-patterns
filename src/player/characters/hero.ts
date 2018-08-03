import PlayerCharacter from "./player-character";

export default class Hero extends PlayerCharacter {

    public eyes: string;
    public haircut: string;
    public clothes: [string];
    public accessories: [string];

    public setAttributes(attributes: any) {
        this.eyes = attributes.eyes;
        this.haircut = attributes.haircut;
        this.clothes = attributes.clothes;
        this.accessories = attributes.accessories;
    }
}
