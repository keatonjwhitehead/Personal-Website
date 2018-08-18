<template>
<div>
     <table style="width:500px; border:dashed 1px lightgreen; margin: 20px auto;">
          <tr>
               <td><u>Workout</u></td>
               <td><u>Sets</u></td>
               <td><u>Reps</u></td>
               <td><u>Weight</u></td>
          </tr>
          <tr v-for="exercise in exercises">
               <td id="exercise">{{ exercise.name }}</td>
               <td style="border-radius:10px; color:lightgreen">{{ exercise.sets }}</td>
               <td style="border-radius:10px; color:lightblue">{{ exercise.reps }}</td>
               <td style="border-radius:10px; color:orange">{{ exercise.weight }}</td>
          </tr>
     </table>
</div>
</template>

<script>
export default {
     data() {
          return {
               exercises: [{
                         name: 'Chest Press',
                         sets: '10',
                         reps: [1, 2, 3, 4],
                         weight: [1, 2, 3, 4]
                    },
                    {
                         name: 'Leg Press',
                         sets: '15',
                         reps: [5, 2, 3, 4],
                         weight: [5, 2, 3, 4]
                    },
                    {
                         name: 'Squat',
                         sets: '19',
                         reps: [6, 2, 3, 4],
                         weight: [6, 2, 3, 4]
                    },
                    {
                         name: 'Bicep Curls',
                         sets: '100',
                         reps: [7, 2, 3, 4],
                         weight: [7, 2, 3, 4]
                    },
                    {
                         name: 'Tricep Press',
                         sets: '67',
                         reps: [8, 2, 3, 4],
                         weight: [8, 2, 3, 4]
                    },
               ]
          }
     }
}
</script>

<style scoped>
td {
     padding: 5px;
}

#exercise {
     padding: 5px;
     margin: 5px;
     border-radius: 10px;
     color: red;
}
</style>
