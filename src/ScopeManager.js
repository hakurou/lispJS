import Scope from "./Scope.js";

export default class ScopeManager
{
    constructor(){
        this.scope = new Scope();
    }

    new(){
        this.scope = new Scope(this.scope);
    }

    back(){
        this.scope = this.scope.parentScope;
    }

    get(){
        return this.scope;
    }
}