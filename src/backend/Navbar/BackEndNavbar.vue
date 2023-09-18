<template>
    <div class="be-body">
        <nav class="be-sidebar">
            <header>
                <div class="be-image-text">
                    <span class="be-image" v-if="theme">
                        <img src="../../assets/images/logo.fw.png" alt="logo">
                    </span>
                    <span class="be-image" v-if="!theme">
                        <img src="../../assets/images/logo-white.fw.png" alt="logo">
                    </span>
                    <div class="text header-text">
                        <span class="name">Norah</span>
                        <!-- <span class="profession">Payment-Gateway</span> -->
                    </div>
                </div>
                <i class="bx bx-chevron-right toggle" @click="navCloser"></i>
            </header>
            <div class="menu-bar">
                <div class="menu">
                    <ul class="menu-links">
                        <li class="nav-links" :class="{active:active === 'Dashboard'}" @click="menuClick('Dashboard')">
                            <a href="#">
                                <i class="bx bx-home-alt icon"></i>
                                <span class="text nav-text">Dashboard</span>
                            </a>
                        </li>
                        <li class="nav-links" :class="{active:active === 'Payments'}" @click="menuClick('Payments')">
                            <a href="#">
                                <i class="bx bx-receipt icon"></i>
                                <span class="text nav-text">Payments</span>
                            </a>
                        </li>
                        <li class="nav-links" :class="{active:active === 'Balances'}" @click="menuClick('Balances')">
                            <a href="#">
                                <i class="bx bx-wallet icon"></i>
                                <span class="text nav-text">Balances</span>
                            </a>
                        </li>
                        <li class="nav-links" :class="{active:active === 'Products'}" @click="menuClick('Products')">
                            <a href="#">
                                <i class="bx bx-group icon"></i>
                                <span class="text nav-text">Products</span>
                            </a>
                        </li>
                        <li class="nav-links" :class="{active:active === 'Customers'}" @click="menuClick('Customers')">
                            <a href="#">
                                <i class="bx bx-home-alt icon"></i>
                                <span class="text nav-text">Customers</span>
                            </a>
                        </li>
                        <li class="nav-links" :class="{active:active === 'Reports'}" @click="menuClick('Reports')">
                            <a href="#">
                                <i class="bx bx-bar-chart icon"></i>
                                <span class="text nav-text">Reports</span>
                            </a>
                        </li>
                        <li class="nav-links" :class="{active:active === 'Billing'}" @click="menuClick('Billing')">
                            <a href="#">
                                <i class="bx bx-bar-chart-alt-2 icon"></i>
                                <span class="text nav-text">Billing</span>
                            </a>
                        </li>
                        <li class="nav-links" :class="{active:active === 'Developers'}" @click="menuClick('Developers')">
                            <a href="#">
                                <i class="bx bx-face icon"></i>
                                <span class="text nav-text">Developers</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="bottom-content">
                        <li class="">
                            <a href="#">
                                
                                <i class="bx bx-log-out icon"></i>
                                <!-- <span class="text nav-text">Logout</span> -->
                                <router-link class="text nav-text" to="/login">Logout</router-link>
                            </a>
                        </li>
                        <li class="mode">
                            <div class="moon-sun">
                                <i class="bx bx-moon icon moon" v-if="!theme"></i>
                                <i class="bx bx-sun icon sun" v-if="theme"></i> 
                            </div>
                            <span class="mode-text text" v-if="theme">Light Mode</span>
                            <span class="mode-text text" v-if="!theme">Dark Mode</span>


                            <div class="toggle-switch" @click="toggleTheme">
                                <span class="switch"></span>
                            </div>
                        </li>
                </div>
            </div>
        
        </nav>
        <section class="home">
            <transition 
                enter-active-class="animated fadeIn" 
                leave-active-class="animated fadeOut" 
                mode="out-in" 
                :duration="600" 
                @after-leave="$root.$emit('triggerScroll')"
            >
                <component :is="currentComponent" />
            </transition>
        </section>
    </div>
    
        
    
</template>

<script>

import Dashboard from '../Pages/Dashboard/Dashboard';
import Balances from '../Pages/Balances/Balances';
import Billing from '../Pages/Billing/Billing';
import Customers from '../Pages/Customers/Customers';
import Developers from '../Pages/Developers/Developers';
import Payments from '../Pages/Payments/Payments';
import Products from '../Pages/Products/Products';
import Reports from '../Pages/Reports/Reports';

