import Car from "./ast/exp/Car.js";
import Cdr from "./ast/exp/Cdr.js";
import Condition from "./ast/exp/Condition.js";
import Cons from "./ast/exp/Cons.js";
import Define from "./ast/exp/Define.js";
import EvalQuoted from "./ast/exp/EvalQuoted.js";
import IsEqual from "./ast/exp/IsEqual.js";
import IsNull from "./ast/exp/IsNull.js";
import IsPair from "./ast/exp/isPair.js";
import Lambda from "./ast/exp/Lambda.js";
import LessThan from "./ast/exp/LessThan.js";
import LessThanOrEqual from "./ast/exp/LessThanOrEqual.js";
import MoreThan from "./ast/exp/MoreThan.js";
import MoreThanOrEqual from "./ast/exp/MoreThanOrEqual.js";
import Newline from "./ast/exp/Newline.js";
import OpDiv from "./ast/exp/OpDiv.js";
import OpMinus from "./ast/exp/OpMinus.js";
import OpMul from "./ast/exp/OpMul.js";
import OpPlus from "./ast/exp/OpPlus.js";
import PrimitiveBoolean from "./ast/exp/PrimitiveBoolean.js";
import PrimitiveNull from "./ast/exp/PrimitiveNull.js";
import Quote from "./ast/exp/Quote.js";
import ReverseBoolean from "./ast/exp/ReverseBoolean.js";
import StringAppend from "./ast/exp/StringAppend.js";
import Write from "./ast/exp/Write.js";
import Lexer from "./Lexer.js";
import Parser from "./Parser.js";
import Register from "./Register.js";
import ScopeManager from "./ScopeManager.js";

//https://inst.eecs.berkeley.edu/~cs61a/fa14/assets/interpreter/scheme.html
export default class Lisp
{
    parse(str){
        const lexer = new Lexer(),
              tokens = lexer.parse(str),
              parser = new Parser(),
              sExpList = parser.parse(tokens),
              register = new Register(),
              scope = new ScopeManager();

        this.initStandardLib(scope);

        sExpList.forEach(e => e.interpret(scope, register));
    }

    initStandardLib(scope){
        scope.get().addSymbol("+", new OpPlus());
        scope.get().addSymbol("*", new OpMul());
        scope.get().addSymbol("-", new OpMinus());
        scope.get().addSymbol("/", new OpDiv());
        scope.get().addSymbol("display", new Write());
        scope.get().addSymbol("newline", new Newline());
        scope.get().addSymbol("define", new Define());
        scope.get().addSymbol("lambda", new Lambda());
        scope.get().addSymbol("string-append", new StringAppend());
        scope.get().addSymbol("if", new Condition());
        scope.get().addSymbol("equal?", new IsEqual());
        scope.get().addSymbol("cons", new Cons());
        scope.get().addSymbol("car", new Car());
        scope.get().addSymbol("cdr", new Cdr());
        scope.get().addSymbol("null", new PrimitiveNull());
        scope.get().addSymbol("null?", new IsNull());
        scope.get().addSymbol("not", new ReverseBoolean());
        scope.get().addSymbol("pair?", new IsPair());
        scope.get().addSymbol("true", new PrimitiveBoolean(true));
        scope.get().addSymbol("false", new PrimitiveBoolean(false));
        scope.get().addSymbol("quote", new Quote());
        scope.get().addSymbol("eval", new EvalQuoted());
        scope.get().addSymbol(">", new MoreThan());
        scope.get().addSymbol("<", new LessThan());
        scope.get().addSymbol("<=", new LessThanOrEqual());
        scope.get().addSymbol(">=", new MoreThanOrEqual());
        // list (à partir de cons du coup ?)
        // and
        // or
        // list?
        // macro ?
        // define-syntax ?
    }
}