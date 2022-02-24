/*
    program -> sexp*
    sexp -> '(' expression* ')'
    expression -> atom | sexp
    atom -> number | name | string
*/

import Atom from "./Atom.js";
import SExp from "./SExp.js";

export default class Parser
{
    constructor(){
        this.tokens = null;
    }

    parse(tokens){
        this.tokens = tokens;
        return this.parseProgram();
    }

    parseProgram(){
        var sExpList = [];
        do {
            if (!this.tokens.get().is("BLANK"))
                sExpList.push(this.parseSexp());
            this.tokens.next();
        } while(this.tokens.get() != null);

        return sExpList;
    }

    parseSexp(){
        const exprList = [],
              token = this.tokens.get();

        if (!token.is("LEFT_PARENTHESIS")){
            console.log(token);
            throw "Parse error, left parenthesis missing";
        }

        this.tokens.next();
        
        do {
            if (!this.tokens.get().is("BLANK")){
                let exp = this.parseExpr();
                if (exp != null){
                    exprList.push(exp);
                    this.tokens.next();
                }
            }
            else
                this.tokens.next();
        } while (!this.tokens.get().is("RIGHT_PARENTHESIS"));
        
        return new SExp(exprList);
    }

    parseExpr(){
        const token = this.tokens.get();
        if (token.is("LEFT_PARENTHESIS"))
            return this.parseSexp();
        else 
            return this.parseAtom();
    }

    parseAtom(){
        const token = this.tokens.get();

        if (token.is("RIGHT_PARENTHESIS"))
            return null;

        if (!token.is("NUMBER") && !token.is("NAME") && !token.is("STRING"))
            throw "Parse error, atom expected";
        
        return new Atom(token.value, token.type);
    }
}