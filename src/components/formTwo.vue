<template>
     <div>
          <form-helper>
               <div slot="form-header">
                    <slot name="form-header">
                         <h3>Form Two - Log in</h3>
                         <p>Enter your details to log-in</p>
                    </slot>
               </div>
               <div slot="form-fields">
                    <slot name="form-fields">
                         <label>Username:</label>
                         <input type="text" placeholder="username" required />
                         <label>Password</label>
                         <input type="password" placeholder="password" required />
                    </slot>
               </div>
               <div slot="form-controls">
                    <slot name="form-control">
                         <button v-on:click="handleSubmit">Login</button>
                    </slot>
               </div>
          </form-helper>
     </div>
</template>

<script>
import formHelper from './formHelper.vue'
     export default{
          components:{
               'form-helper':formHelper
          },
          data(){
               return{

               }
          },
          methods:{
               handleSubmit:function(){
                    alert('Thank you for completing form Two');
               }
          }
     }
</script>

<style scoped>

</style>
