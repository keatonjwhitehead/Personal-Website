<template>
     <div id="ninjas">
          <ul>
               <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show">
                    <h2 v-rainbow>{{ ninja.name }}</h2>
                    <h3 v-show="ninja.show">{{ ninja.specialty }}</h3>
               </li>
          </ul>
          <button v-on:click="deleteNinja"> Delete ninja </button>
     </div>

</template>

<script>

export default {
     props:{

          },
     data () {
         return {
               ninjas:{
                    type:Array,
                    show:true
               }
          }
     },
     methods:{
          test:function(){
               this.ninjas;
          },
          deleteNinja:function(){
               this.ninjas.pop();

          }
     },
     ///////////////lifecycle hooks/////////////////////
     //beforeCreate(){
     //     alert("beforeCreate");
     //},
     //Good place to grab data
     //created(){
     //     alert("created");
     //},
     //beforeMount(){
     //     alert("beforeMount");
     //},
     //Good place to manipulate the DOM, also can grab data here
     //mounted(){
     //     alert("mounted");
     //},
     //beforeUpdate(){
     //     alert("beforeUpdate");
     //},
     //updated(){
     //     alert("updated");
     //},
     //beforeDestroy(){
     //     alert("beforeDestroy");
     //},
     //destroyed(){
     //     alert("destroyed");
     //}
}
</script>

<style scoped>
     #ninjas{
          width: 100%;
          max-width: 1200px;
          margin: 40px auto;
          padding: 0 20px;
          box-sizing: border-box;
     }
     ul{
          display: flex;
          flex-wrap: wrap;
          list-style-type: none;
          padding: 0;
     }
     li{
          flex-grow: 1;
          flex-basis: 300px;
          text-align: center;
          padding: 30px;
          border: 1px solid #222;
          margin: 10px;
     }
</style>
