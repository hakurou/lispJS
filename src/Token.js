export default class Token
{
    constructor(value, type){
        this.value = value;
        this.type = type;
    }

    is(type){
        return this.type == type;
    }
}