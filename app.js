// Enhanced sample data for demonstration
const salesData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
        label: 'Total Sales',
        data: [1200, 1500, 1700, 2000, 2400],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 3,
        fill: true,
        tension: 0.3,
        pointStyle: 'rectRounded',
        pointRadius: 5,
        pointHoverRadius: 8
    }]
};

const newCustomersData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
        label: 'New Customers',
        data: [300, 400, 350, 450, 500],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        hoverBackgroundColor: 'rgba(54, 162, 235, 1)'
    }]
};

const repeatCustomersData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
        label: 'Repeat Customers',
        data: [120, 140, 130, 150, 160],
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 2,
        hoverBackgroundColor: 'rgba(255, 206, 86, 1)'
    }]
};

const geoDistributionData = {
    labels: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
    datasets: [{
        label: 'Geographical Distribution',
        data: [500, 400, 300, 200, 100],
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 2,
        hoverOffset: 20
    }]
};

// Render the sales chart
const salesCtx = document.getElementById('salesChart').getContext('2d');
new Chart(salesCtx, {
    type: 'line',
    data: salesData,
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                titleFont: { size: 16 },
                bodyFont: { size: 14 },
                padding: 10
            }
        },
        animation: {
            duration: 1500,
            easing: 'easeInOutQuad'
        }
    }
});

// Render the new customers chart
const newCustomersCtx = document.getElementById('newCustomersChart').getContext('2d');
new Chart(newCustomersCtx, {
    type: 'bar',
    data: newCustomersData,
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                titleFont: { size: 16 },
                bodyFont: { size: 14 },
                padding: 10
            }
        },
        animation: {
            duration: 1500,
            easing: 'easeInOutBounce'
        }
    }
});

// Render the repeat customers chart
const repeatCustomersCtx = document.getElementById('repeatCustomersChart').getContext('2d');
new Chart(repeatCustomersCtx, {
    type: 'doughnut',
    data: repeatCustomersData,
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                titleFont: { size: 16 },
                bodyFont: { size: 14 },
                padding: 10
            }
        },
        animation: {
            duration: 1500,
            easing: 'easeInOutCubic'
        }
    }
});

// Render the geographical distribution chart
const geoCtx = document.getElementById('geoChart').getContext('2d');
new Chart(geoCtx, {
    type: 'pie',
    data: geoDistributionData,
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                titleFont: { size: 16 },
                bodyFont: { size: 14 },
                padding: 10
            }
        },
        animation: {
            duration: 1500,
            easing: 'easeInOutBack'
        }
    }
});
