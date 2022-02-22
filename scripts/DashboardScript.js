var myChart = document.getElementById('myChart').getContext('2d');
            
//Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = 'white';

var foodChart = new Chart(myChart, {
type: 'line', //bar, blabla
    data: {
        labels: ['T-80m', 'T-60m', 'T-40m', 'T-20m', 'Now'],
        datasets: [{
            label: 'm/s',
            data: [1.9, 2.1, 3, 3.6, 3.7],
            //backgroundColor: '#0E1428',
                      
            borderWidth:0,
            borderColor:'#fff',
            hoverBorderWidth:2,
            hoverBorderColor:'white'
        }]
    },
    options: {
        title:{
            display:true,
            text:'Acceleration',
            fontSize:20
        },
        legend:{
            position:'right',
            display:true,
            borderWidth:1,
        }
    },
});

var myChart = document.getElementById('myChart2').getContext('2d');
            
//Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = 'white';

var foodChart = new Chart(myChart, {
    type: 'pie', //bar, blabla
    data: {
        labels: ['Raptor 1', 'Raptor 2', 'Raptor 3'],
        datasets: [{
            label: 'Engine',
            data: [70, 60, 90],
            //backgroundColor: '#0E1428',
            backgroundColor: ['#861657','#A64253','#D56AA0'],
            borderWidth:0,
            borderColor:'#999',
            hoverBorderWidth:2,
            hoverBorderColor:'white'
        }]
    },
    options: {
        title:{
            display:true,
            text:'Engine bar pressure',
            fontSize:20
        },
        legend:{
            position:'right',
            display:true,
            borderWidth:1,
        }
    },
});

var myChart = document.getElementById('myChart3').getContext('2d');
            
//Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = 'white';

var foodChart = new Chart(myChart, {
    type: 'doughnut', //bar, blabla
    data: {
        labels: ['LOX', 'CH4', 'O2', 'HN2'],
        datasets: [{
            label: 'Fuel',
            data: [1100, 902, 851, 90],
            //backgroundColor: '#0E1428',
            backgroundColor: ['#861657','#A64253','#D56AA0','#BBDBB4'],
            borderWidth:0,
            borderColor:'#fff',
            hoverBorderWidth:2,
            hoverBorderColor:'white',
            }]
    },
    cutoutPercentage:70,
    options: {
        title:{
            display:true,
            text:'Fuel',
                ontSize:20
        },
        legend:{
            position:'right',
            display:true,
            borderWidth:1,
        }
    },
});
var myChart = document.getElementById('myChart4').getContext('2d');
            
//Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = 'white';

var foodChart = new Chart(myChart, {
    type: 'bar', //bar, blabla
    data: {
        labels: ['Pumpkin', 'Wheat', 'Potato', 'Apple', 'Pinapple'],
        datasets: [{
            label: 'Seeds',
            data: [ 70, 64, 85, 80, 96],
            //backgroundColor: '#0E1428',
            backgroundColor: ['#861657', '#A64253', '#D56AA0', '#BBDBB4','#FCF0CC'],
            borderWidth:0,
            borderColor:'#eee',
            hoverBorderWidth:2,
            hoverBorderColor:'white',
            barThickness: 'flex',
            minBarLength: 4,
        }]
    },
    options: {
        title:{
            display:true,
            text:'Seeds',
            fontSize:20
        },
        legend:{
            position:'right',
            display:false,
            borderWidth:1,
        }
    },
});

var myChart = document.getElementById('myChart6').getContext('2d');
            
//Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = 'white';

var foodChart = new Chart(myChart, {
    type: 'horizontalBar', //bar, blabla
    data: {
        labels: ['Burgers', 'Pizza', 'Kapsalon', 'Frietjes', 'Salade'],
        datasets: [{
            label: 'Food supply',
            data: [
                70,
                69,
                85,
                80,
                96
            ],
            //backgroundColor: '#0E1428',
            backgroundColor: [
                '#861657',
                '#A64253',
                '#D56AA0',
                '#BBDBB4',
                '#FCF0CC',
            ],
            borderWidth:0,
            borderColor:'#999',
            hoverBorderWidth:2,
            hoverBorderColor:'white'
        }]
    },
    options: {
        title:{
            display:true,
            text:'Food supply',
            fontSize:20
        },
        legend:{
            position:'right',
            display:false,
            borderWidth:1,
        }
    },
});

var myChart = document.getElementById('myChart7').getContext('2d');
              
//Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = 'white';
  
var foodChart = new Chart(myChart, {
    type: 'horizontalBar', //bar, blabla
        data: {
        labels: ['O2-Levels'],
        datasets: [{
            label: 'O2-Levels',
            data: [[80,98], [90,100]],
            //backgroundColor: '#0E1428',
            backgroundColor: ['#fff', '#eee'],
            borderWidth:0,
            borderColor:'#eee',
            hoverBorderWidth:2,
            hoverBorderColor:'white',
            categoryPercentage: 0.2,
            barPercentage: 0.5
        }]
    },
    options: {
        title:{
            display:false,
            text:'O2-Levels',
            fontSize:20
        },
        legend:{
            position:'right',
            display:false,
            borderWidth:1,
        }
    },
});
  
var myChart = document.getElementById('myChart8').getContext('2d');
              
//Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = 'white';
  
var foodChart = new Chart(myChart, {
    type: 'horizontalBar', //bar, blabla
        data: {
            labels: ['H2-Levels'],
            datasets: [{
                label: 'O2-Levels',
                data: [[80,85], [90,100]],
                //backgroundColor: '#0E1428',
                backgroundColor: ['#fff', '#eee'],
                borderWidth:0,
                borderColor:'#eee',
                hoverBorderWidth:2,
                hoverBorderColor:'white',
                categoryPercentage: 0.2,
                barPercentage: 0.5
            }]
        },
        options: {
            title:{
                display:false,
                text:'O2-Levels',
                fontSize:20
            },
            legend:{
                position:'right',
                display:false,
                borderWidth:1,
            }
        },
});
          
var myChart = document.getElementById('myChart9').getContext('2d');
              
//Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = 'white';
  
var foodChart = new Chart(myChart, {
    type: 'horizontalBar', //bar, blabla
        data: {
            labels: ['CO2-Levels'],
            datasets: [{
                label: 'O2-Levels',
                data: [[80,95], [90,100]],
                //backgroundColor: '#0E1428',
                backgroundColor: ['#fff', '#eee'],
                borderWidth:0,
                borderColor:'#eee',
                hoverBorderWidth:2,
                hoverBorderColor:'white',
                categoryPercentage: 0.2,
                barPercentage: 0.5
            }]
        },
        options: {
            title:{
                display:false,
                text:'O2-Levels',
                fontSize:20
            },
            legend:{
                position:'right',
                display:false,
                borderWidth:1,
            }
        },
});