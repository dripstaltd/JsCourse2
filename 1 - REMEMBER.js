//-|                                             ;
//-|            PRIMITIVE DATA TYPES             ;
//-|             {Primitive Types}               ;
//-|                                             ;
//: Stored in execution context <= call stack    ;
//-|                                             ;
//> 1. Number                                    ;
//> 2. String                                    ;
//> 3. Boolean                                   ;
//> 4. Undefined                                 ;
//> 5. Null                                      ;
//> 6. Symbol                                    ;
//> 7. BigInt                                    ;
//>                                              ;
//-|                                             ;
//-|                 OBJECTS                     ;
//-|            {Reference Types}                ;
//-|                                             ;
//: Stored in the Heap, referenced in  call stack;
//>                                              ;
//> 1. Object Literal                            ;
//> 2. Arrays                                    ;
//> 3. Functions                                 ;
//> 4. Many more ?                               ;
//>                                              ;
//* These are stored in the memory differently   ;
//-|                                             ;
//-|           Prototype Inheritance             ;
//-|                                             ;
//>   {Object Oriented Programming OOP With J}   ;
//> 1. ;
//> 2. ;
//> 3. ;
//-|                                             ;
//-|                EVENT LOOP                   ;
//-|         {Asynchronous JavaScript}           ;
//-|                                             ;
//> 1. Promises = ;
//> 2. Async/Await = ;
//> 3. AJAX = ;
//-|                                             ;
//-|         How the DOM Really Works            ;
//-|              {DOM & EVENTS}                 ;
//-|                                             ;
//> 1. ;
//> 2. ;
//-|                                               ;
//-|               ARRAY METHODS                   ;
//-|                                               ;
//-|                                               ;
//>      SLICE: Doesn't effect the original arr    ;
//:    EXAMPLE: arr.slice(1, -2)                   ;
//>     SPLICE: Mutates original arr               ;
//:    EXAMPLE: arr.splice(1, 2)                   ;
//>    REVERSE: Reverses the original arr          ;
//:    EXAMPLE: arr2.reverse()                     ;
//>     CONCAT: Combines 2 arrays togethether      ;
//:    EXAMPLE: arr.concat(arr2)                   ;
//: ...EXAMPLE: [...arr, ...arr2]                  ;
//>       JOIN: Creates a string from an array     ;
//:    EXAMPLE: arr.join(' - ')                    ;
//>                                                ;
// RUST KEY:
// K6KRV24-LLAAJMM-X7U3AKK-E6YEZKQ
////////////////
/*.:|REGION|:.*/
////////////////
//-|                                               ;
//-|          MAP - FILTER - REDUCE                ;
//-|                                               ;
//-|                                               ;
//>    MAP: Creates a new arr based on original arr;
//>       : Takes the arr, loops and applies Call  ;
//>       : Back function, that we specify         ;
//:EXAMPLE: arr.map(mov => mov * eurToUsd)   ;
//:EXAMPLE: arr.map((current, index, entire arr)=>);
//> FILTER: Only elements that pass our conditions ;
//>       : are returned in the new array          ;
//:EXAMPLE: arr.filter(current => current < 0)                ;
//> REDUCE: Boils ('reduces') all array elements   ;
//>       : down to one value, adding them together;
//:EXAMPLE: arr.reduce(acc + current)              ;
//>                                                ;

//-| FILTER: returns all the elements matching conditions;
//-| FILTER: then creates a new array                    ;
//-|   FIND: returns the first one                       ;
//-|   FIND: then returns the element itself (no array)  ;

//-|                 Object Oriented Programming                 ;
//>  -  Abstraction:                                             ;
/*     
      Ignoring or hiding details that don't matter, allowing us
      to get an OVERVIEW perspective of things we're implementing
      instead of messing with details that don't really matter to 
      our implementation 
*/
//>  -  Encapsulation:                                           ;
/*
      Keeping properties and methods PRIVATE inside the class, so
      they are NOT ACCESSIBLE FROM OUTSIDE THE CLASS. Some methods
      can be exposed as a public interface (API).
*/
//>  -  Inheritance                                              ;
/*
      Making all properties and methods of a class available to a
      child class, that forms a hierarchical relationship between
      classes. This allows us to reuse common logic and to model
      real-world relationships.
*/
//>  -  Polymorphism                                             ;
/*
        A child class can overwrite a method it inherited from a
        parent class [ it's more complex than this ].
*/

// UD5YY2R-UWLL8U9-523U8U3-FWQKKVA

// PRIME: DNQ37-T5UXQ-9UJGU-F8WAB
