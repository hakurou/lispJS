import Source from "./Source.js";
import Token from "./Token.js";
import TokenSelector from "./TokenSelector.js";

export default class Lexer
{
    constructor(){
        this.patterns = {
            "LEFT_PARENTHESIS":     /^(\()/,
            "RIGHT_PARENTHESIS":    /^(\))/,
            "STRING":               /^"([^"]+)"/,
            "NAME":                 /^([a-zA-Z-_>\<\?\!\+\*\/\.#=][a-zA-Z0-9-_>\<\?\!\+\*\/\.#=]*)/,
            "NUMBER":               /^(-?\d+(\.\d+)?)/,
            "BLANK":                /^(\s+)/,
            "COMMENT":              /^(;[^\n]+\n\r?)/
        };
    }

    parse(str){

        const tokens = [],
              source = new Source(str);

        var currentSourceSize = null;

        for (;;)
        {
            if (source.size() == 0 // Si parsing terminé
                || source.size() == currentSourceSize) // Si aucun matches
                break;

            currentSourceSize = source.size();
            for (let name in this.patterns){
                let matches = source.str.match(this.patterns[name]);
                if (matches != null && matches.length > 1){
                    if (name != "COMMENT")
                        tokens.push(new Token(matches[1], name));
                        
                    source.removeMatchesLength(matches[0].length);
                    break;
                }
            }
        }
        return new TokenSelector(tokens);
    }
}