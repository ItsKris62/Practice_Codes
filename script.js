document.addEventListener("DOMContentLoaded", () => {
    // Power Chart
    const powerCtx = document.getElementById("powerChart").getContext("2d");
    new Chart(powerCtx, {
      type: "line",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Power Usage (kWh)",
            data: [200, 220, 180, 240, 260, 230, 210],
            borderColor: "#007bff",
            backgroundColor: "rgba(0, 123, 255, 0.2)",
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  
    // Temperature Chart
    const tempCtx = document.getElementById("tempChart").getContext("2d");
    new Chart(tempCtx, {
      type: "doughnut",
      data: {
        labels: ["Cool", "Warm", "Hot"],
        datasets: [
          {
            data: [40, 35, 25],
            backgroundColor: ["#007bff", "#ffce56", "#ff6384"],
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  });
  