import { convertValueToAtom } from "../../utils.js";
import UserSExp from "./UserSExp.js";

export default class Define extends UserSExp
{
    interpret(scope, register, args){
        if (args[1].type != "NAME")
            throw "Error, type NAME excepted";

        args[2].interpret(scope, register);
        const exp = convertValueToAtom(register.pop());

        scope.get().addSymbol(args[1].value, exp);
    }
}