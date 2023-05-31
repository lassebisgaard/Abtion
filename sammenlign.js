
    const cars = [
        {bilmodel: "Mercedes", brændstof: "Gasoline", Pris: "$10,000", CO2: "100 g/km", Forbrug: "8 L/100km", kmh: "180 km/h", Tophastighed: "220 km/h", Rækkevidde: "500 km", Kapacitet: "5 persons"},
        {bilmodel: "Mercedes", brændstof: "Gasoline", Pris: "$10,000", CO2: "100 g/km", Forbrug: "8 L/100km", kmh: "180 km/h", Tophastighed: "220 km/h", Rækkevidde: "500 km", Kapacitet: "5 persons"}
        ];
  

      var table = document.getElementById("carTable");
  

      var headerRow = table.insertRow();
      for (var property in cars[0]) {
        var th = document.createElement("th");
        th.textContent = property;
        headerRow.appendChild(th);
      }
  

      for (var i = 0; i < cars.length; i++) {
        var car = cars[i];
        var row = table.insertRow();
        for (var property in car) {
          var cell = row.insertCell();
          cell.textContent = car[property];
        }
      }
