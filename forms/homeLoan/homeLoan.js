
function homeLoanPayment (x, y, z) {
  return x( y*(1 + y)^z) / ((1 + y)^z - 1);
  }