// When the "Calculate Change" button is clicked, run the calculateChange function
document.getElementById('calculate-change').addEventListener('click', calculateChange);

function calculateChange() {
  // Get the input values for sale amount and amount received
  const saleAmount = parseFloat(document.getElementById('amount-due').value);
  const amountReceived = parseFloat(document.getElementById('amount-received').value);

  // Validate input: Ensure both are numbers and amount received is not less than sale amount
  if (isNaN(saleAmount) || isNaN(amountReceived) || amountReceived < saleAmount) {
    alert('Please enter valid amounts. Amount received must be at least equal to the sale amount.');
    return;
  }

  // Convert the change to cents and round to avoid floating point issues.
  let change = Math.round((amountReceived - saleAmount) * 100);

  // Store total change in dollars for display
  const totalChange = (change / 100).toFixed(2);

  // Check if $2 bills should be used (based on checkbox)
  const useTwoDollarBills = document.getElementById('use-2-dollar')?.checked ?? true;

  // Calculate large bills
  const bills100 = Math.floor(change / 10000); change %= 10000;    // $100 bills
  const bills50 = Math.floor(change / 5000); change %= 5000;    // $50 bills
  const bills20 = Math.floor(change / 2000); change %= 2000;    // $20 bills
  const bills10 = Math.floor(change / 1000); change %= 1000;    // $10 bills
  const bills5 = Math.floor(change / 500); change %= 500;    // $5 bills

  // Conditionally calculate $2 bills if enabled
  const bills2 = useTwoDollarBills ? Math.floor(change / 200) : 0;
  if (useTwoDollarBills) change %= 200;

  // Remaining dollars
  const dollars = Math.floor(change / 100); change %= 100;     // $1 bills

  // Calculate coins
  const quarters = Math.floor(change / 25); change %= 25;    // quarters
  const dimes = Math.floor(change / 10); change %= 10;    // dimes
  const nickels = Math.floor(change / 5); change %= 5;    // nickels
  const pennies = change;    // pennies

  // Total number of dollar bills (including all denominations)
  const totalDollarBills = bills100 + bills50 + bills20 + bills10 + bills5 + bills2 + dollars;

  // Update paragraph elements with the output values
  document.getElementById('dollars-output').innerText = totalDollarBills;
  document.getElementById('quarters-output').innerText = quarters;
  document.getElementById('dimes-output').innerText = dimes;
  document.getElementById('nickels-output').innerText = nickels;
  document.getElementById('pennies-output').innerText = pennies;

  // Optional detailed output section with all denominations
  const output = document.getElementById('change-output');
  output.innerHTML = `
    <div><strong>Total Change: $${totalChange}</strong></div>
    <div>$100 Bills: ${bills100}</div>
    <div>$50 Bills: ${bills50}</div>
    <div>$20 Bills: ${bills20}</div>
    <div>$10 Bills: ${bills10}</div>
    <div>$5 Bills: ${bills5}</div>
    <div>$2 Bills: ${bills2}</div>
    <div>$1 Bills: ${dollars}</div>
    <div>Quarters: ${quarters}</div>
    <div>Dimes: ${dimes}</div>
    <div>Nickels: ${nickels}</div>
    <div>Pennies: ${pennies}</div>
  `;
}
