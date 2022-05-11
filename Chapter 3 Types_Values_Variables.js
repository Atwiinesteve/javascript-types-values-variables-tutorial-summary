// Computer programs work by manipulating values, such as the number 3.14 or the text “Hello World.”

// The kinds of values that can be represented and manipulated in a
// programming language are known as types, and one of the most fundamental characteristics
// of a programming language is the set of types it supports. 

// When a program needs to retain a value for future use, it assigns the value to (or “stores” the value in) a variable. 

// A variable defines a symbolic name for a value and allows the value to be referred to by name.

// JavaScript types can be divided into two categories: primitive types and object types.
// JavaScript’s primitive types include numbers, strings of text (known as strings), and
// Boolean truth values (known as booleans).

// The special JavaScript values null and undefined are primitive values, but they are not
// numbers, strings, or booleans. Each value is typically considered to be the sole member
// of its own special type.

// Any JavaScript value that is not a number, a string, a boolean, or is null, undefined
// an object. An object (that is, a member of the type object) is a collection of properties
// where each property has a name and a value (either a primitive value, such as a number or string, or an object).

// An ordinary JavaScript object is an unordered collection of named values. The language
// also defines a special kind of object, known as an array, that represents an ordered
// collection of numbered values. The JavaScript language includes special syntax for
// working with arrays, and arrays have some special behavior that distinguishes them
// from ordinary objects.

// JavaScript defines another special kind of object, known as a function. A function is an
// object that has executable code associated with it. A function may be invoked to run
// that executable code and return a computed value. Like arrays, functions behave differently
// from other kinds of objects, and JavaScript defines a special language syntax
// for working with them. The most important thing about functions in JavaScript is that
// they are true values and that JavaScript programs can treat them like regular objects.

// Functions that are written to be used (with the new operator) to initialize a newly created
// object are known as constructors. Each constructor defines a class of objects—the set
// of objects initialized by that constructor. Classes can be thought of as subtypes of the
// object type. In addition to the Array and Function classes, core JavaScript defines three
// other useful classes.

// The Date class defines objects that represent dates. 

// The RegExp class defines objects that represent regular expressions (a powerful pattern-matching tool). 

// And the Error class defines objects that represent syntax and runtime errors that can occur in a JavaScript program. 

// You can define your own classes of objects by defining appropriate constructor functions.

// The JavaScript interpreter performs automatic garbage collection for memory management.
// This means that a program can create objects as needed, and the programmer
// never needs to worry about destruction or deallocation of those objects. When an object
// is no longer reachable—when a program no longer has any way to refer to it—the
// interpreter knows it can never be used again and automatically reclaims the memory it was occupying.

// JavaScript is an object-oriented language. Loosely, this means that rather than having
// globally defined functions to operate on values of various types, the types themselves
// define methods for working with values. To sort the elements of an array a, for example,
// we don’t pass to a function. Instead, we invoke the method of a as a.sort()
let a;
a.sort(); // The object-oriented version of sort(a).

// Technically, it is only JavaScript objects that have methods. 
// But numbers, strings, and boolean values behave as if they had
// methods. In JavaScript, null and undefined are the only
// values that methods cannot be invoked on.

// JavaScript’s types can be divided into primitive types and object types. And they can
// be divided into types with methods and types without methods. They can also be categorized as
// mutable and immutable types. A value of a mutable type can change. Objects and arrays
// are mutable: a JavaScript program can change the values of object properties and array
// elements. Numbers, booleans, null, and undefined are immutable—it doesn’t even
// make sense to talk about changing the value of a number, for example. Strings can be
// thought of as arrays of characters, and you might expect them to be mutable. In Java-
// Script, however, strings are immutable: you can access the text at any index of a string,
// but JavaScript provides no way to alter the text of an existing string.

// JavaScript converts values liberally from one type to another. If a program expects a
// string, for example, and you give it a number, it will automatically convert the number
// to a string for you. If you use a non-boolean value where a boolean is expected, JavaScript
// will convert accordingly. The rules for value conversion are explained in the later chapters. Java-
// Script’s liberal value conversion rules affect its definition of equality, and the
// equality (==) operator performs type conversions as described later in this course.

// JavaScript variables are untyped: you can assign a value of any type to a variable, and
// you can later assign a value of a different type to the same variable. Variables are
// declared with the var keyword. JavaScript uses lexical scoping. Variables declared outside
// of a function are global variables and are visible everywhere in a JavaScript program.
// Variables declared inside a function have function scope and are visible only to code
// that appears inside that function.

// ================
// NUMBERS

// Unlike many languages, JavaScript does not make a distinction between integer values
// and floating-point values. All numbers in JavaScript are represented as floating-point
// values.

// When a number appears directly in a JavaScript program, it’s called a numeric literal.
// JavaScript supports numeric literals in several formats, as described in the following
// sections. Note that any numeric literal can be preceded by a minus sign (-) to make the
// number negative. Technically, however, (-) is the unary negation operator
// and is not part of the numeric literal syntax.

//  =>  Arihmitics in JavaScript
Math.pow(2, 53) // => 9007199254740992: 2 to the power 53
Math.round(.6) // => 1.0: round to the nearest integer
Math.ceil(.6) // => 1.0: round up to an integer
Math.floor(.6) // => 0.0: round down to an integer
Math.abs(-5) // => 5: absolute value
Math.max(x, y, z) // Return the largest argument
Math.min(x, y, z) // Return the smallest argument
Math.random() // Pseudo-random number x where 0 <= x < 1.0
Math.PI // p: circumference of a circle / diameter
Math.E // e: The base of the natural logarithm
Math.sqrt(3) // The square root of 3
Math.pow(3, 1 / 3) // The cube root of 3
Math.sin(0) // Trigonometry: also Math.cos, Math.atan, etc.
Math.log(10) // Natural logarithm of 10
Math.log(100) / Math.LN10 // Base 10 logarithm of 100
Math.log(512) / Math.LN2 // Base 2 logarithm of 512
Math.exp(3) // Math.E cubed

