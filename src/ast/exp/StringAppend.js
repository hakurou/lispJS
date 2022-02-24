import UserSExp from "./UserSExp.js";

export default class StringAppend extends UserSExp
{
    interpret(scope, register, args){
        var txt = "";
        for (let i = 1; i < args.length; ++i){
            args[i].interpret(scope, register);
            let pop = register.pop();
            if (typeof pop == "object"){
                pop.interpret(scope, register);
                pop = register.pop();
            }

            txt += pop;
            register.push(txt);
        }
    }
}