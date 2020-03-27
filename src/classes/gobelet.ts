//TODO
import { de } from './de';



export class Gobelet {

    private _val: number;
    private _des: Array<number>;


    constructor(nb_des: number) {
        this._val = 0;
        this._des = Array<number>(); 
        for (let i = 0; i < nb_des; i++) {
            this._des.push(0); 
        }
    }

    public getValeur(): number {
        return this._val;
    }

    public lancer = () => {
        this._val = 0;
        for (let i = 0; i < this._des.length; i++) {
            let dice: de = new de();
            this._val += dice.lancer();
        }
    }

    public afficher_score = () => {
        console.log(`Score du gobelet : ${this.getValeur()}`);
    }



}