// => Date and Times
// Core JavaScript includes a constructor for creating objects that represent dates Date() and times. 
// The Date object has methods that provide an API for simple date computations.
// A Date object is not a fundamental type like numbers are.
var then = new Date(2010, 0, 1); // The 1st day of the 1st month of 2010
var later = new Date(2010, 0, 1, 17, 10, 30); // Same day, at 5:10:30pm, local time
var now = new Date(); // => The current date and time
var elapsed = now - then; // => Date subtraction: interval in milliseconds
later.getFullYear() // => 2010
later.getMonth() // => 0: zero-based months
later.getDate() // => 1: one-based days
later.getDay() // => 5: day of week. 0 is Sunday 5 is Friday.
later.getHours() // => 17: 5pm, local time
later.getUTCHours() // => hours in UTC time; depends on timezone
later.toString() // => "Fri Jan 01 2010 17:10:30 GMT-0800 (PST)"
later.toUTCString() // => "Sat, 02 Jan 2010 01:10:30 GMT"
later.toLocaleDateString() // => "01/01/2010"
later.toLocaleTimeString() // => "05:10:30 PM"
later.toISOString() // => "2010-01-02T01:10:30.000Z"; ES5 only


// ================
// TEXT

// A string is an immutable ordered sequence of 16-bit values, each of which typically
// represents a Unicode character—strings are JavaScript’s type for representing text. The
// length of a string is the number of 16-bit values it contains. JavaScript’s strings (and its
// arrays) use zero-based indexing: the first 16-bit value is at position 0, the second at
// position 1 and so on. The empty string is the string of length 0. JavaScript does not have
// a special type that represents a single element of a string. To represent a single 16-bit
// value, simply use a string that has a length of 1.

// ====
//  => String Literals.
// ====
// To include a string literally in a JavaScript program, simply enclose the characters of
// the string within a matched pair of single or double quotes (' or "). Double-quote
// characters may be contained within strings delimited by single-quote characters, and
// single-quote characters may be contained within strings delimited by double quotes.

"" // The empty string: it has zero characters
'testing'
"3.14"
'name="myform"'
"Wouldn't you prefer O'Reilly's book?"
"This string\nhas two lines"
"p is the ratio of a circle's circumference to its diameter"

// In ECMAScript 3, string literals must be written on a single line. In ECMAScript 5,
// however, you can break a string literal across multiple lines by ending each line but the
// last with a backslash (\). Neither the backslash nor the line terminator that follow it
// are part of the string literal. If you need to include a newline character in a string literal,
// use the character sequence \n (documented below):
"two\nlines" // A string representing 2 lines written on one line
"one\"" // A one-line string written on 3 lines. ECMAScript 5 only.
"long\""
"line"

// In client-side JavaScript programming, JavaScript code may contain strings of HTML
// code, and HTML code may contain strings of JavaScript code. Like JavaScript, HTML
// uses either single or double quotes to delimit its strings. Thus, when combining Java-
// Script and HTML, it is a good idea to use one style of quotes for JavaScript and the
// other style for HTML. In the following example, the string “Thank you” is single quoted
// within a JavaScript expression, which is then double-quoted within an
// HTML event - handler attribute: 

// <button onclick = "alert('Thank you')" > Click Me < /button>

// ====
// => Escape Sequences in String Literals
// ====
//  The backslash character (\) has a special purpose in JavaScript strings. Combined with
// the character that follows it, it represents a character that is not otherwise representable
// within the string. For example, \n is an escape sequence that represents a newline character.
// Another example, mentioned above, is the \' escape, which represents the single quote
// (or apostrophe) character. This escape sequence is useful when you need to include an
// apostrophe in a string literal that is contained within single quotes. You can see why
// these are called escape sequences: the backslash allows you to escape from the usual
// interpretation of the single-quote character.

// ====
// => Working with Strings.
// ====
// One of the built-in features of JavaScript is the ability to concatenate strings. If you use
// the (+) operator with numbers, it adds them. But if you use this operator on strings, it
// joins them by appending the second to the first. For example:
var myName = 'Kiiza Atwiine Stephen';
var msg = "Hello, " + "world"; // Produces the string "Hello, world"
var greeting = "Welcome to my blog," + " " + myName;

// To determine the length of a string — the number of 16-bit values it contains—use the
// length property of the string. Determine the length of a string is like this:
greeting.length;

// In addition to this length property, there are a number of methods you can invoke on
// strings:
var s = "hello, world" // Start with some text.
s.charAt(0) // => "h": the first character.
s.charAt(s.length - 1) // => "d": the last character.
s.substring(1, 4) // => "ell": the 2nd, 3rd and 4th characters.
s.slice(1, 4) // => "ell": same thing
s.slice(-3) // => "rld": last 3 characters
s.indexOf("l") // => 2: position of first letter l.
s.lastIndexOf("l") // => 10: position of last letter l.
s.indexOf("l", 3) // => 3: position of first "l" at or after 3
s.split(", ") // => ["hello", "world"] split into substrings
s.replace("h", "H") // => "Hello, world": replaces all instances
s.toUpperCase() // => "HELLO, WORLD"

// Remember that strings are immutable in JavaScript. Methods like and replace() and toUpperCase()
// return new strings: they do not modify the string on which they are invoked.

