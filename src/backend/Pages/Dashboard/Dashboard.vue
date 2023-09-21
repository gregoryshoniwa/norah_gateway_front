<template>
    <div style="padding-left: 15px; padding-top: 15px;">
        <loader v-if="isLoading" />
        <b-card
            style="max-width: 95%;"
            class="mb-2"
        >
            <TransactionsChart />
        </b-card>
        <b-card
            style="max-width: 70%;"
            class="mb-2"
        >
            <TransactionsChart />
        </b-card>
        <b-card
            style="max-width: 70%;"
            class="mb-2"
        >
            <TransactionsChart />
        </b-card>
        
    </div>
</template>

<script>
import Loader from "../../../components/Layouts/Loader"
import TransactionsChart from "../../Charts/TransactionsChart";
export default {
    name: 'Dashboard',
    components: {
        Loader,
        TransactionsChart
    },
    data: () => ({
        
        isLoading: false,
    
    }),
    methods: {
    
     },
}
</script>
<style>

</style>