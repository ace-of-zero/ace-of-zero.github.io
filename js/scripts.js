/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});

window.addEventListener('load', function() {
    // Get CSS variables
    function getCssVariable(variableName) {
        return getComputedStyle(document.documentElement).getPropertyValue(variableName);
    }
    // Access CSS variables
    const primaryColor = getCssVariable('--bs-primary').trim();
    const secondaryColor = getCssVariable('--bs-info').trim();

    // Create interactive metagame chart using chart.js
    const chtx = document.getElementById('MetagameChart').getContext('2d');
    const meChart = new Chart(chtx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Popularity Over Time',
                data: [
                    { x: '2023-08-06', y: 5.80 },
                    { x: '2023-08-13', y: 8.63},
                    { x: '2023-08-20', y: 4.32},
                    { x: '2023-08-27', y: 11.3}
                ],
                backgroundColor: secondaryColor,
                borderColor: secondaryColor,
                borderWidth: 2,
            }]
        },
        options: {
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    min: 0,
                    max: 12,
                },
                x: {
                    type: 'time',
                    time: {
                        unit: 'week',
                    }
                }
            }
        }
    });
    // Function to update chart data
    function updateChartData(newData) {
        meChart.data.datasets[0].data = newData;
        meChart.update();
    }
    // Define datasets for each table row
    const deckdata = [
        [{ x: '2023-08-06', y: 5.80 }, { x: '2023-08-13', y: 8.63}, { x: '2023-08-20', y: 4.32}, { x: '2023-08-27', y: 11.3}],
        [{ x: '2023-08-06', y: 10.4}, { x: '2023-08-13', y: 7.54}, { x: '2023-08-20', y: 3.89}, { x: '2023-08-27', y: 9.34}],
        [{ x: '2023-08-06', y: 9.27 }, { x: '2023-08-13', y: 5.15}, { x: '2023-08-20', y: 7.42}, { x: '2023-08-27', y: 5.22}],
    ];
    // Add click event listeners to table rows, except the first row
    document.querySelectorAll('#MetagameTable tr').forEach((row, index) => {
        if (index !== 0) {  // Skip the first row
            row.addEventListener('click', () => {
                // Update chart data
                updateChartData(deckdata[index - 1]);

                // Remove highlighting from all rows
                document.querySelectorAll('#MetagameTable tr').forEach(r => {
                    r.classList.remove('highlighted-row');
                });

                // Highlight the clicked row
                row.classList.add('highlighted-row');
            });
        }
    });
    
    // Create a combo bar/line chart using Chart.js
    const ctx = document.getElementById('DefectChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            datasets: [{
                label: 'Sales Orders',
                data: [
                    { x: '2023-01-01', y: 2770 },
                    { x: '2023-01-08', y: 1320 },
                    { x: '2023-01-15', y: 2450 },
                    { x: '2023-01-22', y: 860 },
                    { x: '2023-01-29', y: 1360 },
                    { x: '2023-02-05', y: 790 },
                    { x: '2023-02-12', y: 1170 },
                    { x: '2023-02-19', y: 9230 },
                    { x: '2023-02-26', y: 13740 },
                    { x: '2023-03-05', y: 10240 },
                    { x: '2023-03-12', y: 4560 },
                    { x: '2023-03-19', y: 2930 },
                    { x: '2023-03-26', y: 2380 },
                    { x: '2023-04-02', y: 1290 },
                    { x: '2023-04-09', y: 2210 },
                    { x: '2023-04-16', y: 1970 },
                    { x: '2023-04-23', y: 770 },
                    { x: '2023-04-30', y: 870 },
                    { x: '2023-05-07', y: 2660 },
                    { x: '2023-05-14', y: 590 },
                    { x: '2023-05-21', y: 790 },
                    { x: '2023-05-28', y: 2080 },
                    { x: '2023-06-04', y: 2100 },
                    { x: '2023-06-11', y: 990 },
                    { x: '2023-06-18', y: 2580 },
                    { x: '2023-06-25', y: 2920 }
                ],                
                type: 'line',
                backgroundColor: secondaryColor,
                borderColor: secondaryColor,
                borderWidth: 2,
                yAxisID: 'y1',
            }, {
                label: 'Defects',
                data: [
                { x: '2023-01-01', y: 80 },
                { x: '2023-01-08', y: 202 },
                { x: '2023-01-15', y: 206 },
                { x: '2023-01-22', y: 106 },
                { x: '2023-01-29', y: 174 },
                { x: '2023-02-05', y: 78 },
                { x: '2023-02-12', y: 278 },
                { x: '2023-02-19', y: 189 },
                { x: '2023-02-26', y: 111 },
                { x: '2023-03-05', y: 179 },
                { x: '2023-03-12', y: 126 },
                { x: '2023-03-19', y: 288 },
                { x: '2023-03-26', y: 144 },
                { x: '2023-04-02', y: 81 },
                { x: '2023-04-09', y: 191 },
                { x: '2023-04-16', y: 150 },
                { x: '2023-04-23', y: 800 },
                { x: '2023-04-30', y: 1165 },
                { x: '2023-05-07', y: 967 },
                { x: '2023-05-14', y: 342 },
                { x: '2023-05-21', y: 177 },
                { x: '2023-05-28', y: 243 },
                { x: '2023-06-04', y: 84 },
                { x: '2023-06-11', y: 73 },
                { x: '2023-06-18', y: 163 },
                { x: '2023-06-25', y: 72 },
                ],
                backgroundColor: primaryColor,
                borderColor: primaryColor,
                borderWidth: 1,
                yAxisID: 'y',
            }]
        },
        options: {
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y',
                },
                y1: {
                    type: 'linear',
                    position: 'right',
                    id: 'y1',
                    grid: {
                        drawOnChartArea: false,
                    },
                },
                x: {
                    type: 'time',
                    time: {
                        unit: 'month',
                    }
                }
            }
        },
        tooltips: {
            enabled: true,
            mode: 'index',
            callbacks: {
                label: function(tooltipItem, data) {
                    return data.datasets[tooltipItem.datasetIndex].label + ": " + tooltipItem.yLabel;
                }
            }
        }
    });
});

// Add clickable gallery functionality
let slideIndex = 0;
showSlides(slideIndex);

function moveSlide(n) {
    showSlides(slideIndex += n);
}    

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll("#slides img");
    if (n >= slides.length) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length - 1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}