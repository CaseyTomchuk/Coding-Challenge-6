// Task 1: Function Declaration

function calculateProfit(costPrice, sellingPrice, unitsSold) { // Defining variables
    let profit = (sellingPrice - costPrice) * unitsSold; // Defining profit and writing the formula to calculate it
    return profit
}
console.log(`Profit: $${calculateProfit(100,150,15)}`); // Profit: $750
console.log(`Profit: $${calculateProfit(12,20,150)}`); // Profit: $1200

// Task 2: Function Expression

function calculateSalesTax(amount, taxRate) { // Same structure as task 1
    let salesTax = amount * taxRate;
    return salesTax
}
console.log(`Sales Tax: $${calculateSalesTax(100, 0.05)}`); // Sales Tax: $5
console.log(`Sales Tax: $${calculateSalesTax(150, 0.1)}`); // Sales Tax: $15

// Task 3: Arrow Function
let calculateBonus = (salary, performanceRating) => { // Takes in the inputs salary, performanceRating
    let bonusRatings = { //Creating an object to store the possible bonus ratings
        "Excellent": 0.2,
        "Good": 0.1,
        "Average": 0.05
    };
    let bonus = salary * (bonusRatings[performanceRating]); // Multiplies the salary by the bonus, with the bonus defined by the performance rating
    return (`Bonus: $${bonus}`);
}
console.log(calculateBonus(5000, "Excellent")); // Bonus: $1000
console.log(calculateBonus(7500, "Average")); // Bonus: $375