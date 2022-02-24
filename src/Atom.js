import AstElement from "./AstElement.js";

export default class Atom extends AstElement
{
    constructor(value, type){
        super();
        this.value = value;
        this.type = type;
    }

    interpret(scope, register){
        if (this.type == "NAME"){
            register.push(scope.get().getSymbol(this.value));
        }
        else {
            let value = this.value;
            if (this.type == "NUMBER")
                value = Number(this.value);

            register.push(value);
        }
    }
}