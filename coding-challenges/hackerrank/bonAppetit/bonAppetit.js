// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
  let sum = 0;

  // Traverse through the bill array
  for (let i = 0; i < bill.length; i++) {
    // Only add to the items if bill index is not equal to the mentioned index
    if (i != k) {
      sum += bill[i];
    }
  }

  // Check if anna overpaid Brain
  if (sum / 2 === b) {
    console.log("Bon Appetit");
  } else {
    console.log(Math.abs(b - sum / 2));
  }
}
