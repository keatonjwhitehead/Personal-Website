<template>
<div>
     <div id="add-workout">
          <div slot="form-header">
               <h1>Add a workout</h1>
          </div>
          <form-generator :schema="schema" v-model="formData">
          </form-generator>

          <div id="preview">
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
               schema: [{
                         fieldType: "selectList",
                         name: "title",
                         multi: false,
                         label: "Title",
                         options: ["", "Mr", "Ms", "Mx", "Dr", "Madam", "Lord"]
                    },
                    {
                         fieldType: "textInput",
                         placeholder: "Chest Press",
                         label: "Exercise",
                         name: "exercise"
                    },
                    {
                         fieldType: "numberInput",
                         placeholder: "3",
                         name: "sets",
                         label: "Sets",
                         minValue: 1
                    },
                    {
                         fieldType: "numberInput",
                         placeholder: "3",
                         name: "reps",
                         label: "Reps",
                         minValue: 1
                    },
                    {
                         fieldType: "numberInput",
                         placeholder: "3",
                         name: "weight",
                         label: "Weight",
                         minValue: 1
                    }
               ]
          }
     },
     methods: {
          post: function() {
               this.$http.post('https://workout-journal-5e5ea.firebaseio.com/posts.json', this.workout)
                    .then(function(data) {
                         console.log(data);

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
