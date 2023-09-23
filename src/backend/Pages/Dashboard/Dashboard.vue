<template>
    <div style="padding-left: 15px; padding-top: 15px;">
        <loader v-if="isLoading" />
        <b-container fluid>
            
            <div style="margin-bottom: 20px;">Dashboard</div>

            <div style="margin-bottom: 20px;" class="insights">
                <div>
                    <i style="background: rgba(0, 255, 21, 0.279);" class='bx bx-bar-chart-square'></i>
                    <span class="info">
                        <h5>USD 1,023.00</h5>
                        <p>Total Balance</p>
                    </span>
                </div>
                <div>
                    <i style="background: rgba(0, 17, 255, 0.279);" class='bx bx-news'></i>
                    <span class="info">
                        <h5>USD 5,250.00</h5>
                        <p>Total Payments</p>
                    </span>
                </div>
                <div>
                    <i style="background: rgba(0, 255, 242, 0.279);" class='bx bx-spreadsheet'></i>
                    <span class="info">
                        <h5>50</h5>
                        <p>Total Products</p>
                    </span>
                </div>
                <div>
                    <i style="background: rgba(255, 0, 0, 0.279);" class='bx bx-user-circle'></i>
                    <span class="info">
                        <h5>250</h5>
                        <p>Total Customers</p>
                    </span>
                </div>
                
            </div>
        
            <div style="margin-bottom: 20px;" class="card-container">
                <TransactionsChart />
            </div>
           
            <div style="margin-bottom: 20px;" class="card-container">
                <TopTransactionsTable />
            </div>
        </b-container>  
    </div>
</template>

<script>
import Loader from "../../../components/Layouts/Loader"
import TransactionsChart from "../../Charts/TransactionsChart";
import TopTransactionsTable from "../../Tables/TopTransactionsTable";

export default {
    
    name: 'Dashboard',
    components: {
        Loader,
        TransactionsChart,
        TopTransactionsTable,
    },
   
    data: () => ({
        
        isLoading: false,
        
    
    }),
    
    methods: {
    
     },
}
</script>
<style>

.card-container{
    background: var(--card-color);
    border-radius: 10px;
    cursor: pointer;
    color:var(--text-color) !important;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
 .insights{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-gap: 15px;
    margin-top: 36px;
 }
 .insights div{
    padding: 24px;
    background: var(--card-color);
    border-radius: 10px;
    display: flex;
    align-items: center;
    grid-gap: 15px;
    cursor: pointer;
    color:var(--text-color) !important;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
 }
 .info h3,h5{
    color:var(--text-color) !important;
 }

 .insights div .bx{
    width: 65px;
    height: 65px;
    border-radius: 10px;
    font-size: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    color: var(--text-color);
 }

 

</style>