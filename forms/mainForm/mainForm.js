

let i = alert('Let\'s calculate your loan payments! Are you ready?');
for (i=0; i = true) {
let x = prompt('What is the amount of your loan?');
let yOne = prompt('What is the interest rate on your loan?');
let z = prompt('How many months is this loan for?');
let y = ((Number(yOne)/ 100)/12);
let choice = prompt('Which would you like to calculate? Input car for car loan payments or home for home loan payments');
if (choice= 'car') {
alert(`A car loan payment for \$${x} over ${z} months at a rate of ${yOne} percent is \$${carLoanPayment(Number(x), Number(y), Number(z)).toFixed(2)}.`);
}
else if (choice= 'home') {
alert(`A home loan payment for \$${x} over ${z} months at a rate of ${yOne} percent is \$${homeLoanPayment(Number(x), Number(y), Number(z)).toFixed(2)}.`);
}
else {
  alert(`Oops, ${choice} is not home or car.`)
  }
}
