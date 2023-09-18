<template>
    <div>
        <loader v-if="isLoading" />
        Billing
    </div>
</template>

<script>
import Loader from "../../../components/Layouts/Loader.vue"
export default {
    name: 'Billing',
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