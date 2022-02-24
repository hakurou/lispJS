import ConsCell from "./ConsCell.js";
import UserSExp from "./UserSExp.js";

export default class Cons extends UserSExp
{
    interpret(scope, register, args){
        if (args.length != 3)
            throw "Error, CONS require 2 arguments"

        register.push(new ConsCell(args[1], args[2]));
    }
}