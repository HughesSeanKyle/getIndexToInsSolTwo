/*
Basic Algorithm Scripting: Where do I BelongPassed
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

*/

//Solution Two
function getIndexToIns(arr, num) {                                        //1
  // Find my place in this sorted array.
    // runs the for loop once for each thing in the array
  var times = arr.length;                                                 //2
  var count = 0;                                                          //3
  for (var i = 0; i < times; i++) {                                       //4
    if (num > arr[i]) {                                                   //5
      count++;                                                            //6
    }
  } // counts how many array numbers are smaller than num
  return count; // the above equals num's position in a sorted array      //7
}
  
console.log(getIndexToIns([5, 3, 20, 3], 5));
//Output = 2 
 
 



//Notes
/*
//1
Function which takes in two arguments:
  Arg1 = an Array
  Arg2 = a Number

//2 
variable set equal to the length of the array. In this case it is 4

//3
variable set equal to zero

//4, //5, //6
The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement (usually a block statement) to be executed in the loop.

[initialization];   = var i = 0;
[condition];        = i < times;
[final-expression]  = i++

The for loop will start at the zero index of the array and will run for the length of the array - 1 (Or equivalent i < times ). 

The if condition will check if the num input is greater than each element in the array and if it is the count variable will increment. Simultaneously, the count increment will also identify the "Slot" or index where the num input belongs. 

//7
will return the count variable with the appropriate "slot" or index as it would appear in a sorted array.

*/

