export default class SymbolsTable
{
    constructor(){
        this.symbols = {};
    }

    add(name, value){
        this.symbols[name] = value;
    }

    get(name){
        if (typeof this.symbols[name] != "undefined")
            return this.symbols[name];
        else
            return null;
    }
}