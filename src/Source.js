export default class Source
{
    constructor(str){
        this.str = str;
    }

    removeMatchesLength(length){
        this.str = this.str.substr(length);
    }

    size(){
        return this.str.length;
    }
}