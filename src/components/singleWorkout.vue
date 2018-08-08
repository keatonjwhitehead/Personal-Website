<template>
     <div id="single-workout">
          <h1>{{ workout.workoutTitle }}</h1>
          <article>{{ workout.content }}</article>
     </div>
</template>

<script>
     export default{
          data(){
               return{
                    id:this.$route.params.id,
                    workout:{}
               }
          },
          created() {
               this.$http.get('https://workout-journal-5e5ea.firebaseio.com/posts/' + this.id + '.json').then(function(data){
                    return data.json();
               }).then(function(data){
                    this.workout = data;
               });
          }
     }
</script>

<style>
     #single-workout{
          max-width:960px;
          margin: 0 auto;
     }
</style>