// In ECMAScript 5, strings can be treated like read-only arrays, and you can access individual
// characters (16-bit values) from a string using square brackets instead of the
// method: charAt()
s = "hello, world";
s[0] // => "h"
s[s.length - 1] // => "d"

// ====
// => Pattern Matching
// ====
// JavaScript defines a constructor for creating objects that represent textual RegExp()
// patterns. These patterns are described with regular expressions, and JavaScript adopts
// Perl’s syntax for regular expressions. Both strings and RegExp objects have methods
// for performing pattern matching and search-and-replace operations using regular
// expressions. 

// RegExps are not one of the fundamental types of JavaScript. Like Dates, they are simply
// a specialized kind of object, with a useful API.

// Although RegExps are not one of the fundamental data types in the language, they do
// have a literal syntax and can be encoded directly into JavaScript programs. Text between
// a pair of slashes constitutes a regular expression literal. The second slash in the
// pair can also be followed by one or more letters, which modify the meaning of the
// pattern. For example:
let d = /^HTML/ // Match the letters H T M L at the start of a string
let b = /[1-9][0-9]*/ // Match a non-zero digit, followed by any # of digits
let c = /\bjavascript\b/i // Match "javascript" as a word, case-insensitive.

// RegExp objects define a number of useful methods, and strings also have methods that
// accept RegExp arguments. For example:
var text = "testing: 1, 2, 3"; // Sample text
var pattern = /\d+/g // Matches all instances of one or more digits
pattern.test(text) // => true: a match exists
text.search(pattern) // => 9: position of first match
text.match(pattern) // => ["1", "2", "3"]: array of all matches
text.replace(pattern, "#"); // => "testing: #, #, #"
text.split(/\D+/); // => ["","1","2","3"]: split on non-digits


// ================
// BOOLLEAN VALUES

// A boolean value represents truth or falsehood, on or off, yes or no. There are only two
// possible values of this type. The reserved words and evaluate to these true false two values.

// Boolean values are generally the result of comparisons you make in your JavaScript
// programs. let a = 4; a == 4;

// This code tests to see whether the value of the variable is equal to the number 4. If it
// a is, the result of this comparison is the boolean value true. If a is not equal to 4, the result
// a of the comparison is false.

// Boolean values are commonly used in JavaScript control structures.
if (a == 4) {
    b = b + 1;
} else {
    a = a + 1;
}

// JavaScript Falsy Values.
undefined;
null;
0;
NaN;
" "; // the empty string

// All other values, including all objects (and arrays) convert to, and work like, true.
// False, and the six values that convert to it, are sometimes called falsy values, and all
// other values are called truthy. Any time JavaScript expects a boolean value, a falsy value
// works like false and a truthy value works like true.

// Boolean values have a method that you can use to convert them to the strings
// toString() “true” or “false”, but they do not have any other useful methods. Despite the trivial
// API, there are three important boolean operators.

// The operator (&&) performs the Boolean AND operation. It evaluates to a truthy value if
// and only if both of its operands are truthy; it evaluates to a falsy value otherwise. The
//  (||) operator is the Boolean OR operation: it evaluates to a truthy value if either one (or
// both) of its operands is truthy and evaluates to a falsy value if both operands are falsy.
// Finally, the unary operator (!) performs the Boolean NOT operation: it evaluates to true
// if its operand is falsy and evaluates to false if its operand is truthy. For example:
if ((x == 0 && y == 0) || !(z == 0)) {
    // x and y are both zero or z is non-zero
}


// ================
// NULL and UNDEFINED. 

// null is a language keyword that evaluates to a special value that is usually used to
// indicate the absence of a value. Using the typeof operator on null returns the string
// “object”, indicating that null can be thought of as a special object value that indicates
// “no object”. In practice, however, null is typically regarded as the sole member of its
// own type, and it can be used to indicate “no value” for numbers and strings as well as
// objects. Most programming languages have an equivalent to JavaScript’s null: you may
// be familiar with it as null or nil.

// JavaScript also has a second value that indicates absence of value. The undefined value
// represents a deeper kind of absence. It is the value of variables that have not been
// initialized and the value you get when you query the value of an object property or array
// element or variable that does not exist. The undefined value is also returned by functions that have
// no return value, and the value of function parameters for which no argument is supplied.
// It is a predefined global variable (not a language keyword like null) that undefined
// is initialized to the undefined value. In ECMAScript 3, is a read/write variable is undefined
// and it can be set to any value. This error is corrected in ECMAScript 5 and
// is read-only in that version of the language. If you apply the operator undefined
// typeof to the undefined value, it returns “undefined”, indicating that this value is the sole
// member of a special type.

// Despite these differences, both indicate an absence of value, null and undefined
// can often be used interchangeably. The equality operator == considers them to be equal.
// (Use the strict equality operator === to distinguish them.) Both are falsy values—they
// behave like when a boolean value is required. Neither null nor undefined have
// any properties or methods. In fact, using . or [] to access a property or method of these
// values causes a TypeError.
function check() {
    console.log(null == undefined);
    console.log(null === undefined);
}
check();


// ================
// GLOBAL OBJECT

// The global object is a regular JavaScript object that serves a very important purpose: the properties
// of this object are the globally defined symbols that are available to a JavaScript program

// When the JavaScript interpreter starts (or whenever a web browser loads a new page),
// it creates a new global object and gives it an initial set of properties that define the:
// => global properties like undefined, Infinity, and NaN
// => global functions like isNaN(), parseInt() and eval()
// => constructor functions like Date(), RegExp(), String(), Object(), and Array()
// => global objects like Math and JSON

// The initial properties of the global object are not reserved words, but they deserve to
// be treated as if they are.

