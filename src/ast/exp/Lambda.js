import ExecLambda from "./ExecLambda.js";
import UserSExp from "./UserSExp.js";

export default class Lambda extends UserSExp
{
    interpret(scope, register, args){
        const execLambda = new ExecLambda(args);
        register.push(execLambda);
    }
}