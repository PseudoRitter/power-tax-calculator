var calculateTax = function() {

  let i = 0;
  let currentDate = new Date();
  let releseDate = new Date(document.getElementById("releseDate").value);
  let registrationDate = new Date (document.getElementById("registrationDate").value);
  let price = parseInt( document.getElementById("price").value );
  let power = parseInt( document.getElementById("power").value );
  let taxRate = 0;
  let multiplyingFactor = 1;
  let monthRegistration = registrationDate.getMonth() + 1;
  let array = [[0],[0],[0]];
  let tax;
    
  if(power <= 100) taxRate = 8;
  if(power > 100 && power <= 150) taxRate = 14;
  if(power > 150 && power <= 200) taxRate = 28;
  if(power > 200 && power <= 250) taxRate = 47;
  if(power > 250 ) taxRate = 110;
  console.log(monthRegistration);

  let year = 0;
  year =currentDate.getFullYear() - releseDate.getFullYear() + 1 
  if (price > 10000000 && price <= 15000000 && year <= 10){
    multiplyingFactor = 3;
}
  if (price > 15000000 && year <= 20){
    multiplyingFactor = 3;
  }
  console.log(year)
  console.log(currentDate.getFullYear())
  console.log(registrationDate.getDate())
  
  if(registrationDate.getDate() <= 15) monthRegistration = monthRegistration - 1;

  tax = taxRate * power * ((12 - monthRegistration) / 12) * multiplyingFactor;
  console.log(monthRegistration);

  for( let j = 3; j <= 9; j = j + 3 ){
    if(monthRegistration - j < 0){
      console.log(monthRegistration - j);
      array[i] = 0.25 * taxRate * power * (( j - monthRegistration ) / 3 ) * multiplyingFactor;
      console.log(monthRegistration);
      monthRegistration = j;
      i++;
    }else{
      array[i] = 0;
      i++;
    }
  }

  tax = tax - array[0] - array[1] - array[2];

  document.getElementById("tax").value = `Первый авансовый платеж = ${array[0]} \n` +
  `Второй авансовый платеж = ${array[1]} \n` +
  `Третий авансовый платеж = ${array[2]} \n` +
  `Транспортный налог = ${tax}`;
}

window.onload = function () {
  document.getElementById("calculate").onclick = calculateTax;
}

