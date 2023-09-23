<template>
    <div>
      <div class="card-header">
        <div style="padding: 10px;font-weight: bold;">Top 10 Transactions : {{ graphType }}</div>
        <div style="padding: 10px;">
          <button @click="getGraphType('Weekly')" style="padding: 5px; margin-right: 10px;" class="btn style1">Weekly</button>
          <button @click="getGraphType('Monthly')" style="padding: 5px;" class="btn style1">Monthly</button>
        </div>
      </div>
     
      <div style="padding: 10px;">
        
        <b-table striped hover :items="items" :fields="fields"></b-table>
      </div>
    </div>
  </template>
<script>
export default {
  
  data: function() {
    return {
      graphType: "Monthly",
      fields: ['Id', 'Type', 'Currency','Amount','Product','Customer','Date'],
      items: [
          { Id: '10002', Type: 'VisaCard', Currency: 'USD',Amount:'250.00',Product:'Subscription',Customer:'gshoniwa',Date:'12/05/2023 08:55' },
          { Id: '10003', Type: 'Visa', Currency: 'USD', Amount:'150.00',Product:'Subscription',Customer:'bshayamano',Date:'13/05/2023 11:50' },
          { Id: '10004', Type: 'MasterCard', Currency: 'USD',Amount:'800.00',Product:'Subscription',Customer:'pchuru',Date:'14/05/2023 08:12' },
          { Id: '10005', Type: 'Transfer', Currency: 'ZWL',Amount:'15,000.00',Product:'Subscription',Customer:'jpeterson',Date:'14/05/2023 09:55' },
          { Id: '10006', Type: 'Zipit', Currency: 'ZWL',Amount:'45,000.00',Product:'Subscription',Customer:'kkudzima',Date:'15/05/2023 08:55' },
          { Id: '10007', Type: 'Visa', Currency: 'USD',Amount:'650.00',Product:'Subscription',Customer:'gshoniwa',Date:'15/05/2023 14:55' },
          { Id: '10008', Type: 'Visa', Currency: 'USD',Amount:'412.00',Product:'Subscription',Customer:'htakavira',Date:'16/05/2023 08:05' },
          { Id: '10009', Type: 'Zipit', Currency: 'ZWL',Amount:'1500.00',Product:'Subscription',Customer:'gshoniwa',Date:'18/05/2023 08:55' },
          
      ]
    };
  },
  watch:{
    
  },
  methods:{
    getGraphType(data){
      if(data == 'Weekly'){
        this.items = [
          { Id: '20002', Type: 'MasterCard', Currency: 'USD',Amount:'550.00',Product:'Suite',Customer:'kkudzima',Date:'12/05/2023 08:55' },
          { Id: '20003', Type: 'Visa', Currency: 'USD', Amount:'650.00',Product:'Travel Bag',Customer:'pchuru',Date:'13/05/2023 11:50' },
          { Id: '20004', Type: 'MasterCard', Currency: 'USD',Amount:'90.00',Product:'Subscription',Customer:'pchuru',Date:'14/05/2023 08:12' },
          { Id: '20005', Type: 'Transfer', Currency: 'ZWL',Amount:'18,000.00',Product:'Subscription',Customer:'htakavira',Date:'14/05/2023 09:55' },
          { Id: '20006', Type: 'Zipit', Currency: 'ZWL',Amount:'65,000.00',Product:'Smart TV',Customer:'kkudzima',Date:'15/05/2023 08:55' },
          { Id: '20007', Type: 'MasterCard', Currency: 'USD',Amount:'250.00',Product:'Pa System',Customer:'jpeterson',Date:'15/05/2023 14:55' },
          { Id: '20008', Type: 'Visa', Currency: 'USD',Amount:'712.00',Product:'Generator',Customer:'jpaul',Date:'16/05/2023 08:05' },
          { Id: '20009', Type: 'Zipit', Currency: 'ZWL',Amount:'6500.00',Product:'Dinning Table',Customer:'bshayamano',Date:'18/05/2023 08:55' },
          
      ]
        
        this.graphType = data
      }
      if(data == 'Monthly'){
        this.items = [
          { Id: '10002', Type: 'Visa', Currency: 'USD',Amount:'250.00',Product:'Pa System',Customer:'gshoniwa',Date:'10/05/2023 08:55' },
          { Id: '10003', Type: 'Visa', Currency: 'USD', Amount:'150.00',Product:'Subscription',Customer:'bshayamano',Date:'11/06/2023 11:50' },
          { Id: '10004', Type: 'MasterCard', Currency: 'USD',Amount:'800.00',Product:'Smart TV',Customer:'pchuru',Date:'15/07/2023 08:12' },
          { Id: '10005', Type: 'Transfer', Currency: 'ZWL',Amount:'15,000.00',Product:'Subscription',Customer:'jpeterson',Date:'24/07/2023 09:55' },
          { Id: '10006', Type: 'Zipit', Currency: 'ZWL',Amount:'45,000.00',Product:'Generator',Customer:'kkudzima',Date:'15/08/2023 08:55' },
          { Id: '10007', Type: 'Visa', Currency: 'USD',Amount:'650.00',Product:'Dinner Table',Customer:'gshoniwa',Date:'17/08/2023 14:55' },
          { Id: '10008', Type: 'Visa', Currency: 'USD',Amount:'412.00',Product:'Subscription',Customer:'htakavira',Date:'14/09/2023 08:05' },
          { Id: '10009', Type: 'Zipit', Currency: 'ZWL',Amount:'1500.00',Product:'Subscription',Customer:'gshoniwa',Date:'30/09/2023 08:55' },
          
      ]
        this.graphType = data
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

table{
  color: var(--text-color) !important;
}
.table-striped > tbody > tr:nth-of-type(odd) > * {
    
    color: var(--text-color) !important;
}
</style>