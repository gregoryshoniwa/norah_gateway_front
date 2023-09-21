<template>
    <div>
      <apexchart
        width="100%"
        height="350"
        type="line"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </template>
<script>
export default {
  data: function() {
    return {
      chartOptions: {
        theme: {
          mode: "light",
        },
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 35, 50, 49, 60, 70, 91],
        },
      ],
      legend: {
        position: "right",
        verticalAlign: "top",
        containerMargin: {
          left: 35,
          right: 60
        }
      },
      responsive: [
        {
          breakpoint: 1000,
          options: {
            plotOptions: {
              bar: {
                horizontal: false
              }
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  },
};
</script>