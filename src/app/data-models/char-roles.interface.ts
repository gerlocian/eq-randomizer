abstract class CharRole {
    protected abstract _name: string;

    get name(): string {
        return this._name;
    }
}

class Caster extends CharRole {
    protected _name = 'Caster';
}

class Melee extends CharRole {
    protected _name = 'Melee';
}

class Priest extends CharRole {
    protected _name = 'Priest';
}

class Tank extends CharRole {
    protected _name = 'Tank';
}

export class Roles {
    static readonly Caster = Caster;
    static readonly Melee = Melee;
    static readonly Priest = Priest;
    static readonly Tank = Tank;
}