
function homeLoanPayment (x, y, z) {
  return (x * ( y* Math.pow((1 + y), z)) / (Math.pow((1 + y), z) - 1));
  }