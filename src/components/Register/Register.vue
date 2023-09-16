<template>
    <div class="Login-wrap ptb-100">
        <loader v-if="isLoading" />
        <img src="../../assets/images/section-shape-2.png" alt="Image" class="section-shape-two">
         
        <div class="container">
            <div class="row ">
                <div class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                    <div class="login-form-wrap">
                        <div class="login-header">
                            <h3>Register New Account</h3>
                            <p>Welcome!! Create A New Account</p>
                        </div>
                        <div class="login-form">
                            <div class="login-body">
                                <form class="form-wrap" @submit.prevent>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <input v-model="fullName" id="text" name="fname" type="text" placeholder="Full Name" >
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <input v-model="email" id="email" name="email" type="text" placeholder="Email"  >
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <input v-model="password" id="pwd" name="pwd"  type="password" placeholder="Password" >
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <input v-model="confirmPassword" id="pwd_2" name="pwd_2"  placeholder="Confirm Password"  type="password" >
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-12 mb-20">
                                            <div class="checkbox style3">
                                                <input v-model="terms" type="checkbox" id="test_1">
                                                <label for="test_1">
                                                    I Agree with the 
                                                    <router-link class="link style1" to="/terms-of-service">Terms &amp; conditions</router-link>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <button class="btn style1" @click="register">
                                                    Register Now 
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <p class="mb-0">Have an Account?
                                                <router-link class="link style1" to="/login">Sign In</router-link>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Loader from "../Layouts/Loader.vue"
export default {
    name: 'Register',
    components: {
        Loader,
    },
    data: () => ({
        fullName: "",
        email:"",
        password: "",
        confirmPassword:"",
        terms:null,
        isLoading: false,
        
    
    }),
    methods: {
    register() {
      
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(this.fullName == ""){
        this.$swal.fire(
        'Login error!',
        'Please enter a valid Full Name!',
        'error'
        )
      }
      
      else if(!mailformat.test(this.email)){
        this.$swal.fire(
        'Login error!',
        'Please enter a valid email address!',
        'error'
        )
      }
      else if(this.password == ""){
        this.$swal.fire(
        'Login error!',
        'Please enter a valid password!',
        'error'
        )
      }
      else if(this.password.length < 10){
        this.$swal.fire(
        'Login error!',
        'Please enter a Stronger password!',
        'error'
        )
      }
      else if(this.confirmPassword == ""){
        this.$swal.fire(
        'Login error!',
        'Please enter a valid confirm password!',
        'error'
        )
      }
      else if(this.confirmPassword != this.password){
        this.$swal.fire(
        'Login error!',
        'Your password does not match the confirm password!',
        'error'
        )
      }
      else if(this.terms == null){
        this.$swal.fire(
        'Login error!',
        'Please confirm you agree with the terms & conditions!',
        'error'
        )
      }
      else{
        this.isLoading = true;
        this.$swal.fire(
        'Good job!',
        'You have successfully registered your profile!',
        'success'
        )
        this.isLoading = false;
      }
      
    },
  },
}
</script>
<style>
body{
  background: #010647;
}
</style>