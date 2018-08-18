<template>
     <div>
          <label>Enter HTML below</label>
          <textarea rows="4" cols="150" v-model="html.code"></textarea>
          <div v-html="html.code">Code you entered: {{ html.code }}</div>
     </div>
</template>

<script>
     export default{
          data(){
               return{
                    html:{
                         code:"Hello"
                    },

               }
          },
          methods:{
          }
     }

</script>

<style>

</style>
