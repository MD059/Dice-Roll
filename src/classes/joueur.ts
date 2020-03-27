//TODO
import { Gobelet } from './gobelet';
import { de } from './de';


export class Joueur {

    private _nom: string;
    private _score: number;

    constructor(name: string) {
        this._nom = name;
        this._score = 0;
    }

    public get name(): string {
        return this._nom;
    }

    public get score(): number {
        return this._score;
    }

    public jouer = (gobelet: Gobelet) => {
        gobelet.lancer(); 
        this._score += gobelet.getValeur(); 
    }

}