export default abstract class PlayerCharacter {
    public id: number;
    public playerId: number;
    public index: number;
    // @ts-ignore
    private name: string;
    // @ts-ignore
    private gender: string;
    // @ts-ignore
    private role: string;
    // @ts-ignore
    private attributes: any;

    constructor(data: any) {
        this.id = data.id;
        this.playerId = data.player_id;
        this.role = data.role;
        this.attributes = data.attributes;
        this.name = data.name;
        this.gender = data.gender;
        this.setAttributes(data.attributes);
    }

    public setName(name: string) {
        this.name = name;
    }

    public setGender(gender: string) {
        this.gender = gender;
    }

    public setRole(role: string) {
        this.role = role;
    }

    public setAttributes(attributes) {
    }

    public clone(): PlayerCharacter {
        return Object.assign(Object.create(this), this);
    }
}
