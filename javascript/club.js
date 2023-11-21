//Clubcard Validator
//Programming challenge description:
///Clubcard numbers can be validated using the following algorithm:

//From the rightmost digit(which is called the check digit), working left, double the value of every second digit.
//The check digit is not doubled; the first digit doubled is immediately to the left of the check digit.
//For each digit that you double, if the result of this doubling operation is greater than 9(e.g., 8 × 2 = 16),
//then subtract 9 from the result(e.g., 16: 16 − 9 = 7, 18: 18 − 9 = 9).
//Take the sum of all the digits after step 2, both those you have doubled and those unchanged.
//If the total modulo 10(remainder after dividing by 10) is equal to 0 then the number is valid according to the algorithm;
 //otherwise it is not valid.
//Write a program that will validate Clubcard numbers using this algorithm and indicate the result.

  //Input:
//A single line of input containing a string in the format of a potential Clubcard number

Output:
The string ‘True’ if the input is a valid Clubcard number
The string ‘False’ if the input is NOT a valid Clubcard number
Test 1
Test Input
Download Test 1 Input
346088187380157
Expected Output
Download Test 1 Output
True


Test 2
Test Input
Download Test 2 Input
4916283358950480
Expected Output
Download Test 2 Output
True


Test 3
Test Input
Download Test 3 Input
5454411550469035
Expected Output
Download Test 3 Output
False


Test 4
Test Input
Download Test 4 Input
4518377421351212
Expected Output
Download Test 4 Output
False
