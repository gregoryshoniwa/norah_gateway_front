<template>
    <div class="be-body">
        <nav class="be-sidebar">
            <header>
                <div class="be-image-text">
                    <span class="be-image">
                        <img src="../../assets/images/logo.fw.png" alt="logo">
                    </span>
                    <div class="text header-text">
                        <span class="name">Norah</span>
                        <span class="profession">Payment-Gateway</span>
                    </div>
                </div>
                <i class="bx bx-chevron-right toggle"></i>
            </header>
            <div class="menu-bar">
                <div class="menu">
                    <ul class="menu-links">
                        <li class="nav-links">
                            <a href="#">
                                <i class="bx bx-home-alt icon"></i>
                                <span class="text nav-text">Dashboard</span>
                            </a>
                        </li>
                        <li class="nav-links">
                            <a href="#">
                                <i class="bx bx-receipt icon"></i>
                                <span class="text nav-text">Payments</span>
                            </a>
                        </li>
                        <li class="nav-links">
                            <a href="#">
                                <i class="bx bx-wallet icon"></i>
                                <span class="text nav-text">Balances</span>
                            </a>
                        </li>
                        <li class="nav-links">
                            <a href="#">
                                <i class="bx bx-group icon"></i>
                                <span class="text nav-text">Products</span>
                            </a>
                        </li>
                        <li class="nav-links">
                            <a href="#">
                                <i class="bx bx-home-alt icon"></i>
                                <span class="text nav-text">Customers</span>
                            </a>
                        </li>
                        <li class="nav-links">
                            <a href="#">
                                <i class="bx bx-bar-chart icon"></i>
                                <span class="text nav-text">Reports</span>
                            </a>
                        </li>
                        <li class="nav-links">
                            <a href="#">
                                <i class="bx bx-bar-chart-alt-2 icon"></i>
                                <span class="text nav-text">Billing</span>
                            </a>
                        </li>
                        <li class="nav-links">
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
                                <span class="text nav-text">Logout</span>
                            </a>
                        </li>
                        <li class="mode">
                            <div class="moon-sun">
                                <i class="bx bx-moon icon moon"></i>
                                <i class="bx bx-sun icon sun"></i> 
                            </div>
                            <span class="mode-text text">Dark Mode</span>

                            <div class="toggle-switch">
                                <span class="switch"></span>
                            </div>
                        </li>
                </div>
            </div>
        
        </nav>
    </div>
    
        
    
</template>

<script>

export default {
    name: 'BackEndNavbar',
    components: {
       
    },
    data() {
        return {
            isLoading: true
        }
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false
        }, 2000)
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
    }

    .be-sidebar .text {
        font-size: 16px;
        font-weight: 500;
        color: var(--text-color);
    }

    .be-sidebar {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 250px;
        padding: 10px 14px;
        background: var(--sidebar-color);
    }

    .be-sidebar li{
        height: 50px;
        margin-top: 15px;
        list-style: none;
        display: flex;
        align-items: center;
    }

    .be-sidebar li .icon{
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 45px;
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

    .be-image-text .be-image img{
        width: 40px;
        border-radius: 6px;
        margin-right: 10px;
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
        transform: translateY(-50%);
        height: 20px;
        width: 20px;
        background: var(--primary-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        color: var(--sidebar-color);
        font-size: 20px;
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
    
    .be-sidebar .menu-bar{
        height: calc(100% - 50px);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .menu-bar .mode{
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

    .menu-bar .mode i .toggle-switch{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        min-width: 60px;
        cursor: pointer;
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
       
    }
</style>