<template>
    <div>
        <loader v-if="isLoading" />
        Dashboard
    </div>
</template>

<script>
import Loader from "../../../components/Layouts/Loader.vue"
export default {
    name: 'Dashboard',
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