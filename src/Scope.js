import SymbolsTable from "./SymbolsTable.js";

export default class Scope
{
    constructor(parentScope){
        this.symbols = new SymbolsTable();
        this.parentScope = typeof parentScope == "undefined" ? null : parentScope;
    }

    getSymbol(name){
        const s = this.symbols.get(name);
        if (s == null && this.parentScope != null)
            return this.parentScope.getSymbol(name);
        else
            return s;
    }
    
    addSymbol(name, value){
        this.symbols.add(name, value);
    }
}