// In top-level code—JavaScript (code that is not part of a function) — you can use the
// JavaScript keyword (this) to refer to the global object:
var global = this // Define a global variable to refer to the global object.

// In client-side JavaScript, the Window object serves as the global object for all JavaScript
// code contained in the browser window it represents. This global Window object has a self-referential
// property that can be used instead of this to refer to the global window
// object. The Window object defines the core global properties, but it also defines quite
// a few other globals that are specific to web browsers and client-side JavaScript.

// When first created, the global object defines all of JavaScript’s predefined global values.
// But this special object also holds program-defined globals as well.  If your code declares
// a global variable, that variable is a property of the global object.


// ================
// WRAPPER OBJECT

// JavaScript objects are composite values: they are a collection of properties or named
// values. We refer to the value of a property using the notation. When the value of a property
// is a function, we call it a method. To invoke the method of an object o, to invoke m write o.m().

var s = "hello world!"; // A string
var word = s.substring(s.indexOf(" ") + 1, s.length); // Use string properties.

// Strings are not objects, though, so why do they have properties? Whenever you try to
// refer to a property of a string s, JavaScript converts the string value to an object as if by calling new String().
// This object inherits string methods and is used to
// resolve the property reference. Once the property has been resolved, the newly created
// object is discarded.

// Numbers and booleans have methods for the same reason that strings do: a temporary
// object is created using the constructor, Number(), Boolean() and the method is resolved
// using that temporary object. There are no wrapper objects for the undefined and null
// values: any attempt to access a property of one of these values causes a TypeError.

var s = "test"; // Start with a string value.
s.len = 4; // Set a property on it.
var t = s.len; // Now query the property.

// When you run this code, the value of t is undefined. The second line of code creates a
// temporary String object, sets its len property to 4, and then discards that object. The
// third line creates a new String object from the original (unmodified) string value and
// then tries to read the property. This property len does not exist, and the expression
// evaluates to undefined. This code demonstrates that strings, numbers, and boolean
// values behave like objects when you try to read the value of a property (or method)
// from them. But if you attempt to set the value of a property, that attempt is silently
// ignored: the change is made on a temporary object and does not persist.

// The temporary objects created when you access a property of a string, number, or
// boolean are known as wrapper objects, and it may occasionally be necessary to distinguish
// a string value from a String object or a number or boolean value from a Number
// or Boolean object.

// You just need to know that string, number, and boolean 
// values differ from objects in that their properties are
// read-only and that you can’t define new properties on them.

// Note that it is possible (but almost never necessary or useful) to explicitly create wrapper
// objects, by invoking the String(), Number(), or Boolean() constructors:

var s = "test";
var n = 1;
var z = true; // A string, number, and boolean value.
var S = new String(s); // A String object
var N = new Number(n); // A Number object
var Z = new Boolean(z); // A Boolean object

console.log(typeof s);
console.log(typeof S);
console.log(typeof n);
console.log(typeof N);
console.log(typeof z);
console.log(typeof Z);

// JavaScript converts wrapper objects into the wrapped primitive value as necessary, so
// the objects S, N, and Z above usually, but not always, behave just like the values s, n,
// and z. The equality == operator treats a value and its wrapper object as equal, but you
// can distinguish them with the strict equality === operator. The typeof operator will also
// show you the difference between a primitive value and its wrapper object.


// ================
// IMMUTABLE PRIMITIVE VALUES AND MUTABLE OBJECT REFERENCES.

// There is a fundamental difference in JavaScript between primitive values(undefined,
// null, booleans, numbers, and strings) and objects(including arrays and functions).
// Primitives are immutable: there is no way to change(or“ mutate”) a primitive value.
// This is obvious for numbers and booleans— it doesn’ t even make sense to change the
// value of a number.It is not so obvious for strings, however.Since strings are like arrays
// of characters, you might expect to be able to alter the character at any specified index.
// In fact, JavaScript does not allow this, and all string methods that appear to
// return a modified string are, in fact, returning a new string value. Forexample:
var s = "hello"; // Start with some lowercase text
s.toUpperCase(); // Returns "HELLO", but doesn't alter s
s // => "hello": the original string has not changed

// Primitives are also compared by value: two values are the same only if they have the
// same value. This sounds circular for numbers, booleans, null, and undefined: there is
// no other way that they could be compared.Again, however, it is not so obvious for
// strings.If two distinct string values are compared, JavaScript treats them as equal
// if, and only if, they have the same length and if the character at each index is the same.
var greeting = 'Hello Stephen!';
var greetings = 'Hello';
if (greeting == greetings) {
    console.log('Equal ...')
} else {
    console.log('Not Equal ...')
}

// Objects are different than primitives.First, they are mutable — their values can change:
var o = { x: 1 }; // Start with an object
o.x = 2; // Mutate it by changing the value of a property
o.y = 3; // Mutate it again by adding a new property
var arr = [1, 2, 3] // Arrays are also mutable
arr[0] = 0; // Change the value of an array element
arr[3] = 4; // Add a new array element

// Objects are not compared by value: two objects are not equal even
// if they have the same properties and values.And two arrays are not equal even
// if they have the same elements in the same order:
var o = { x: 1 };
var p = { x: 1 }; // Two objects with the same properties
o === p // => false: distinct objects are never equal
if (o === p) {
    console.log('Equal ...')
} else {
    console.log('Not Equal ...')
}

var arr = [];
var brr = []; // Two distinct, empty arrays
arr === brr // => false: distinct arrays are never equal
if (arr === brr) {
    console.log('Equal ...')
} else {
    console.log('Not Equal ...')
}

