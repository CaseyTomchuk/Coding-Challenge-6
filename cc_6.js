// Task 1: Function Declaration

function calculateProfit(costPrice, sellingPrice, unitsSold) { // Defining variables
    let profit = (sellingPrice - costPrice) * unitsSold; // Defining profit and writing the formula to calculate it
    return profit
}
console.log(`Profit: ${calculateProfit(100,150,15)}`); // Output: 750
console.log(`Profit: ${calculateProfit(12,20,150)}`); // Output: 1200