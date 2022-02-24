import UserSExp from "./UserSExp.js";

export default class Newline extends UserSExp
{
    interpret(scope, register, args){
        let txt = document.createElement("br");
        document.body.appendChild(txt);
    }
}