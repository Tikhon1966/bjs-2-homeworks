"use strict"

function solveEquation(a, b, c) {
	let arrSolution = [];
	let discriminant = (b ** 2 - 4 * a * c);
	if (discriminant === 0) {
		arrSolution[0] = (-b / (2 * a));
	} else if (discriminant > 0) {
		arrSolution[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
		arrSolution[1] = (-b - Math.sqrt(discriminant)) / (2 * a);
	} else {}
	return arrSolution;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let currentRate = percent / 100 / 12;
	let loanBody = amount - contribution;
	let monthPayment = loanBody * (currentRate + (currentRate / ((Math.pow((1 + currentRate), countMonths)) - 1)));
	let totalAmount = monthPayment * countMonths;
	totalAmount = totalAmount.toFixed(2);
	let currentTotalAmount = parseFloat(totalAmount);
	return currentTotalAmount;
}