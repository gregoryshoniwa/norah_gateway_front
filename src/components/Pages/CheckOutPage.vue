<template>
    <div class="container">
        <loader v-if="isLoading" />
            
        <form action="">
            <div class="login-header">
                <div style="display: flex; align-items: center; justify-content: center;margin: 15px;">
                    <img src="../../assets/images/logo.fw.png" alt="logo">
                    <span><h3>NORAH : Check-Out</h3></span>
                </div> 
            </div>
            <div class="row">

                <div class="col">

                    <!-- <h3 class="title">billing address</h3> -->

                    <div class="inputBox">
                        <span>full name :</span>
                        <input type="text" placeholder="john deo">
                    </div>
                    <div class="inputBox">
                        <span>email :</span>
                        <input type="email" placeholder="example@example.com">
                    </div>
                    <div class="inputBox">
                        <span>address :</span>
                        <input type="text" placeholder="room - street - locality">
                    </div>
                    
                    <div class="flex">
                        <div class="inputBox">
                            <span>city :</span>
                            <input type="text" placeholder="india">
                        </div>
                        <div class="inputBox">
                            <span>Country :</span>
                            <input type="text" placeholder="123 456">
                        </div>
                    </div>

                </div>

                <div class="col">

                    <!-- <h3 class="title">payment</h3> -->

                    <div class="inputBox">
                        <span>Select Method : <b>{{ paymentMethod }}</b></span>
                        <img @click="paymentType('Bank Transfer')" style="margin: 5px;" src="../../assets/images/payments/banktransfer.fw.png" alt="Bank Transfer">
                        <img @click="paymentType('Zipit')" style="margin: 5px;" src="../../assets/images/payments/zimswitch.png" alt="Zipit">
                        <img @click="paymentType('EcoCash')" style="margin: 5px;" src="../../assets/images/payments/ecocash.png" alt="Ecocash">
                        <img @click="paymentType('Visa Card')" style="margin: 5px;" src="../../assets/images/payments/visa.png" alt="Visa Card">
                        <img @click="paymentType('Master Card')" style="margin: 5px;" src="../../assets/images/payments/mastercard.png" alt="Master Card">
                    </div>
                    <section v-if="paymentMethod == 'Visa Card' || paymentMethod == 'Master Card'">
                        <div class="inputBox">
                            <span>name on card :</span>
                            <input type="text" placeholder="mr. john deo">
                        </div>
                        <div class="inputBox">
                            <span>credit card number :</span>
                            <input type="number" placeholder="1111-2222-3333-4444">
                        </div>
                    

                        <div class="flex">
                            <div class="inputBox">
                                <span>exp MM/YY :</span>
                                <input type="number" placeholder="2022">
                            </div>
                            <div class="inputBox">
                                <span>CVV :</span>
                                <input type="text" placeholder="1234">
                            </div>
                        </div>

                    </section>
                    <section v-if="paymentMethod == 'Bank Transfer'">
                        <div class="inputBox">
                            <span>name of Account :</span>
                            <input type="text" placeholder="mr. john deo">
                        </div>
                        <div class="inputBox">
                            <span>account number :</span>
                            <input type="number" placeholder="660123654789">
                        </div>
                        <div class="inputBox">
                            <span>Transaction Ref :</span>
                            <input type="number" placeholder="F111-G222-3333">
                        </div>
                    
                    </section>
                    <section v-if="paymentMethod == 'Zipit'">
                        <div class="inputBox">
                            <span>name of Account :</span>
                            <input type="text" placeholder="mr. john deo">
                        </div>
                        <div class="inputBox">
                            <span>account number :</span>
                            <input type="number" placeholder="660123654789">
                        </div>
                        <div class="inputBox">
                            <span>Transaction Ref :</span>
                            <input type="number" placeholder="F111-G222-3333">
                        </div>

                    </section>
                    <section v-if="paymentMethod == 'EcoCash'">
                        
                        <div class="inputBox">
                            <span>Econet number :</span>
                            <input type="number" placeholder="0772996330">
                        </div>
                    

                    </section>
                    
                
                </div>

            </div>

            <input type="submit" value="Pay : $152.52" class="submit-btn">

        </form>

    </div>  
  </template>
<script>
import Loader from "../Layouts/Loader.vue"
export default {
    name: 'CheckOut',
    components: {
        Loader,
    },
  data: function() {
    return {
      paymentMethod: "Bank Transfer"
    };
  },
  methods:{
    paymentType(type){
        this.paymentMethod = type
    }
  }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&display=swap');

*{
  font-family: 'Poppins', sans-serif;
  margin:0; padding:0;
  box-sizing: border-box;
  outline: none; border:none;
  text-transform: capitalize;
  transition: all .2s linear;
}

.container{
  display: flex;
  justify-content: center;
  align-items: center;
  padding:25px;
  min-width: 100%;
  min-height: 100vh;
  background: linear-gradient(90deg, #010647 60%, #303795 40%);
}

.container form{
  padding:20px;
  width:800px;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0,0,0,.1);
}

.container form .row{
  display: flex;
  flex-wrap: wrap;
  gap:15px;
}

.container form .row .col{
  flex:1 1 250px;
}

.container form .row .col .title{
  font-size: 20px;
  color:#333;
  padding-bottom: 5px;
  text-transform: uppercase;
}

.container form .row .col .inputBox{
  margin:15px 0;
}

.container form .row .col .inputBox span{
  margin-bottom: 10px;
  display: block;
}

.container form .row .col .inputBox input{
  width: 100%;
  border:1px solid #ccc;
  padding:10px 15px;
  font-size: 15px;
  text-transform: none;
}

.container form .row .col .inputBox input:focus{
  border:1px solid #000;
}

.container form .row .col .flex{
  display: flex;
  gap:15px;
}

.container form .row .col .flex .inputBox{
  margin-top: 5px;
}

.container form .row .col .inputBox img{
  height: 34px;
  margin-top: 5px;
  filter: drop-shadow(0 0 1px #000);
}

.container form .submit-btn{
  width: 100%;
  padding:12px;
  font-size: 17px;
  background: #010647;
  color:#fff;
  margin-top: 5px;
  cursor: pointer;
}

.container form .submit-btn:hover{
  background: #303795;
}

img:hover {
    cursor: pointer;
}
</style>