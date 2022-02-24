import Atom from "../../Atom.js";
import UserSExp from "./UserSExp.js";

export default class OpMul extends UserSExp
{
    interpret(scope, register, args){
        var total = null;
        for (let i = 1; i < args.length; ++i){
            args[i].interpret(scope, register);
            let p = register.pop();

            if (typeof p == "object"){
                p.interpret(scope, register);
                p = register.pop();
            }

            if (total == null)
                total = Number(p);
            else
                total *= Number(p);
        }
        
        register.push(new Atom(total, "NUMBER"));
    }
}