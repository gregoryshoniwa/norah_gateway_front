<template>
   
        <div>
            <RecoverPassword />
        </div>
      
</template>

<script>
import Navbar from '../Layouts/Navbar'
import PageTitle from '../Common/PageTitle'
import RecoverPassword from '../RecoverPassword/RecoverPassword'
import Footer from '../Layouts/Footer'

export default {
    name: 'RecoverPasswordPage',
    components: {
        Navbar,
        PageTitle,
        RecoverPassword,
        Footer,
    }
}
</script>