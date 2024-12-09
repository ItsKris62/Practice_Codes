// script.js

// Chart.js Initialization
document.addEventListener("DOMContentLoaded", () => {
    const salesCtx = document.getElementById("salesChart").getContext("2d");
    const roasCtx = document.getElementById("roasChart").getContext("2d");

    // Sales Chart
    new Chart(salesCtx, {
        type: "bar",
        data: {
            labels: ["Jul 1", "Jul 8", "Jul 15", "Jul 22", "Jul 30"],
            datasets: [
                {
                    label: "Sales",
                    data: [15000, 20000, 18000, 22000, 17000],
                    backgroundColor: "rgba(34, 197, 94, 0.6)",
                    borderColor: "rgba(34, 197, 94, 1)",
                    borderWidth: 1,
                },
            ],
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });

    // Commission vs ROAS Chart
    new Chart(roasCtx, {
        type: "line",
        data: {
            labels: ["Jul", "Aug", "Sep", "Oct", "Nov"],
            datasets: [
                {
                    label: "Commission",
                    data: [15000, 22000, 18000, 24000, 20000],
                    borderColor: "rgba(255, 99, 132, 1)",
                    tension: 0.4,
                    fill: false,
                },
                {
                    label: "ROAS",
                    data: [20000, 25000, 21000, 28000, 24000],
                    borderColor: "rgba(54, 162, 235, 1)",
                    tension: 0.4,
                    fill: false,
                },
            ],
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
});
