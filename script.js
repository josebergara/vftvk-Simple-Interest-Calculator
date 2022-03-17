function compute() {
    //Obtener los valores y calcular
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principal * years * rate) / 100;
    var year = new Date().getFullYear() + parseInt(years);
  
    //Crear texto final
    if (principal <= 0) {
      document.getElementById("result").innerHTML =
        "Please, enter a positive Number.";
    } else {
      document.getElementById("result").innerHTML =
        "If you deposit " +
        principal +
        ",<br>at an interest rate of " +
        rate +
        "%<br>You will receive an amount of " +
        interest +
        ",<br>in the year " +
        year +
        "<br>";
    }
  }
  
  //Función Tasa de Interes
  
  function getSliderValue() {
    document.getElementById("rateSpan").innerHTML = document.getElementById(
      "rate"
    ).value;
  }
        