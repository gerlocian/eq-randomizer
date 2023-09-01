import { Classes } from './char-classes.interface';

export enum Alignment {
    Evil = 'Evil',
    Good = 'Good',
    Neutral = 'Neutral',
}

abstract class CharRace {
    protected abstract _alignment: Alignment;
    protected abstract _classes: Classes[];
    protected abstract _name: string;

    get alignment(): Alignment {
        return this._alignment;
    }

    get classes(): Classes[] {
        return this.classes;
    }

    get name(): string {
        return this._name;
    }
}

class Barbarian extends CharRace {
    protected _alignment = Alignment.Good;
    protected _name = 'Barbarian'; 
    protected _classes = [
        new Classes.Rogue(),
        new Classes.Shaman(),
        new Classes.Warrior(),
    ];
}

class DarkElf extends CharRace {
    protected _alignment = Alignment.Evil;
    protected _name = 'Dark Elf';
    protected _classes = [
        new Classes.Cleric(),
        new Classes.Enchanter(),
        new Classes.Magician(),
        new Classes.Necromancer(),
        new Classes.Rogue(),
        new Classes.ShadowKnight(),
        new Classes.Warrior(),
        new Classes.Wizard(),
    ];
}

class Dwarf extends CharRace {
    protected _alignment = Alignment.Good;
    protected _name = 'Dwarf';
    protected _classes = [
        new Classes.Cleric(),
        new Classes.Paladin(),
        new Classes.Rogue(),
        new Classes.Warrior(),
    ];
}

class Erudite extends CharRace {
    protected _alignment = Alignment.Neutral;
    protected _name = 'Erudite';
    protected _classes = [
        new Classes.Cleric(),
        new Classes.Enchanter(),
        new Classes.Magician(),
        new Classes.Necromancer(),
        new Classes.Paladin(),
        new Classes.ShadowKnight(),
        new Classes.Wizard(),
    ];
}

class Gnome extends CharRace {
    protected _alignment = Alignment.Neutral;
    protected _name = 'Gnome';
    protected _classes = [
        new Classes.Cleric(),
        new Classes.Enchanter(),
        new Classes.Magician(),
        new Classes.Necromancer(),
        new Classes.Rogue(),
        new Classes.Warrior(),
        new Classes.Wizard(),
    ];
}

class HalfElf extends CharRace {
    protected _alignment = Alignment.Neutral;
    protected _name = 'Half Elf';
    protected _classes = [
        new Classes.Bard(),
        new Classes.Druid(),
        new Classes.Paladin(),
        new Classes.Ranger(),
        new Classes.Rogue(),
        new Classes.Warrior(),
    ];
}

class Halfling extends CharRace {
    protected _alignment = Alignment.Good;
    protected _name = 'Gnome';
    protected _classes = [
        new Classes.Druid(),
        new Classes.Cleric(),
        new Classes.Rogue(),
        new Classes.Warrior(),
    ];
}

class HighElf extends CharRace {
    protected _alignment = Alignment.Good;
    protected _name = 'High Elf';
    protected _classes = [
        new Classes.Cleric(),
        new Classes.Enchanter(),
        new Classes.Magician(),
        new Classes.Paladin(),
        new Classes.Wizard(),
    ];
}

class Human extends CharRace {
    protected _alignment = Alignment.Neutral;
    protected _name = 'Human';
    protected _classes = [
        new Classes.Bard(),
        new Classes.Cleric(),
        new Classes.Druid(),
        new Classes.Enchanter(),
        new Classes.Magician(),
        new Classes.Monk(),
        new Classes.Necromancer(),
        new Classes.Paladin(),
        new Classes.Ranger(),
        new Classes.Rogue(),
        new Classes.ShadowKnight(),
        new Classes.Warrior(),
        new Classes.Wizard(),
    ];
}

class Iksar extends CharRace {
    protected _alignment = Alignment.Evil;
    protected _name = 'Iksar';
    protected _classes = [
        new Classes.Monk(),
        new Classes.Necromancer(),
        new Classes.ShadowKnight(),
        new Classes.Shaman(),
        new Classes.Warrior(),
    ];
}

class Ogre extends CharRace {
    protected _alignment = Alignment.Evil;
    protected _name = 'Ogre';
    protected _classes = [
        new Classes.ShadowKnight(),
        new Classes.Shaman(),
        new Classes.Warrior(),
    ];
}

class Troll extends CharRace {
    protected _alignment = Alignment.Evil;
    protected _name = 'Troll';
    protected _classes = [
        new Classes.ShadowKnight(),
        new Classes.Shaman(),
        new Classes.Warrior(),
    ];
}

class WoodElf extends CharRace {
    protected _alignment = Alignment.Good;
    protected _name = 'Wood Elf';
    protected _classes = [
        new Classes.Bard(),
        new Classes.Druid(),
        new Classes.Ranger(),
        new Classes.Rogue(),
        new Classes.Warrior(),
    ];
}

export class Races {
    static readonly Barbarian = Barbarian;
    static readonly DarkElf = DarkElf;
    static readonly Dwarf = Dwarf;
    static readonly Erudite = Erudite;
    static readonly Gnome = Gnome;
    static readonly HalfElf = HalfElf;
    static readonly Halfling = Halfling;
    static readonly HighElf = HighElf;
    static readonly Human = Human;
    static readonly Iksar = Iksar;
    static readonly Ogre = Ogre;
    static readonly Troll = Troll;
}