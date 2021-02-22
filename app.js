var values = [10, 50, 100, 500, 1000];
    var prices = [8, 12, 16, 24, 36];
    var price = document.getElementById("price");
    var input = document.getElementById('input');
    output = document.getElementById('output');
    var percentToGet = 25;
    var percent = (percentToGet / 100) * prices[this.value];
    var ProgressBar = document.getElementById("ProgressBar");
    
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });
   
    input.oninput = function() {
      output.innerHTML = values[this.value] + "K";
      price.innerHTML = formatter.format(prices[this.value]);
         price.innerHTML = formatter.format(prices[this.value] - (percentToGet / 100) * prices[this.value]); 
      
      ProgressBar.style.width = 
     this.value * 25 + "%";
    if(document.getElementById("toggle").checked === true){
     price.innerHTML = formatter.format(prices[this.value] - (percentToGet / 100) * prices[this.value]);
  }
    else {
    price.innerHTML = formatter.format(prices[this.value]);
    
    }
  }
    input.oninput();  