// Objects are sometimes called reference types to distinguish them from JavaScript’ s
// primitive types.Using this terminology, object values are references, and we say that
// objects are compared by reference: two object values are the same
// if and only if they refer to the same underlying object.
var abb = []; // The variable a refers to an empty array.
var baa = abb; // Now b refers to the same array.
baa[0] = 1; // Mutate the array referred to by variable b.
abb[0] // => 1: the change is also visible through variable a.
abb === baa // => true: a and b refer to the same object, so they are equal.
if (abb === baa) {
    console.log('Equal ...')
} else {
    console.log('Not Equal ...')
}

// As you can see from the code above, assigning an object(or array) to a variable simply
// assigns the reference: it does not create a new copy of the object.If you want to make
// a new copy of an object or array, you must explicitly copy the properties of the object
// or the elements of the array.
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var array2 = [];
for (var i = 0; i < array1.length; i++) {
    array2[i] = array1[i];
}
console.log(array2);
if (array1.length === array2.length) {
    console.log('Equal ...')
} else {
    console.log('Not Equal ...')
}

// Similarly, if we want to compare two distinct objects or arrays, we must compare their
// properties or elements.This code defines a function to compare two arrays:
function equalArrays(a, b) {
    if (a.length !== b.length) return false;
    for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return console.log('Equal ...');
}
equalArrays(array1, array2);


// ================
// TYPE CONVERSIONS.

// JavaScript is very flexible about the types of values it requires.We’ ve seen this
// for booleans: when JavaScript expects a boolean value, you may supply a value of any type,
// and JavaScript will convert it as needed.Some values(“truthy” values) convert to
// true and others(“falsy” values) convert to false.The same is true for other types: if
// JavaScript wants a string, it will convert whatever value you give it to a string.
// If JavaScript wants a number, it will try to convert the value you give it to a number(or to NaN
// if it cannot perform a meaningful conversion).
10 + " objects" // => "10 objects". Number 10 converts to a string
"7" * "4" // => 28: both strings convert to numbers
var n = 1 - "x"; // => NaN: string "x" can't convert to a number
n + " objects" // => "NaN objects": NaN converts to string "NaN"


// ================
// Conversins and Equality.

// Because JavaScript can convert values flexibly, its == equality operator is also flexible
// with its notion of equality.All of the following comparisons are true, for example:
null == undefined; // These two values are treated as equal.
"0" == 0; // String converts to a number before comparing.
0 == false; // Boolean converts to number before comparing.
"0" == false; // Both operands convert to numbers before comparing.

// This short notes booklq explains exactly what conversions are performed by the == operator in order to
// determine whether two values should be considered equal, and it also describes the
// strict equality operator === that does not perform conversions when testing
// for equality. Keep in mind that convertibility of one value to another does not imply equality of
// those two values.If undefined is used where a boolean value is expected,
// for example, it will convert to false.But this does not mean that undefined == false.JavaScript
// operators and statements expect values of various types, and perform conversions to
// those types.The if statement converts undefined to false, but the == operator never
// attempts to convert its operands to booleans.


// ================
// Explicit Conversions.

// Although JavaScript performs many type conversions automatically, you may sometimes need to perform 
// an explicit conversion, or you may prefer to make the conversions explicit to keep your code clearer.
// The simplest way to perform an explicit type conversion is to use the Boolean(),
// Number(), String(), or Object() functions.We’ ve already seen these functions as constructors
// for wrapper objects.When invoked without the new operator, however, they work as conversion functions 
// and perform the conversions summarized.
console.log(typeof Number('3'));
console.log(typeof Number(3));
console.log(typeof String(3));
console.log(typeof Boolean(3));
console.log(typeof Boolean('3'));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Object(3));
console.log(typeof Object(3));
console.log(Object('Kiiza Atwiine Stephen'));
console.log(typeof Object('Kiiza Atwiine Stephen'));
console.log(Object(true));
console.log(typeof Object(true));
console.log(Object({}));
console.log(typeof Object({}));
console.log(Object([]));
console.log(typeof Object([]));

// Note that any value other than null or undefined has a toString() method and the
// result of this method is usually the same as that returned by the String()
// function. Also note that a TypeError is shown 
// if you attempt to convert null or undefined to an object.The Object()
// function does not throw an exception in this
// case :instead it simply returns a newly created empty object.

// Certain JavaScript operators perform implicit type conversions, and are sometimes used
// for the purposes of type conversion.If one operand of the + operator is a string,
// it converts the other one to a string.The unary (+) operator converts its operand to a
// number. And the unary (!) operator converts its operand to a boolean and negates it.
// These facts lead to the following type conversion idioms that you may see in some code:
x + ""; // Same as String(x);
+
x; // Same as Number(x). You may also see x-0
!x; // Same as Boolean(x). Note double !

// Formatting and parsing numbers are common tasks in computer programs and JavaScript has specialized 
// functions and methods that provide more precise control over number - to - string and string - to - number conversions.
// The toString() method defined by the Number class accepts an optional argument that specifies a radix, or base,
// for the conversion.If you do not specify the argument, the conversion is done in base 10. 
// However, you can also convert numbers in other bases(between 2 and 36).For example:
var n = 17;
console.log(n.toString()) // Converts to base 10
console.log(n.toString(2)); // Converts to base 2
console.log(n.toString(8)); // Converts to base 8.
console.log(n.toString(16)); // Converts to base 16.

