//TODO

export class de {

    private _valeur: number;
    //------
    private Min: number = 1; 
    private Max: number = 6; 

    constructor() {
        this._valeur = 0;
    }

    public get value(): number {
        return this._valeur;
    }

    public lancer = () => {
        return this.Min + Math.floor((Math.random() * (this.Max - this.Min))); 
    }
}