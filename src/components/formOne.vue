<template>
     <div>
          <form-helper>
               <div slot="form-header">
                    <h3>Form One - Contact Us</h3>
                    <p>Fill in the form to contact us</p>
               </div>
               <div slot="form-fields">
                    <label>Your name: </label>
                    <input type="text" placeholder="name" required />
                    <label>This is not your message:</label>
                    <textarea></textarea>
               </div>
               <div slot="form-controls">
                    <button v-on:click="handleSubmit">Send</button>
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
                    alert('Thank you for submitting form one');
               }
          }
     }
</script>

<style scoped>

</style>
