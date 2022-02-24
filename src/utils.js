import Atom from "./Atom.js";

function convertValueToAtom(value){
    var exp = null;
    if (typeof value == "object"){
        exp = value;
    }
    else{
        let type = "STRING";
        if (typeof value == "number")
            type = "NUMBER";

        exp = new Atom(value, type);
    }
    return exp;
}

export { convertValueToAtom };