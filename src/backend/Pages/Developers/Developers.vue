<template>
    <div>
        <loader v-if="isLoading" />
        Developers
    </div>
</template>

<script>
import Loader from "../../../components/Layouts/Loader.vue"
export default {
    name: 'Developers',
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