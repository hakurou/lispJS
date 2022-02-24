# lispJS
A simple Javascript Lisp parser


## How to use it

The best sample is __index.html__.

You have to import Lisp.js with the good path:

`````js
import Lisp from "./src/Lisp.js";

`````

To parse content, you need to use the method __parse()__, the only one argument is a string of lisp content :

`````js
const parser = new Lisp();
parse.parse(`
  (display "hello,world!")
`);

`````

## Change or add commands

You can edit files in ./ast/exp/. For exemple, we can change "display" command by editing the file Write.js and replace document.body.appendChild(txt) by console.log(txt).


Add a new command is a little bit more complicated, we need to create a new file in ./ast/exp/, write a class that inherits from UserSExp.
Arguments of your command must be interpreted with like this to be usefull : 

`````js
args[X].interpret(scope, register);

`````

The result will be stored in the register. You have to use __register.pop()__ to retrieve the value.

`````js
args[X].interpret(scope, register);
let r = register.pop();

`````

The register can store primitives and expressions, also you have to check if the retrieved value is an expression, if so, you have to interpret it with __interpret__ method like above.

`````js
args[X].interpret(scope, register);
let r = register.pop();
if (typeof r == "object"){
  p.interpret(scope, register);
  p = register.pop();
}

`````

After you have created your command, you need to register it. For the moment wen can't do it outside of the Lisp class, I'll do something about that.
You have to add a new line in the method __initStandardLib__ :

`````js
// First arg: name of the command in lisp language
// second arg : instance of your new class/command
scope.get().addSymbol(">=", new MoreThanOrEqual());

`````

You can learn how to create commands from existing files, it's easy.

## What is available in this lisp dialect ?

For now, we have limited instructions :

+, *, -, /, display, newline, define, lambda, string-append, if, equal?, cons, car, cdr, null, null?, not, pair?, true, false, quote, eval, >, <, <=, >=

Please take a look to the index.html for samples.
