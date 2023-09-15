<template>
   
        <div style="padding-top: 70px;">
            <Login />
            
        </div>
      
</template>

<script>
import Navbar from '../Layouts/Navbar'
import PageTitle from '../Common/PageTitle'
import Login from '../Login/Login'
import Footer from '../Layouts/Footer'

export default {
    name: 'LoginPage',
    components: {
        Navbar,
        PageTitle,
        Login,
        Footer,
    }
}
</script>