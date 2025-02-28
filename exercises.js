'use strict'

document.addEventListener('DOMContentLoaded', function () {
    console.log('CONTENT LOADED');
    // ---------------------
    // Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
    // myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
    // ---------------------

    // Put your answer below -------------------------
    
    function func1 (string, integer){
        const arr = [];
        for (let i = 0; i < integer; i++){
            arr.push(string);    
        }; 
        return arr;
    };
    console.log("#1", func1("hi", 30));
    // -----------------------------------------------

    // ---------------------
    // Define a function that takes an array and reverses all the values in an array
    // The function should not mutate the original array
    // ---------------------

    // Put your answer below -------------------------
    function func2 (arr){
        let arrNew = [...arr].reverse();
        return arrNew;
    };
    console.log("#2", func2(["a","b","c"]));
    // -----------------------------------------------

    // ---------------------
    // Define a function that takes an array and removes all falsy values from the array
    // ---------------------

    // Put your answer below -------------------------
    function func3 (arr){
        return arr.filter(Boolean);
    };
    console.log("#3", func3([null,0,2,undefined,"","hi",0n,-0,NaN,false,document.all, true, 1]));
    // -----------------------------------------------

    // ---------------------
    // Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
    // const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
    // returns { name: 'Charlie', color: 'brown', age: 10 };
    // ---------------------

    // Put your answer below -------------------------
    function func4 (arr){

    }
    console.log("#4", func4());
    // -----------------------------------------------

    // ---------------------
    // Define a function that takes an array and removes duplicate values
    // [1,2,3,4,5,4,3] should return [1,2,3,4,5]
    // ---------------------

    // Put your answer below -------------------------

    // -----------------------------------------------

    // ---------------------
    // Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
    // [1,2,3,4] and [1,2,3,4] should return true
    // [1,2,3,4,5] and [1,2,3,4] should return false
    // [1,2,3,4] and [1,2,3,4,4] should return false
    // [1,2,3,4] and [1,4,3,2] should return true
    // ---------------------

    // Put your answer below -------------------------

    // -----------------------------------------------

    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    //            ___  ____  _  ____  ______        //
    //           / _ )/ __ \/ |/ / / / / __/        //
    //          / _  / /_/ /    / /_/ /\ \          //
    //         /____/\____/_/|_/\____/___/          //
    //                                              //
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////

    // ---------------------
    // Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
    // [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
    // [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
    // DO NOT USE Array.prototype.flat()
    // ---------------------

    // Put your answer below -------------------------

    // -----------------------------------------------

    // ---------------------
    // Define a function that takes an array and splits it into parts of size i
    // ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
    // ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
    // ---------------------

    // Put your answer below -------------------------

    // -----------------------------------------------
});