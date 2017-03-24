$(document).ready(function(){
  console.log('This is the Main.js file. It should be the 3rd and final file');
  $(".cards-more").on('click', function(e){
    e.preventDefault();
    $(this).parent().prev().find(".stat-hide").slideToggle();
    return false;
  });
  $("#sidebar-toggle").on('click', function(e){
    e.preventDefault();
    $("#wrapper").toggleClass('togglecollapse');
    return false;
  });




  // start - hightchart
  Highcharts.chart('perform-chart', {
      chart: {
          type: 'column'
      },
      title: {
          text: ' '
      },
      xAxis: {
          categories: ['01-01-2017', '02-01-2017', '03-01-2017', '04-01-2017', '05-01-2017']
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Total visitor'
          },
          stackLabels: {
              enabled: true,
              style: {
                  // fontWeight: 'bold',
                  color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
              }
          }
      },
      legend: {
          align: 'right',
          x: -30,
          verticalAlign: 'top',
          y: 25,
          floating: true,
          backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
          borderColor: '#CCC',
          borderWidth: 1,
          shadow: false
      },
      tooltip: {
          headerFormat: '<b>{point.x}</b><br/>',
          pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
      },
      plotOptions: {
          column: {
              stacking: 'normal',
              dataLabels: {
                  enabled: true,
                  color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
              }
          }
      },
      series: [{
          name: 'John',
          data: [5, 3, 4, 7, 2]
      }, {
          name: 'Jane',
          data: [2, 2, 3, 2, 1]
      }, {
          name: 'Joe',
          data: [3, 4, 4, 2, 5]
      }]
  });
  // end - hightchart
});