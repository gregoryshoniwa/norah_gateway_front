<template>
    <div >
        <loader v-if="isLoading" />
        Reports
    </div>
</template>

<script>
import Loader from "../../../components/Layouts/Loader.vue"
export default {
    name: 'Reports',
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