// When working with financial or scientific data, you may want to convert numbers to
// strings in ways that give you control over the number of decimal places or the number
// of significant digits in the output, or you may want to control whether exponential
// notation is used. The Number class defines three methods for these kinds of number - to - string conversions.
//  => toFixed() == converts a number to a string with a specified number of digits after the decimal point.It never uses exponential notation.
//  => toExponential() == converts a number to a string using exponential notation, with one digit before the decimal point and a specified number of digits 
//      after the decimal point(which means that the number of significant digits is one larger than the value you specify).
//  => toPrecision() == converts a number to a string with the number of significant digits you specify. It uses exponential notation if the number of 
//      significant digits is not large enough to
//      display the entire integer portion of the number. 

// Note that all three methods round the trailing digits or pad with zeros as appropriate.Consider the following examples:
var n = 123456.789;
console.log(n.toFixed(0)); // "123457"
console.log(n.toFixed(2)); // "123456.79"
console.log(n.toFixed(5)); // "123456.78900"
console.log(n.toExponential(1)); // "1.2e+5"
console.log(n.toExponential(3)); // "1.235e+5"
console.log(n.toExponential(20)); // 1.23456789000000004307e+5
console.log(n.toPrecision(4)); // "1.235e+5"
console.log(n.toPrecision(7)); // "123456.8"
console.log(n.toPrecision(10)); // "123456.7890"

// If you pass a string to the Number() conversion function, it attempts to parse that string
// as an integer or floating - point literal. That function only works
// for base - 10 integers, and does not allow trailing characters that are not part of the literal.
// The parseInt() and parseFloat() functions (these are global functions, not methods of any class) are
// more flexible. parseInt() parses only integers, while parseFloat() parses both integers
// and floating - point numbers. If a string begins with“ 0x” or“ 0X”, parseInt() interprets it as a hexadecimal number. 
// Both parseInt() and parseFloat() skip leading white-space, parse as many numeric characters as they can, and 
// ignore anything that follows. If the first nonspace character is not part of a valid numeric literal, they return NaN:
console.log(parseInt("3 blind mice")) // => 3
console.log(parseFloat(" 3.14 meters ")) // => 3.14
console.log(parseInt("-12.34")) // => -12
console.log(parseInt("0xFF")) // => 255
console.log(parseInt("0xff")) // => 255
console.log(parseInt("-0XFF")) // => -255
console.log(parseFloat(".1")) // => 0.1
console.log(parseInt("0.1")) // => 0
console.log(parseInt(".1")) // => NaN: integers can't start with "."
console.log(parseFloat("$72.47")); // => NaN: numbers can't start with "$"
console.log(parseFloat("#72.47")); // => NaN: numbers can't start with "$"


// ================
// Object to Primitve Conversions.

// Object - to - boolean conversions are trivial: all objects(including arrays and functions)
// convert to true. This is so even for wrapper objects: new Boolean(false) is an object
// rather than a primitive value, and so it converts to true.
// Object - to - string and object - to - number conversions are performed by 
// invoking a method of the object to be converted. This is complicated by the fact that JavaScript objects
// have two different methods that perform conversions, and it is also complicated by
// some special cases described below. Note that the string and number conversion rules
// described here apply only to native objects. Host objects(defined by web browsers,
// for example) can convert to numbers and strings according to their own algorithms.
// All objects inherit two conversion methods.The first is called toString(), and its job
// is to return a string representation of the object. The default toString() method does
// not return a very interesting value though we will find it useful later:
console.log(({ x: 1, y: 2, z: 3 }).toString());

// Many classes define more specific versions of the toString() method.The toString() method of the Array class,
// for example, converts each array element to a string and
// joins the resulting strings together with commas in between.The toString() method
// of the Function class returns an implementation - defined representation of a function.
// In practice, implementations usually convert user - defined functions to 
// strings of JavaScript source code.The Date class defines a toString() method that returns a 
// human-readable(and JavaScript - parsable) date and time string.The RegExp class defines a
// toString() method that converts RegExp objects to a string that looks like a RegExp
// literal:
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].toString());
console.log(new Date().toString());

// The other object conversion function is called valueOf().The job of this method is less
// well - defined: it is supposed to convert an object to a primitive value that represents the
// object, if any such primitive value exists.Objects are compound values, 
// and most objects cannot really be represented by a single primitive value, so the
// default valueOf() method simply returns the object itself rather than returning a primitive. Wrapper
// classes define valueOf() methods that return the wrapped primitive value. Arrays,
// functions, and regular expressions simply inherit the default method.Calling
// valueOf() for instances of these types simply returns the object itself.The Date class
// defines a valueOf() method that returns the date in its internal representation: the
// number of milliseconds since January 1, 1970:
var date = new Date();
console.log(date.valueOf());

// To convert an object to a string, JavaScript takes these steps: 
// => • If the object has a toString() method, JavaScript calls it. 
//      If it returns a primitive value, JavaScript converts that value to a string(if it is not already a string) and
//      returns the result of that conversion. Note that primitive - to - string conversions are
//      all well - defined.
// => • If the object has no toString() method, or if that method does not return a primitive value, then JavaScript looks
//      for a valueOf() method. If the method exists, JavaScript calls it. If the return value is a primitive, JavaScript converts that value to a
//      string(if it is not already) and returns the converted value.
// => • Otherwise, JavaScript cannot obtain a primitive value from either toString() or valueOf(), so it throws a TypeError.

// To convert an object to a number, JavaScript does the same thing, but it tries the valueOf() method first: 
// => • If the object has a valueOf() method that returns a primitive value, JavaScript converts (if necessary) 
//      that primitive value to a number and returns the result.
// => • Otherwise, if the object has a toString() method that returns a primitive value,
//     JavaScript converts and returns the value.
// => •Otherwise, JavaScript throws a TypeError.
console.log([].valueOf());
console.log([1, 2, 3, 4, 5].valueOf());
console.log((typeof [1].valueOf()));
console.log([].toString());
console.log([1].toString());

