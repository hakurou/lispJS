export default class TokenSelector
{
    constructor(tokens){
        this.tokens = tokens;
        this.cursor = 0;
    }

    next(){
        // if (this.cursor < this.tokens.length - 1)
            this.cursor++;
    }

    previous(){
        if (this.cursor > 0)
            this.cursor--;
    }

    get(){
        if (this.cursor < this.tokens.length)
            return this.tokens[this.cursor];
        else
            return null;
    }
}