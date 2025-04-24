
document.getElementById('calculate-change').addEventListener('click', calculateChange);

function calculateChange() {
  const saleAmount = parseFloat(document.getElementById('amount-due').value);
  const amountReceived = parseFloat(document.getElementById('amount-received').value);

  if (isNaN(saleAmount) || isNaN(amountReceived) || amountReceived < saleAmount) {
    alert('Please enter valid amounts. Amount received must be at least equal to the sale amount.');
    return;
  }

  let change = Math.round((amountReceived - saleAmount) * 100);
  const totalChange = (change / 100).toFixed(2);
  const useTwoDollarBills = document.getElementById('use-2-dollar')?.checked ?? true;

  //const bills100 = Math.floor(change / 10000); change %= 10000;
  //const bills50 = Math.floor(change / 5000); change %= 5000;
  //const bills20 = Math.floor(change / 2000); change %= 2000;
  //const bills10 = Math.floor(change / 1000); change %= 1000;
  //const bills5 = Math.floor(change / 500); change %= 500;
  //const bills2 = useTwoDollarBills ? Math.floor(change / 200) : 0;
  //if (useTwoDollarBills) change %= 200;

  const dollars = Math.floor(change / 100); change %= 100;
  const quarters = Math.floor(change / 25); change %= 25;
  const dimes = Math.floor(change / 10); change %= 10;
  const nickels = Math.floor(change / 5); change %= 5;
  const pennies = change;

  
  //const totalDollarBills = bills100 + bills50 + bills20 + bills10 + bills5 + bills2 + dollars;

  
  document.getElementById('dollars-output').innerText = dollars;
  document.getElementById('quarters-output').innerText = quarters;
  document.getElementById('dimes-output').innerText = dimes;
  document.getElementById('nickels-output').innerText = nickels;
  document.getElementById('pennies-output').innerText = pennies;

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
