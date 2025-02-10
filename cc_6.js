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

// Task 4: Parameters and Arguments

function calculateSubscriptionCost(plan, months, discount = 0) {
    let plans = { // Creating an object to store the types of plans and their cost
        "Basic": 10,
        "Premium": 20,
        "Enterprise": 50
    };
    let subscription = (plans[plan] * months) - discount; // Multiply the cost of the monthly plan by the number of months, and subtract the discount
    return (`Total Cost: ${subscription}`)
}
console.log(calculateSubscriptionCost("Basic", 6, 10)); // Expected output: "Total Cost: $50"
console.log(calculateSubscriptionCost("Premium", 12, 0)); // Expected output: "Total Cost: $240"

// Task 5: Returning Values

function convertCurrency(amount, exchangeRate) { 
    let conversion = (amount * exchangeRate); // Simple formula to calculate converted currency
    return (`Converted Amount: $${conversion}`);
}
console.log(convertCurrency(100, 1.1)); // Expected output: "Converted Amount: $110.00" 
console.log(convertCurrency(250, 0.85)); // Expected output: "Converted Amount: $212.50"

// Task 6: Higher-Order Functions

let orders = [200, 600, 1200, 450, 800];
let applyBulkDiscount = (orders, discountFunction) => {
    return orders.map(order => discountFunction(order));  // Applying the discount function to each indiviudal order
};

let discountFunction = amount => amount > 500 ? amount * 0.9 : amount; // Simplfying an if else statement into a single line

let updatedOrders = applyBulkDiscount(orders, discountFunction);
console.log(updatedOrders);  // Expected output: [200, 540, 1080, 450, 720]