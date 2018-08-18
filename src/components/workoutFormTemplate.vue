<template>
     <div>
     <table style="width:500px; border:dashed 1px lightgreen; margin: 20px auto;">
          <tr>
               <td><u>Workout</u></td>
               <td><u>Sets</u></td>
               <td><u>Reps</u></td>
               <td><u>Weight</u></td>
          </tr>
          <tr>
               <td id="exercise">{{ exercise.exerciseName }}</td>
               <td style="border-radius:10px; color:lightgreen">{{ exercise.sets }}</td>
               <td style="border-radius:10px; color:lightblue">{{ exercise.reps }}</td>
               <td style="border-radius:10px; color:orange">{{ exercise.weight }}</td>
          </tr>
          <tr style="">
               <td id="exercise">S-Incline Dumbell</td>
               <td style="border-radius:10px; color:lightgreen">5</td>
               <td style="border-radius:10px; color:lightblue">10, 10, 10, 10, 10</td>
               <td style="border-radius:10px; color:orange">40, 40, 40, 40, 40</td>
          </tr>
          <tr>
               <td id="exercise">S-Dumbell Flies</td>
               <td style="border-radius:10px; color:lightgreen">4</td>
               <td style="border-radius:10px; color:lightblue">25, 15, 12, 8</td>
               <td style="border-radius:10px; color:orange">25, 40, 45, 55</td>
           </tr>
          <tr>
               <td id="exercise">Machine Press</td>
               <td style="border-radius:10px; color:lightgreen">5</td>
               <td style="border-radius:10px; color:lightblue">20, 15, 12, 8, 6</td>
               <td style="border-radius:10px; color:orange">35, 40, 45, 55, 60</td>
           </tr>
          <tr>
               <td id="exercise">Incline Sit ups</td>
               <td style="border-radius:10px; color:lightgreen">4</td>
               <td style="border-radius:10px; color:lightblue">60, 30, 20, 20</td>
               <td style="border-radius:10px; color:orange">0, 5, 10, 15</td>
           </tr>
     </table>
     </div>
</template>

<script>
export default{
     data(){
          return{
               exercise: {
                    exerciseName:'Chest Press',
                    sets:'4',
                    reps:[,2,3,4],
                    weight:[1,2,3,4]
               },
               exercise2: {
                    exerciseName:'title',
                    sets:'4',
                    reps:[1,2,3,4],
                    weight:[1,2,3,4]
               },
               exerciseArray:[exercise, exercise2]
          }
     }
}
</script>

<style scoped>
     td {
          padding:5px;
     }
     #exercise{
          padding:5px;
          margin:5px;
          border-radius:10px;
          color:red;
     }
</style>
