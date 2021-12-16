/*
Java Script Syntax and Operators
    -switch statements
        - use instead of multiple if/else statments
        - switch(<expression>){
            case <expression 1>:
               //statements
               break;
            case <expression 2>:
               //statments
               break;
            default: //if no other case is matched
               //statements
               break;
        }
        -- can have multiple case statments

    - for/in,for/of loops
        - for/in - iterates over the elements of an object
    - for/of loop
        - iterates over values in array, string, etc.  
    - break
        - used with if statements to break out of the loop if conditions are met
    - continue
        - also used with if statments if condition is met it will skip it and continue with the rest of the statements
    - labeled statement
        - define a location to "goto"
        - label: used in a loop when you use continue it will take you back to the label and drop you into loop again.
        - recommended to not use

    - math/ comparison operators & use strict
        - math
            -> +,-,*,/,**,%,++,--
        - assignment
            -> =,+=,-=,*=,/=,**=,%=
        - comparison
            -> <,<=,>,>=,==,===,!=,!==
        - ternary
            -> result = price < 50 ? if statement : else statement
        - 'use strict'
            - ignored by old browsers
            - force all variables to be declared with var, let, const
            -> cant use reserved words as variables, and delete variables or functions 
        
    - logical operators and short-circuit evaluation
        - true
            - any variable with a value or a boolean true
        - false
            - any variable = false, null, undefined, NaN
        - logical operators
            -> &&,||,!
        - short circuiting
            - &&
                -
            -||
                -
        - order of precedence
            -> grouping (())
                -> not (!)
                    -> multiplication(*)
                        -> division (/)
                            -> modulus (%)
                                -> addition (+)
                                    -> subtraction (-)
                                        -> less than (<)
                                            -> less than or equal (<=)
                                                -> 
    
    - handling exceptions
        - try catch & finally blocks 
            - if the try block is true it will run the code inside the block
            - if its false then the catch block will catch an error
            - the finally block will always run but is optional
        - throw
            - custom error blocks
            - create object and two properties
                -message
                -name
        - types of errors
            - ReferenceErr - variable not defined
            - RangeErr - error caused in numeric value
            - TypeErr - error in type
            - URIerr - URI has invalid characters or incorrect format
            - SyntaxErr - wrong syntax
            - EvalErr (not used anymore)

    - determine data types    
        - data types
            - string, number, boolean, null, undefined
        - object data types
            - new Array, new Error, new Function, new Object, new RegExp
            - new Boolean, new Number, new String
        - typeof operator
            - returns the data type of passing in expression
        - object data type/ Constructor
            - 
        - instanceOf operator
            - tests for specific type of object or an object it self 
        - constructor 

    - 'this'
        - refers to an object in which current code is running
        - global scope 
        - function scope
        - 'use strict'
        - event handlers 
        - object litteral
        - call()
        - apply()
        - constructor functions
    - spread operator
        - expands any iterable such as a string or array into an array
        - passing multiple arguments into a method
        - always on the right hand side of equal sign
        - IE and edge don't support spread

        -convert string to array
            - let values = [... productNumber]
                - iterates over product number and puts each value in the array
        - copy an array
            - let arr = [1,2,3]
            - let arr2 = [...arr]
        - copy an array with objects inside
        - concatanate two arrays together
        - in a constructor
        - function arguments
        - shallow copy on object litterals

    - functions
        - argument - value passed into the function when invoked
        - parameter - variable we list as part of function declaration
        -immediately invoked function expression (IIFE)
        - closures
            - storing values in variables when function is closed
        - arrow functions
            - behavior of this
                - this - refers to the owner of the function we are executing
                    - console logging this refers to the entire object
        
        - call method
            - accepts list of argument and calls objects
            - use with individual arguments or varying type
        - apply method
            - accepts an array calls single array of objects
            - use with arrays with similar elements
        - bind method
            - 
        - built in functions
            - eval
                - evaluates the variables
                - will concatanate if a string is present in the variables
            - parseInt
            - parseFloat
            - escape
        - spread and rest parameters
            - default parameters
                - should appear after any additional parameters
            - rest parameters
                - ...variable as parameter
                - lets you use multiple parameters 
            - spread operator
                - same syntax as rest but rather than being a parameter its in an argument of the fucntion being invoked
                
    - promises and async 
        - promise
            - object that represents the eventual completion or failure of an async operation and its resulting value
            - states
                - pending - when promise is first created
                - fulfilled - async call is completed successfully
                - rejected - async call has failed, similar to catch function
                - settled or resolved
            - creating own promise
                - let promise = new Promise((resolve, reject) => {})
            - queue promises
                - all - will wait till all promises are fulfilled
                - allSettled - will wait till all promises are fulfilled or settled
                - race - fasted promised settled
        - async/await
            - async
                - keyword used to designate if a function is async
            - await
                - pauses the async function and waits till the promise is fulfilled
                - must be used inside async 
                - only blocks current function
        
*/