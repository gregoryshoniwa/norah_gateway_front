<template>
    <div class="page-wrapper">
        <Navbar class="style1" />
        <MainBanner />
        <Chargecalculator />
        <Feature />
        <WhyChooseUs />
        <Counter />
        <Services />
        <OnlineShopping />
        <Testimonials />
        <AppDownload />
        <GoalSettings />
        <Blog />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import MainBanner from '../HomeOne/MainBanner'
import Chargecalculator from '../HomeOne/Chargecalculator'
import Feature from '../HomeOne/Feature'
import WhyChooseUs from '../HomeOne/WhyChooseUs'
import Counter from '../HomeOne/Counter'
import Services from '../HomeOne/Services'
import OnlineShopping from '../HomeOne/OnlineShopping'
import Testimonials from '../HomeOne/Testimonials'
import AppDownload from '../HomeOne/AppDownload'
import GoalSettings from '../HomeOne/GoalSettings'
import Blog from '../HomeOne/Blog'
import Footer from '../Layouts/Footer'

export default {
    name: 'HomeOnePage',
    components: {
        Navbar,
        MainBanner,
        Chargecalculator,
        Feature,
        WhyChooseUs,
        Counter,
        Services,
        OnlineShopping,
        Testimonials,
        AppDownload,
        GoalSettings,
        Blog,
        Footer,
    }
}
</script>