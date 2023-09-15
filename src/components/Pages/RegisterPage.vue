<template>
   
        <div>
            <Register />
        </div>
     
</template>

<script>
import Navbar from '../Layouts/Navbar'
import PageTitle from '../Common/PageTitle'
import Register from '../Register/Register'
import Footer from '../Layouts/Footer'

export default {
    name: 'RegisterPage',
    components: {
        Navbar,
        PageTitle,
        Register,
        Footer,
    }
}
</script>