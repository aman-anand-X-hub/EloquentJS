// Currently, the only way to assign a binding a value is define. This construct acts as a way both to define new bindings and to give existing ones a new value.

// This ambiguity causes a problem. When you try to give a nonlocal binding a new value, you will end up defining a local one with the same name instead. Some languages work like this by design, but I’ve always found it an awkward way to handle scope.

// Add a special form set, similar to define, which gives a binding a new value, updating the binding in an outer scope if it doesn’t already exist in the inner scope. If the binding is not defined at all, throw a ReferenceError (another standard error type).

// The technique of representing scopes as simple objects, which has made things convenient so far, will get in your way a little at this point. You might want to use the Object.getPrototypeOf function, which returns the prototype of an object. Also remember that you can use Object.hasOwn to find out if a given object has a property

specialForms.set = (args, env) => {
    if (args.length != 2 || args[0].type != "word") {
      throw new SyntaxError("Bad use of set");
    }
    let varName = args[0].name;
    let value = evaluate(args[1], env);
  
    for (let scope = env; scope; scope = Object.getPrototypeOf(scope)) {
      if (Object.hasOwn(scope, varName)) {
        scope[varName] = value;
        return value;
      }
    }
    throw new ReferenceError(`Setting undefined variable ${varName}`);
  };
  
  run(`
  do(define(x, 4),
     define(setx, fun(val, set(x, val))),
     setx(50),
     print(x))
  `);
  run(`set(quux, true)`);