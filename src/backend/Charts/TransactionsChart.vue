<template>
    <div>
      <Loader v-if="isLoading" />
      <div class="card-header">
        <div style="padding: 10px;">Total Transactions : {{ graphType }}</div>
        <div style="padding: 10px;">
          <button @click="getGraphType('Weekly')" style="padding: 5px; margin-right: 10px;" class="btn style1">Weekly</button>
          <button @click="getGraphType('Monthly')" style="padding: 5px;" class="btn style1">Monthly</button>
        </div>
      </div>
     
      <apexchart
        width="100%"
        height="350"
        type="line"
        :options="chartOptions"
        :series="series"
        :responsive="responsive"
      ></apexchart>
    </div>
  </template>
<script>
import Loader from "../../components/Layouts/Loader";
export default {
  components: {
        Loader,
       
    },
  data: function() {
    return {
      graphType: "Monthly",
      isLoading: false,
      chartOptions: {
        theme: {
          mode: 'light',
        },
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep','Oct','Nov','Dec'],
        },
      },
      series:  [
          {
            name: "USD",
            data: [30, 40, 35, 50, 49, 60, 70, 91,20,16,55,99],
          },
          {
            name: "ZWL",
            data: [70, 91,20,16,55,99,30, 40, 35, 50, 49, 60],
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
  watch:{
    
  },
  methods:{
    getGraphType(data){
      this.isLoading = true;
      if(data == 'Weekly'){
        setTimeout(() => {
          this.chartOptions = {
            theme: {
              mode: 'light',
            },
            chart: {
              id: "vuechart-example",
            },
            xaxis: {
              categories:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            },
          },
        this.series =  [
          {
            name: "USD",
            data: [60, 70, 91,20,16,55,99],
          },
          {
            name: "ZWL",
            data: [70, 91,20,16,55,99,30],
          },
        ]
        this.graphType = data;
        this.isLoading = false;
          }, 2000);
        
      }
      if(data == 'Monthly'){
        setTimeout(() => {
        this.chartOptions = {
            theme: {
              mode: 'light',
            },
            chart: {
              id: "vuechart-example",
            },
            xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep','Oct','Nov','Dec'],
            },
          },
        this.series =  [
          {
            name: "USD",
            data: [30, 40, 35, 50, 49, 60, 70, 91,20,16,55,99],
          },
          {
            name: "ZWL",
            data: [70, 91,20,16,55,99,30, 40, 35, 50, 49, 60],
          },
        ]
        this.graphType = data;
        this.isLoading = false;
      }, 2000);
      }
    }
  }
};
</script>
<style>
.card-header{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>