// The details of this object-to-number conversion explain why an empty array converts
// to the number 0 and why an array with a single element may also convert to a number.
// Arrays inherit the default valueOf() method that returns an object rather than a primitive value, 
// so array-to-number conversion relies on the toString() method. Empty
// arrays convert to the empty string. And the empty string converts to the number 0. An
// array with a single element converts to the same string that that one element does.If
// an array contains a single number, that number is converted to a string, and then back
// to a number.

// The + operator in JavaScript performs numeric addition and string concatenation. 
// If either of its operands is an object, JavaScript converts the object using a special object-to-primitive conversion 
// rather than the object-to-number conversion used by the other arithmetic operators.
// The == equality operator is similar. If asked to compare an object
// with a primitive value, it converts the object using the object-to-primitive conversion.

// The object-to-primitive conversion used by + and == includes a special case for Date objects.
// The Date class is the only predefined core JavaScript type that defines meaningful conversions to both strings and numbers.
// The object-to-primitive conversion is basically an object-to-number conversion (valueof() first) for all objects that are not
// dates, and an object-to-string conversion(toString() first) for Date objects. The conversion is not exactly the same as those explained above, 
// however: the primitive value returned by valueOf() or toString() is used directly without being forced to a number
// or string.

// The < operator and the other relational operators perform object-to-primitive conversions like == does, but without the special
// case for Date objects: any object is converted by trying valueOf() first and then toString(). Whatever primitive value is obtained is
// used directly, without being further converted to a number or string. 
// The +, == , != and the relational operators are the only ones that perform this special kind of
// string-to-primitive conversions. Other operators convert more explicitly to a specified
// type and do not have any special case or Date objects. The - operator, for-example, converts its operands to numbers.
var now = new Date(); // Create a Date object
console.log(typeof(now + 1)) // => "string": + converts dates to strings
console.log(typeof(now - 1)) // => "number": - uses object-to-number conversion
console.log(now == now.toString()) // => true: implicit and explicit string conversions
console.log(now > (now - 1)) // => true: > converts a Date to a number


// ====================
// VARIABLE DECLARATION

// Before you use a variable in a JavaScript program, you should declare it. Variables are
// declared with the var keyword, like this:
var i;
var sum;

// You can also declare multiple variables with the same var keyword:
var i, sum;

// And you can combine variable declaration with variable initialization:
var message = "hello";
var i = 0,
    j = 0,
    k = 0;

// If you don’ t specify an initial value for a variable with the var statement, the variable
// is declared, but its value is undefined until your code stores a value into it.

// Note that the var statement can also appear as part of the for and
// for / in loops, allowing you to succinctly declare the loop variable as part of the loop syntax itself.For example:
for (var i = 0; i < 10; i++) console.log(i);
for (var i = 0, j = 10; i < 10; i++, j--) console.log(i * j);
for (var p in o) console.log(p);

// If you’ re used to statically typed languages such as C or Java, you will have noticed that
// there is no type associated with JavaScript’ s variable declarations. A JavaScript variable
// can hold a value of any type. For example, it is perfectly legal in JavaScript to assign a
// number to a variable and then later assign a string to that variable:
var i = 10;
i = "ten";


// =================
// Repeated and Omitted Declarations

// It is legal and harmless to declare a variable more than once with the var statement. If the repeated declaration has an initializer, 
// it acts as if it were simply an assignment statement.
// If you attempt to read the value of an undeclared variable, JavaScript generates an error.
// In ECMAScript 5 strict mode, it is also an error to assign a value to an undeclared variable. Historically, however, 
// and in non - strict mode, if you assign a value to an undeclared variable, JavaScript actually creates that variable as a property of the
// global object, and it works much like(but not exactly the same as the declared global variable) a properly declared global variable. 
// This means that you can get away with leaving your global variables undeclared. 
// This is a bad habit and a source of bugs, however, and you should always declare your variables with var statement.


// ================
// VARIABLE SCOPE.

// The scope of a variable is the region of your program source code in which it is defined.
// A global variable has global scope; it is defined everywhere in your JavaScript code. 
// On the other hand, variables declared within a function are defined only within the body
// of the function. They are local variables and have local scope. Function parameters also
// count as local variables and are defined only within the body of the
// function. Within the body of a function, a local variable takes precedence over a global variable
// with the same name. If you declare a local variable or
// function parameter with the same name as a global variable, you effectively hide the global variable:
var scope = "global"; // Declare a global variable
function checkscope() {
    var scope = "local"; // Declare a local variable with the same name
    // return scope; // Return the local value, not the global one
    console.log(scope); // Return the local value, not the global one
}
checkscope() // => "local"

// Although you can get away with not using the var statement when you write code in the global scope, you must always use
// var to declare local variables. Consider what happens if you don’t:
scope = "global"; // Declare a global variable, even without var.
function checkscope2() {
    scope = "local"; // Oops! We just changed the global variable.
    myscope = "local"; // This implicitly declares a new global variable.
    // return [scope, myscope]; // Return two values.
    console.log([scope, myscope]); // Return two values.
}
checkscope2() // => ["local", "local"]: has side effects!
scope // => "local": global variable has changed.
myscope // => 'global cz of not var - keyword.'

// Function definitions can be nested.Each function has its own local scope, so 
// it is possible to have several nested layers of local scope .For example:
var scope = "global scope"; // A global variable
function checkscope() {
    var scope = "local scope"; // A local variable
    function nested() {
        var scope = "nested scope"; // A nested scope of local variables
        return scope; // Return the value in scope here
    }
    return nested();
}
checkscope()


// ================
// Function Scope and Hoisting

