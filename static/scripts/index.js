let ourPie1 = $("#ourPie1");
let ourPie2 = $("#ourPie2");
let ourPie3 = $("#ourPie3");
let ourPie4 = $("#ourPie4");


new Chart(ourPie1, {
    type: 'doughnut', /* pie */
    data: {
        labels: labels,
        datasets: [
            {
                label: labelName,
                data: [data[0][0], data[1][0], data[2][0]],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.3)',
                    'rgba(54, 162, 235, 0.3)',
                    'rgba(219,133,20,0.3)'
                ],
                borderWidth: 1,
                borderRadius: 7,
                borderColor: [
                    'rgba(255, 99, 132, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(219,133,20,0.9)'

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
new Chart(ourPie2, {
    type: 'doughnut', /* pie */
    data: {
        labels: labels,
        datasets: [
            {
                label: labelName,
                data: [data[0][1], data[1][1], data[2][1]],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.3)',
                    'rgba(54, 162, 235, 0.3)',
                    'rgba(219,133,20,0.3)'
                ],
                borderWidth: 1,
                borderRadius: 7,
                borderColor: [
                    'rgba(255, 99, 132, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(219,133,20,0.9)'
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
new Chart(ourPie3, {
    type: 'doughnut', /* pie */
    data: {
        labels: labels,
        datasets: [
            {
                label: labelName,
                data: [data[0][2], data[1][2], data[2][2]],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.3)',
                    'rgba(54, 162, 235, 0.3)',
                    'rgba(219,133,20,0.3)'
                ],
                borderWidth: 1,
                borderRadius: 7,
                borderColor: [
                    'rgba(255, 99, 132, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(219,133,20,0.9)'
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
new Chart(ourPie4, {
    type: 'doughnut', /* pie */
    data: {
        labels: labels,
        datasets: [
            {
                label: labelName,
                data: [data[0][3], data[1][3], data[2][3]],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.3)',
                    'rgba(54, 162, 235, 0.3)',
                    'rgba(219,133,20,0.3)'
                ],
                borderWidth: 1,
                borderRadius: 7,
                borderColor: [
                    'rgba(255, 99, 132, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(219,133,20,0.9)'
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