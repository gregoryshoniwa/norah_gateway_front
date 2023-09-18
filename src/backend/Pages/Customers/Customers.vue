<template>
    <div>
        <loader v-if="isLoading" />
        Customers
    </div>
</template>

<script>
import Loader from "../../../components/Layouts/Loader.vue"
export default {
    name: 'Customers',
    components: {
        Loader,
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