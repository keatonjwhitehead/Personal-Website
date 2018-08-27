<template>
<div>
     <div id="add-workout">
          <div slot="form-header">
               <h1>Add a workout</h1>
          </div>
          <form v-if="!submitted">
               <form-generator :schema="schema" v-model="formData">
               </form-generator>
               <input v-for="" type="number" class="arrayInput" value="r1"></input>

               <label>Reps</label>
               <input type="number" class="arrayInput" value="r1" v-model="workout.reps[0]"></input>
               <input type="number" class="arrayInput" value="r2" v-model="workout.reps[1]"></input>
               <input type="number" class="arrayInput" value="r3" v-model="workout.reps[2]"></input>
               <input type="number" class="arrayInput" value="r4" v-model="workout.reps[3]"></input>
               <input type="number" class="arrayInput" value="r5" v-model="workout.reps[4]"></input>

               <label>Weights</label>
               <input type="number" class="arrayInput" value="w1" v-model="workout.weights[0]"></input>
               <input type="number" class="arrayInput" value="w2" v-model="workout.weights[1]"></input>
               <input type="number" class="arrayInput" value="w3" v-model="workout.weights[2]"></input>
               <input type="number" class="arrayInput" value="w4" v-model="workout.weights[3]"></input>
               <input type="number" class="arrayInput" value="w5" v-model="workout.weights[4]"></input>
               <button v-on:click.prevent="post">Add workout</button>
          </form>
          <div v-if="submitted">
               <h3> Your workout has been added! </h3>
          </div>
          <div id="preview ">
               <tr>
                    <td>{{ formData.title }}</td>
               </tr>
               <tr>
                    <td><u>Workout</u></td>
                    <td><u>Sets</u></td>
                    <td><u>Reps</u></td>
                    <td><u>Weight</u></td>
               </tr>
               <tr>
                    <td>{{ formData.exercise }}</td>
                    <td>{{ formData.sets }}</td>
                    <td>{{ formData.reps }}</td>
                    <td>{{ formData.weight }}</td>
               </tr>
          </div>
     </div>
</div>
</template>

<script>
import formGenerator from "./form/formGenerator";

export default {

     name: "GeneratorDemo",
     components: {
          'form-generator': formGenerator
     },
     data() {
          return {
               formData: {
                    title: "Chest Day"
               },
               workout: {
                    exercise: '',
                    sets: '',
                    reps: ['0', '0', '0', '0', '0'],
                    weight: ['0', '0', '0', '0', '0']
               },
               submitted: false,
               schema: [{
                         type: "text",
                         fieldType: "dynamicInput",
                         placeholder: "Chest Press",
                         label: "Exercise",
                         name: "exercise"
                    },
                    {
                         fieldType: "selectList",
                         name: "sets",
                         multi: false,
                         label: "Sets",
                         options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
                    }
               ]
          }
     },
     methods: {
          post: function() {
               this.$http.post('https://workout-journal-5e5ea.firebaseio.com/posts.json', this.workout)
                    .then(function(data) {
                         console.log(data);
                         submitted = true;

                    });
          }
     }
}
</script>

<style scoped>
#add-workout * {
     box-sizing: border-box;
}

#add-workout {
     margin: 20px auto;
     max-width: 500px;
}

label {
     display: block;
     margin: 20px 0 10px;
}

input[type="text"],
textarea {
     display: block;
     width: 100%;
     padding: 8px;
}

.arrayInput {
     width: 30px;
}

#preview {
     padding: 10px 20px;
     border: 1px dotted #ccc;
     margin: 30px 0;
}

h3 {
     margin-top: 10px;
}

td {
     padding: 5px;
}

#checkbox input {
     display: inline-block;
     margin-right: 10px;
}

#checkboxes label {
     display: inline-block;
}
</style>
