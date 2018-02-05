function handleClickEvent(){
    
    var amtReceived = parseFloat(document.getElementById('amount-received').value);
    var amtDue = parseFloat(document.getElementById('amount-due').value);
    var amtChange = (amtReceived - amtDue) * 100.0;
    
    if (amtChange < 0){
      var amtDollars = 'false';
      var amtQuarters = 'false';
      var amtDimes = 'false';
      var amtNickels = 'false';
      var amtPennies = 'false';
    } else {
    var amtDollars = parseInt(amtChange / 100);                amtChange %= 100;
    var amtQuarters = parseInt(amtChange / 25);                amtChange %= 25;
    var amtDimes = parseInt(amtChange / 10);                   amtChange %= 10;
    var amtNickels = parseInt(amtChange / 5);                  amtChange %= 5;
    var amtPennies = Math.round(amtChange);
    }
    
    document.getElementById('dollars').innerText = amtDollars;
    document.getElementById('quarters').innerText = amtQuarters;
    document.getElementById('dimes').innerText = amtDimes;
    document.getElementById('nickels').innerText = amtNickels;
    document.getElementById('penny').innerText = amtPennies;
    
    
  }