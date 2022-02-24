import ConsCell from "./ConsCell.js";
import PrimitiveNull from "./PrimitiveNull.js";
import UserSExp from "./UserSExp.js";

export default class Write extends UserSExp
{
    interpret(scope, register, args){
        args[1].interpret(scope, register);
        var pop = register.pop();
        
        if (typeof pop == "object"){
            
            if (pop instanceof ConsCell){
                pop = "#CONS";
            }
            else if (pop instanceof PrimitiveNull){
                pop = "#NULL";
            }
            else{
                pop.interpret(scope, register);
                pop = register.pop();
            }
        }

        let txt = document.createTextNode(pop);
        document.body.appendChild(txt);
    }
}