import UserSExp from "./UserSExp.js";

export default class ConsCell extends UserSExp
{
    constructor(cell1, cell2){
        super();
        this.cell1 = cell1;
        this.cell2 = cell2;
        this.nextCons = cell2 instanceof ConsCell ? cell2 : null;
    }

    interpret(scope, register, args){

    }
}