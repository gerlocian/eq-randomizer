import { Roles } from './char-roles.interface';

export abstract class CharClass {
    protected abstract _name: string;
    protected abstract _role: Roles;

    get name(): string {
        return this._name;
    }

    get role(): Roles {
        return this._role;
    }
}

export class Bard extends CharClass {
    protected _name = 'Bard';
    protected _role = new Roles.Melee();
}

export class Cleric extends CharClass {
    protected _name = 'Cleric';
    protected _role = new Roles.Priest();
}

export class Druid extends CharClass {
    protected _name = 'Druid';
    protected _role = new Roles.Priest();
}

export class Enchanter extends CharClass {
    protected _name = 'Enchanter';
    protected _role = new Roles.Caster();
}

export class Magician extends CharClass {
    protected _name = 'Magician';
    protected _role = new Roles.Caster();
}

export class Monk extends CharClass {
    protected _name = 'Monk';
    protected _role = new Roles.Melee();
}

export class Necromancer extends CharClass {
    protected _name = 'Necromancer';
    protected _role = new Roles.Caster();
}

export class Paladin extends CharClass {
    protected _name = 'Paladin';
    protected _role = new Roles.Tank();
}

export class Ranger extends CharClass {
    protected _name = 'Ranger';
    protected _role = new Roles.Melee();
}

export class Rogue extends CharClass {
    protected _name = 'Rogue';
    protected _role = new Roles.Melee();
}

export class ShadowKnight extends CharClass {
    protected _name = 'Shadow Knight';
    protected _role = new Roles.Tank();
}

export class Shaman extends CharClass {
    protected _name = 'Shaman';
    protected _role = new Roles.Priest();
}

export class Warrior extends CharClass {
    protected _name = 'Warrior';
    protected _role = new Roles.Tank();
}

export class Wizard extends CharClass {
    protected _name = 'Wizard';
    protected _role = new Roles.Caster();
}

export class Classes {
    static readonly Bard = Bard;
    static readonly Cleric = Cleric;
    static readonly Druid = Druid;
    static readonly Enchanter = Enchanter;
    static readonly Magician = Magician;
    static readonly Monk = Monk;
    static readonly Necromancer = Necromancer;
    static readonly Paladin = Paladin;
    static readonly Ranger = Ranger;
    static readonly Rogue = Rogue;
    static readonly ShadowKnight = ShadowKnight;
    static readonly Shaman = Shaman;
    static readonly Warrior = Warrior;
    static readonly Wizard = Wizard;
}