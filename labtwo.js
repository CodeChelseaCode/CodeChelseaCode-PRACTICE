window.addEventListener("load", function() {
var fruits = [
        { name: "Apple", quantity: 20, color: "red" },
        { name: "Orange", quantity: 10, color: "orange" },
        { name: "Banana", quantity: 15, color: "yellow" },
        { name: "Kiwi", quantity: 5, color: "green" },
        { name: "Blueberry", quantity: 5, color: "blue" },
        { name: "Grapes", quantity: 10, color: "purple" }
      ];

      // Get the canvas and context
      var canvas = document.getElementById("chart");
      var ctx = canvas.getContext("2d");

      // Set the bar dimensions and spacing
      var barHeight = 20;
      var barSpacing = 5;

      // Set the chart origin and dimensions
      var chartX = 50;
      var chartY = 0;
      var chartWidth = canvas.width - chartX * 2;
      var chartHeight = (barHeight + barSpacing) * fruits.length - barSpacing;

      // Draw the chart background
      ctx.fillStyle = "#eee";
      ctx.fillRect(chartX, chartY, chartWidth, chartHeight);

      // Draw the bars and labels
      for (var i = 0; i < fruits.length; i++) {
        var fruit = fruits[i];

        // Set the bar dimensions and position
        var barWidth = fruit.quantity * 10;
        var barX = chartX;
        var barY = chartY + (barHeight + barSpacing) * i;

        // Set the fill style to match the fruit color
        ctx.fillStyle = fruit.color;

        // Draw the bar
        ctx.fillRect(barX, barY, barWidth, barHeight);

        // Draw the label
        ctx.fillStyle = "black";
        ctx.fillText(fruit.name, barX - 50, barY + barHeight / 2);
      }
    });