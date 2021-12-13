/**
 * Prompt: Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
 * 
 * Example: arr = [1,3,5,7,9]
 * The minimum sum is 1 + 3 + 5 + 7 = 16 and the maximum sum is 3 + 5 + 7 + 9 = 24. The function prints "16 24"
 */

 require('process');
 const readline = require('readline')
 const rl = readline.createInterface({
     input: process.stdin,
     output: process.stdout,
     terminal: false
 })

 process.stdin.setEncoding('utf8')
 rl.question('enter 5 integers separated by one space ', input => {
     const arr = input.toString().split(' ').map(Number)
 
     console.log(miniMaxSum(arr))
     process.exit()
 })

 // Solution below:

 function miniMaxSum(arr) {
    const minInt = Math.min(...arr);
    const maxInt = Math.max(...arr);
    
    const totalSum = arr.reduce((acc, int) => {
            return acc + int
    })
    
    return (`${totalSum - maxInt} ${totalSum - minInt}`)
}
