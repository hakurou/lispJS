export default class Register
{
    constructor(){
        this.values = [];
    }

    push(value){
        this.values.push(value);
    }

    pop(){
        return this.values.pop();
    }
}