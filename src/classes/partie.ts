//TODO
import { Joueur } from "./joueur";
import { Gobelet } from "./gobelet";



export class Partie {

    private tabPlayers: Joueur[];
    private _nb_tours: number;
    private gobelet: Gobelet;


    constructor(nb_tours: number, nb_des: number) {
        this._nb_tours = nb_tours;
        this.gobelet = new Gobelet(nb_des);
        this.tabPlayers = Array<Joueur>();
    }

    public initialiser = () => {
        let player: Joueur = new Joueur('Nicole');
        let player1: Joueur = new Joueur('Michel');
        let player2: Joueur = new Joueur('Jean');
        let player3: Joueur = new Joueur('Mireille');

        this.tabPlayers.push(player);
        this.tabPlayers.push(player1);

    }

    public lancer = () => {
        for (let i = 0; i < this._nb_tours; i++) {
            console.log("Tour " + i);
            for (let j = 0; j < this.tabPlayers.length; j++) {
                this.tabPlayers[j].jouer(this.gobelet);
                console.log(this.tabPlayers[j].name + " : " + this.tabPlayers[j].score);
            }
        }
    }

    public afficher_gagnant = () => {
        let winner = new Joueur('Toto'); 

        for (let i = 0; i < this.tabPlayers.length; i++) {
            for (let j = 0; j < this.tabPlayers.length; j++) {
                if (this.tabPlayers[i].score > this.tabPlayers[j].score) {
                    winner = this.tabPlayers[i]; 
                }
            }
        }

        console.log("Le vainqueur est : " + winner.name);
    }
}