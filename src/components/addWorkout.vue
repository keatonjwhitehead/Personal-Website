<template>
     <div>
          <div id="add-workout">
               <h1>Workout editor</h1>
                    <div slot="form-header">
                         <h3>Add a New Workout Post</h3>
                    </div>
                    <form v-if="!submitted">
                         <label>Workout Title: </label>
                         <input type="text" placeholder="Title" v-model.lazy="workout.workoutTitle" required />
                         <label>Workout Content: </label>
                         <textarea v-model.lazy="workout.content"></textarea>
                         <div id="checkboxes">
                              <label>Ninjas</label>
                              <input type="checkbox" value="ninjas" v-model="workout.categories"/>
                              <label>Wizards</label>
                              <input type="checkbox" value="wizards" v-model="workout.categories"/>
                              <label>Mario</label>
                              <input type="checkbox" value="mario" v-model="workout.categories"/>
                              <label>Pizza</label>
                              <input type="checkbox" value="pizza" v-model="workout.categories"/>
                         </div>
                         <div id="date">
                              <label>Date of Exercise</label>
                              <input type="datetime-local" name="bdaytime">
                         </div>
                         <label>Author:</label>
                         <select v-model="workout.author">
                              <option v-for="author in authors">{{ author }}</option>
                         </select>
                         <button v-on:click.prevent="post">Add Workout</button>
                    </form>
                    <div v-if="submitted">
                         <h3> Your workout has been submitted! </h3>
                    </div>
               <div id="preview">
                    <h3>Preview Workout</h3>
                    <p>Workout title: {{ workout.workoutTitle }}</p>
                    <p>Workout content:</p>
                    <p>{{ workout.content }}</p>
                    <p>Workout categories:</p>
                    <ul>
                         <li v-for="category in workout.categories">{{ category }}</li>
                    </ul>
                    <p>Author: {{ workout.author }}</p>
               </div>
          </div>
     </div>
</template>

<script>
console.log("Made it to the file");
     export default{
          data(){
               return{
                    workout:{
                         workoutTitle:"",
                         content:"",
                         categories:[],
                         author:""
                    },
                    authors:['Keaton', 'James', 'HackCU', 'King James'],
                    submitted:false,


               }
          },
          methods:{
               post:function(){
                    this.$http.post('https://workout-journal-5e5ea.firebaseio.com/posts.json', this.workout).then(function(data){
                         console.log(data);
                         this.submitted = true;
                    });
               }
          }
     }
</script>

<style scoped>
     #add-workout *{
          box-sizing: border-box;
     }
     #add-workout{
          margin: 20px auto;
          max-width: 500px;
     }
     label{
          display: block;
          margin: 20px 0 10px;
     }
     input[type="text"], textarea{
          display: block;
          width: 100%;
          padding: 8px;
     }
     #preview{
          padding: 10px 20px;
          border: 1px dotted #ccc;
          margin: 30px 0;
     }
     h3{
          margin-top: 10px;
     }
     #checkbox input{
          display:inline-block;
          margin-right:10px;
     }
     #checkboxes label{
          display:inline-block;
     }
</style>
