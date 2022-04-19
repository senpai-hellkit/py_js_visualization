let ourPie = $("#ourPie");


const chartPie = new Chart(ourPie, {
    type: 'doughnut', /* pie */
    data: {
        labels: labels,
        datasets: [
            {
                label: labelName,
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.3)',
                    'rgba(54, 162, 235, 0.3)'
                ],
                borderWidth: 1,
                borderRadius: 7,
                borderColor: [
                    'rgba(255, 99, 132, 0.9)',
                    'rgba(54, 162, 235, 0.9)'
                ]
            }
        ]
    },

    options: {
        plugins: {
            legend: {
                display: true,
                position: "left",
            }
        }
    }
});