// In some C - like programming languages, each block of code within curly braces has its
// own scope, and variables are not visible outside of the block in which they are declared.
// This is called block scope, and JavaScript does not have it. Instead, JavaScript uses
// function scope: variables are visible within the function in which they are defined and
// within any functions that are nested within that function.
// In the following code, the variables i, j, and k are declared in different spots, but all
// have the same scope — all three are defined throughout the body of the function:
function test(o) {
    var i = 0; // i is defined throughout function
    if (typeof o == "object") {
        var j = 0; // j is defined everywhere, not just block
        for (var k = 0; k < 10; k++) { // k is defined everywhere, not just loop
            console.log(k); // print numbers 0 through 9
        }
        console.log(k); // k is still defined: prints 10
    }
    console.log(j); // j is defined, but may not be initialized
}
test([]);

// JavaScript’ s function scope means that all variables declared within a
// function are visible throughout the body of the
// function. Curiously, this means that variables are even visible before they are declared.
// This feature of JavaScript is informally known as hoisting: JavaScript code behaves as
// if all variable declarations in a function(but not any associated assignments) are “hoisted” to the top of the
// function. Consider the following code:
var scope = "global";

function f() {
    console.log(scope); // Prints "undefined", not "global"
    var scope = "local"; // Variable initialized here, but defined everywhere
    console.log(scope); // Prints "local"
}
f();

// You might think that the first line of the function would print“ global”, because the
// var statement declaring the local variable has not yet been executed.Because of the rules of
// function scope, however, this is not what happens.The local variable is defined
// throughout the body of the function, which means the global variable by the same name
// is hidden throughout the function.Although the local variable is defined throughout,
// it is not actually initialized until the var statement is executed. Thus, the
// function above is equivalent to the following, in which the variable declaration is“ hoisted” to the top
// and the variable initialization is left where it is:
function f() {
    var scope; // Local variable is declared at the top of the function
    console.log(scope); // It exists here, but still has "undefined" value
    scope = "local"; // Now we initialize it and give it a value
    console.log(scope); // And here it has the value we expect
}

// In programming languages with block scope, it is generally good programming practice
// to declare variables as close as possible to where they are used and with the narrowest
// possible scope.Since JavaScript does not have block scope, some programmers make
// a point of declaring all their variables at the top of the
// function, rather than trying to declare them closer to the point at which they are used. This technique makes their
// source code accurately reflect the true scope of the variables.

// ==================
// Variables As Properties

// When you declare a global JavaScript variable, what you are actually doing is defining
// a property of the global object.If you use var to declare the variable, the property
// that is created is nonconfigurable, which means that it cannot be deleted
// with the delete operator. We’ ve already noted that if you’ re not using strict mode and
// you assign a value to an undeclared variable, JavaScript automatically creates a global
// variable for you.Variables created in this way are regular, configurable properties of
// the global object and they can be deleted:
var truevar = 1; // A properly declared global variable, nondeletable.
fakevar = 2; // Creates a deletable property of the global object.
this.fakevar2 = 3; // This does the same thing.
delete truevar // => false: variable not deleted
delete fakevar // => true: variable deleted
delete this.fakevar2 // => true: variable deleted

// JavaScript global variables are properties of the global object, and this is mandated by
// the ECMAScript specification.There is no such requirement for local variables, but
// you can imagine local variables as the properties of an object associated with each
// function invocation.The ECMAScript 3 specification referred to this object as the“ call
// object, ”and the ECMAScript 5 specification calls it a“ declarative environment record.”
// JavaScript allows us to refer to the global object with the (this) keyword, but it does not
// give us any way to refer to the object in which local variables are stored.The precise
// nature of these objects that hold local variables is an implementation detail that need
// not concern us.The notion that these local variable objects exist, however, is an important one, 
// and it is developed further in the next section.


// ================
// The Scope Chain.

// JavaScript is a lexically scoped language: the scope of a variable can be thought of as the set of source code lines
// for which the variable is defined.Global variables are defined throughout the program. Local variables are defined throughout the
// function in which they are declared, and also within any functions nested within that function.
// If we think of local variables as properties of some kind of implementation - defined
// object, then there is another way to think about variable scope.Every chunk of JavaScript code(global code or functions) 
// has a scope chain associated with it. This scope chain is a list or chain of objects that defines the variables that are“ in scope”
// for that code. When JavaScript needs to look up the value of a variable x(a process called variable resolution), 
// it starts by looking at the first object in the chain.If that object has
// a property named x, the value of that property is used.If the first object does not have
// a property named x, JavaScript continues the search with the next object in the chain.
// If the second object does not have a property named x, the search moves on to the next
// object, and so on.If x is not a property of any of the objects in the scope chain, then
// x is not in scope for that code, and a ReferenceError occurs.

// In top - level JavaScript code(i.e., code not contained within any function definitions),
// the scope chain consists of a single object, the global object.In a non - nested function,
// the scope chain consists of two objects.The first is the object that defines the
// function’ s parameters and local variables, and the second is the global object.In a nested
// function, the scope chain has three or more objects.It is important to understand how this chain
// of objects is created. When a function is defined, it stores the scope chain then in effect.
// When that function is invoked, it creates a new object to store its local variables, and
// adds that new object to the stored scope chain to create a new, longer, chain that
// represents the scope for that function invocation. This becomes more interesting
// for nested functions because each time the outer function is called, the inner
// function is defined again.Since the scope chain differs on each invocation of the outer
// function, the inner function will be subtly different each time it is defined— the code of the inner
// function will be identical on each invocation of the outer function, but the scope chain
// associated with that code will be different. This notion of a scope chain is helpful
// for understanding the with statements and is crucial for understanding closures.