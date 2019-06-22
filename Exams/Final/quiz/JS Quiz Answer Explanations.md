## Are your feelings hurt?
If you rushed through [David Shariff's JS Quiz](http://davidshariff.com/js-quiz/) or are just new to JS they might be. I know mine were. After I dried my eyes, I took the quiz again, this time very slowly trying to get at the meat behind each answer. Below is my attempt to explain each question's answer and offer some interesting permutations so that others can move beyond their hurt feelings and come out the other side better JS developers.

I initially thought I'd turn this into a blog post but think it's probably better as a gist.

### Question \#1
Don't over think it.

```
var foo = function foo() {
    console.log(foo === foo);  
};
foo();
```

`foo` is the name of a variable assigned to a function. The type of `foo` is function. The function name itself is completely irrelevant because this is a **function expression**. Would this question have seemed so tricky if it were written like this?

```
var foo = function boo() {
    console.log(foo === foo);  
};
foo();
``` 
how about this?

```
var foo = function() {
    console.log(foo === foo);  
};
foo();
``` 
They're all the same. This is an exercise in understanding assignment, scope and optional function expression names.

### Question \#2
Semicolon insertion.

```
function aaa() {
    return
    {
        test: 1
    };
}
alert(typeof aaa());
```

Oh this code looks so innocent, function `aaa` is invoked and seems to return an object. But JS is sly and likes to help out by inserting semicolons where you may have missed them. When JS inserts semi-colons what you're left with is:

```
function aaa() {
    return;
    {
        test: 1
    };
}
alert(typeof aaa());
```
Which causes `undefined` to be alerted instead of `object` as you might initially think.

### Question \#3
Another case of don't over think it.

```
Number("1") - 1 == 0;
```
You're casting the string 1 as a number, and subtracting it from the number 1. This equals 0. 

### Question \#4
Adding booleans!?

Sure why not.

```
(true + false) > 2 + true;
```

This is one of those weird little quirks I think one is just expected to "know". The way the `+` operator works is that unless one of the arguments is a string JS (usually, see question 9) casts them to numbers. True becomes 1 and false becomes 0. 

### Question \#5
Function declarations, evaluation order and some function flow fun.

```
function bar() {
    return foo;
    foo = 10;
    function foo() {}
    var foo = '11';
}
alert(typeof bar());
```

This is a particularly tricky one. First the easy part: the function `bar` returns immediately. Which means everything under the return statement is never executed right? 

Not exactly. Function declarations are evaluated when the browser compiles JS, not during execution. So that means during compile time while creating the function `bar` the function `foo` is also created (still within the scope of `bar`). Which is why "function" is alerted.

However what if we changed this code around a bit?

```
function bar() {
    return foo;
    foo = 10;
    var foo = function foo() {}
    var foo = '11';
}
alert(typeof bar());
```
Because we no longer have a function **declaration** but instead have a function **expression** foo is never created at compile time and "undefined" is alerted instead.

Because this one is so cool, let's look at a few other permutations of this code.

```
function bar() {
    foo = 10;
    function foo() {}
    return foo;
    var foo = '11';
}
alert(typeof bar());
```
```
function bar() {
    foo = 10;
    return foo;
    function foo() {}
    var foo = '11';    
}
alert(typeof bar());
```

In BOTH of these instances the function foo is created at compile time, but during execution we write over it with the global variable foo and "number" is alerted. And you thought the initial question was tricky :-p

```
function bar() {
    foo = 10;
    function foo() {}
    var foo = '11';
    return foo;
}
alert(typeof bar());
```

Finally in this case the function foo is again created at compile time, the global variable `foo` overwrites it as a number, then a local variable `foo` comes along as a string and "string" is alerted instead.

PHEW!

### Question \#6
Don't over think it.

```
"1" - - "1";
```

Another one to not look too deep into, spaces are totally cool, this is just two strings being cast as numbers and subtracted. Essentially:

```
1 - -1
```

Or 2.

### Question \#7
You understand scope right?

```
var x = 3;

var foo = {
    x: 2,
    baz: {
        x: 1,
        bar: function() {
            return this.x;
        }
    }
}

var go = foo.baz.bar;

alert(go());
alert(foo.baz.bar());
```

We assign `go` to a function. The entirety of the `foo` object has no bearing here. This code is equivalent to:

```
var x = 3;

var foo = {
    x: 2,
    baz: {
        x: 1,
        bar: function() {
            return this.x;
        }
    }
}

var go = function() {
    return this.x;
};

alert(go());
alert(foo.baz.bar());
```
The `this` keyword within the scope of `go` references the window object, which is where the global variable `x` declared at the start is created, so `this.x` or `window.x` is equivalent to 3.

The second alert instantiates the function `bar` by accessing it from its parent objects. Because the function `bar` is "owned" by `foo.baz` the keyword `this` refers to `foo.baz`. `foo.baz.x` is equal to "1", which is alerted.

If testing this in JS fiddle be sure to select one of the "no wrap" modes, otherwise this piece of code will not behave as the test suggests because the variable `x` will be prevented from entering the global scope, thus `window.x` will be undefined.

### Question \#8
Don't over think it.

```
new String("This is a string") instanceof String;
```

Noticing a pattern here? Sometimes these questions force you to think long and hard about how JS is evaluated and sometimes they don't. If you start looking for JS quirks where they don't exist you're going to have a bad time. 

Here we're blatantly creating a new String object, so it is of course an instance of String.

### Question \#9
This one is a bit annoying because it's again one of those behaviors we're just expected to know.

```
[] + [] + 'foo'.split('');
```

Why do two empty arrays added together equal the empty string? Because arrays are not primitive datatypes (like the booleans in question 4 above) but objects. JS first attempts to convert the array into a primitive, but when it gets back only the array it converts it to a string instead. Since the arrays are empty they each become `""` which is added to `"f,o,o"`

### Question \#10
Don't over think it.

```
new Array(5).toString();
```

The pattern of tricky and not tricky returns. This is an array with 5 empty items converted to a string. Or: `",,,,"`

### Question \#11
Can you empty an array?

```
var myArr = ['foo', 'bar', 'baz'];
myArr.length = 0;
myArr.push('bin');
console.log(myArr);
```
Pretty straight forward one here. You should know that setting an array's length to less than it's "current length" will truncate it. Setting the array's length to 0 will completely empty it.

### Question \#12
Not as simple as it looks.

```
String('Hello') === 'Hello';
```
Of course they're equal. 

How about this though?

```
new String('Hello') === 'Hello';
```
or this?

```
new String('Hello') == 'Hello';
```
There's a whole lesson in here about the new keyword, string literals, string objects and type casting, but we'll leave that for another day.

### Question \#13
You can make as many new function objects as you want. That doesn't make them not functions.

```
var x = 0;
function foo() {
    x++;
    this.x = x;
    return foo;
}
var bar = new new foo;
console.log(bar.x);
```

So this and the previous question are great reminders to read up on how the `new` keyword behaves in JS by setting the prototype of an object and using the newly created object as `this`. But here things are a little strange. For starters `foo` is a function declaration which returns itself, making `bar.x` undefined because it is internal to the function foo and not an available property on a returned object.

`x` will be incremented to 2 in the above code because of the double `new`, but that double `new` is only possible because because `foo` is always returning its own function definition. You might expect to see code like this:

```
var x = 0;
function foo() {
    x++;
    this.x = x;
}
var bar = new foo();
console.log(bar.x);
```

Which behaves "normally" and logs 1. Because here `foo` is not returning a function definition, bar is assigned to `foo {x: 1}` because this is not a function, it would be illegal to assign bar as above: `var bar = new new foo` or `var bar = new new foo()`. 


### Question \#14
So maybe you do have to over think this one…

```
"This is a string" instanceof String;
```

Even though

```
typeof "This is a string" === "string"
```
The string literal `"This is a string"` does not contain the String constructor in its prototype because it is not a proper String object like in question 8. As I understand it this behavior is due to Strings being a primitive in JS. As a result when `instanceof` comes through to do its check for a constructor and finds none, false is returned.

### Question \#15
Syntax is important.

```
var bar = 1,
    foo = {};

foo: {
    bar: 2;
    baz: ++bar;
};
foo.baz + foo.bar + bar;
```

Note that foo is only ever assigned to `{}`. While it's legal to toss this in the code:

```
foo: {
    bar: 2;
    baz: ++bar;
};
```
It's not actually altering the variable foo. Here the text `foo` is part of a label, and the object that follows is called a javascript block and it contains two labeled statements, not variable assignments. That leave us with two undefined variables added to `1`. Which is `NaN`. If the variable `bar` was not declared higher in the code this object would kick out a syntax error as `bar` would be undefined. 

### Question \#16
Arrays are a certain type of object in JS.

```
var myArr = ['foo', 'bar', 'baz'];
myArr[2];
console.log('2' in myArr);
```

Recall how javascript structures array objects. Even though we have a different prototype chain than an object literal the underlying structure is fundamentally the same. Meaning that the internal **structure** of the data within `myArr` isn't so different from:

```
{
'0': 'foo',
'1': 'bar',
'2': 'baz'
}
```

The second line `myArr[2]` does nothing really, it's equal to `'baz'`. Given the above structure we know that there is a property `'2'` in `myArr`. Given what we know about the array prototype the following are also true:

```
console.log('length' in myArr);
console.log('push' in myArr);
console.log('pop' in myArr);
etc…
```

### Question \#17
Again, arrays are a certain type of object in JS.

```
var arr = [];
arr[0]  = 'a';
arr[1]  = 'b';
arr.foo = 'c';
alert(arr.length);
```

The array object only accounts for integer-numeric indexes. When we say `arr.foo = 'c'` we're adding a property to our `arr` Array object, we're not adding an "indexed value". Arrays only increment their length based on integer-numeric value indexes. So the length property of `arr` is only 2.

### Question \#18
Order of operations fun!

```
10 > 9 > 8 === true;
```

As humans we read the above something like, "ten is greater than 9 which is greater than 8", or:

```
(10 > 9) && (9>8)
```

Javascript however is beholden to its order of operations implementation. Which causes the line to be evaluated as:

```
((10>9)>8)
```

or

```
true > 8
```

which if you've been following along about booleans being cast to Numbers is the same as

```
1 > 8
```

Which is false.

### Question \#19
That pesky arguments array.

```
function foo(a, b) {
    arguments[1] = 2;
    alert(b);
}
foo(1);
```

JS allows functions to take an arbitrary number of arguments, as there is no strict way to say an argument is mandatory. So it would seem to follow that arguments[1] is equivalent to `b`. But not so fast! 

Just because the arguments array can be any size, and all the defined parameters are tied to that arguments array that doesn't mean *undefined* parameters can be defined solely BY the arguments array. 

Were this code to be structured like this:

```
function foo(a, b) {
    arguments[1] = 2;
    alert(b);
}
foo(1,10);
```
We could expect "2" to be alerted. However in the code this question presents `foo` is called **without** a second parameter, meaning no matter what we do to the arguments array the local variable `b` will remain undefined. 

### Question \#20
WAT.

```
NaN === NaN;
```
This is another one of those things you just need to know. Direct from the Mozilla documentation:

```
Equality operator (== and ===) cannot be used to test a value against NaN. Use Number.isNaN() or isNaN() instead.
```