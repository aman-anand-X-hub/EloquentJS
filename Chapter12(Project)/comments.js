// It would be nice if we could write comments in Egg. For example, whenever we find a hash sign (#), we could treat the rest of the line as a comment and ignore it, similar to // in JavaScript.

// We do not have to make any big changes to the parser to support this. We can simply change skipSpace to skip comments as if they are whitespace so that all the points where skipSpace is called will now also skip comments. Make this change.


function skipSpace(string) {
    
    let skippable = string.match(/^(\s|#.*)*/);
    return string.slice(skippable[0].length);
}

function parse(program) {

    let result = { expression: program, rest: '' };

    if (skipSpace(result.rest).length > 0) {
        throw new SyntaxError("Unexpected text after program");
    }

    return result.expression;
}

console.log(parse("# hello\nx"));

console.log(parse("a # one\n   # two\n()"));