export default {
    name: 'BackEndNavbar',
    components: {
       Dashboard,
       Balances,
       Billing,
       Customers,
       Developers,
       Payments,
       Products,
       Reports
    },
    data() {
        return {
            isLoading: true,
            theme:true,
            active: 'Dashboard',
            currentComponent: 'Dashboard',
        }
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false
        }, 2000)
    },
    methods:{
        menuClick(page){
            this.active = page;
            this.currentComponent = page;
        },
        navCloser(){
            const sidebar = document.querySelector(".be-sidebar")

            sidebar.classList.toggle("close");
        },
        toggleTheme(){
            const body  = document.querySelector(".be-body")

            this.theme = !this.theme
            body.classList.toggle("dark");
        }
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
    * {
        /* background: white; */
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    
    }
    ul {
        padding-left: 0 !important;
    }
    :root{
        /* ===== Colors ===== */
        --body-color: #E4E9F7;
        --sidebar-color: #FFF;
        --primary-color: #00A9A4;
        --primary-color-light: #F6F5FF;
        --toggle-color: #DDD;
        --text-color:#707070;

        /* ==== Transition ====*/
        --tran-02: all 0.2s ease;
        --tran-03: all 0.3s ease;
        --tran-04: all 0.4s ease;
        --tran-05: all 0.5s ease;
    }

    .be-body{
        height: 100vh;
        background: var(--body-color);
        transition: var(--tran-04);
    }

    .be-body.dark {
        --body-color: #18191A;
        --sidebar-color: #242526;
        --primary-color: #3A3B3C;
        --primary-color-light: #3A3B3C;
        --toggle-color: #FFF;
        --text-color:#CCC;
    }

    .be-sidebar.close{
        width: 88px;
    }

    
    .be-sidebar .text {
        font-size: 16px;
        font-weight: 500;
        color: var(--text-color);
        transition: var(--tran-04);
        white-space: nowrap;
        opacity: 1;
    }

    .be-sidebar.close .text{
        opacity: 0;
    }

    .be-sidebar {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 250px;
        padding: 10px 14px;
        background: var(--sidebar-color);
        transition: var(--tran-05);
        z-index: 100;
    }

    

    .be-sidebar li{
        height: 45px;
        margin-top: 15px;
        list-style: none;
        display: flex;
        align-items: center;
    }

    .be-sidebar li .icon{
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 55px;
        font-size: 20px;
    }

    .be-sidebar li .icon,
    .be-sidebar li .text{
        color: var(--text-color);
        transition: var(--tran-02);
    }

    

    .be-sidebar header{
        position: relative;
    }

    .be-sidebar .be-image-text img{
        width: 45px;
        margin: 16px;
    }

    .be-sidebar header .be-image-text{
        display: flex;
        align-items: center;
    }
    .header-text{
        display: flex;
        flex-direction: column;
    }
    .header-text .name{
        font-weight: 600;
    }
    .header-text .profession{
       margin-top: -2px;
    }

    .be-sidebar header .toggle{
        position: absolute;
        top: 50%;
        right: -25px;
        transform: translateY(-50%) rotate(180deg);
        height: 20px;
        width: 20px;
        background: var(--primary-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        color: var(--sidebar-color);
        font-size: 20px;
        transition: var(--tran-03);
    }

    .be-sidebar.close header .toggle{
        transform: translateY(-50%);
        color: var(--sidebar-color);
    }

    .be-body.dark .be-sidebar header .toggle{
        
        color: var(--text-color);
    }

    .be-sidebar li a{
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        text-decoration: none;
        border-radius: 6px;
        transition: var(--tran-04);
    }

    .be-sidebar li a:hover{
       background: var(--primary-color);
    }   

    .be-sidebar li a:hover .icon,
    .be-sidebar li a:hover .text{
       color: var(--sidebar-color);
    } 

        
    .be-body.dark .be-sidebar li a:hover .icon,
    .be-body.dark .be-sidebar li a:hover .text{
       color: var(--text-color);
    } 

        
    .be-sidebar li.active {
        border-radius: 6px;
        background: var(--primary-color); 
        color: var(--text-color); 
    }


    .be-sidebar li.active .icon,
    .be-sidebar li.active .text{
       color: var(--sidebar-color);
    } 

        
    .be-body.dark .be-sidebar li.active .icon,
    .be-body.dark .be-sidebar li.active .text{
       color: var(--text-color);
    } 

    
    .be-sidebar .menu-bar{
        height: calc(100% - 70px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .menu-bar .mode{
        position: relative;
        border-radius: 6px;
        background: var(--primary-color-light);
    }

    .menu-bar .mode .moon-sun{
        height: 50px;
        width: 60px;
        display: flex;
        align-items: center;
    }

    .menu-bar .mode i{
        position: absolute;
    }

    .menu-bar .mode i .sun{
        opacity: 0;
    }

    .menu-bar .mode .toggle-switch{
        position: absolute;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        min-width: 60px;
        cursor: pointer;
        border-radius: 6px;
        background: var(--primary-color-light);
    }

   
    .toggle-switch .switch{
        position: relative;
        height: 22px;
        width: 44px;
        border-radius: 25px;
        background: var(--toggle-color);
    }

    .switch::before{
        content: '';
        position: absolute;
        height: 15px;
        width: 15px;
        border-radius: 50%;
        top: 50%;
        left: 5px;
        transform: translateY(-50%);
        background: var(--sidebar-color);
        transition: var(--tran-03);
    }

    .be-body.dark .switch::before{
        left: 25px;
    }

    .home {
        position: relative;
        height: 100vh;
        left: 250px;
        width: calc(100% - 250px);
        background: var(--body-color);
        transition: var(--tran-05);
    }

    .be-sidebar.close ~ .home{
        left: 88px;
        width: calc(100% - 88px);
    }

</style>