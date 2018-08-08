<template>
    <div id="show-workouts">
        <h1>All Workouts</h1>
        <input type="text" v-model="search" placeholder="Search workouts" />
        <div v-for="workout in filteredWorkouts" class="single-workout">
            <router-link v-bind:to="'/workout/' + workout.id"><h2>{{ workout.workoutTitle }}</h2></router-link>
            <article>{{ workout.content }}</article>
        </div>
    </div>
</template>

<script>
// Imports
import searchMixin from '../mixins/searchMixin';
export default {
    data () {
        return {
            workouts: [],
            search: ''
        }
    },
    created() {
        this.$http.get('https://workout-journal-5e5ea.firebaseio.com/posts.json').then(function(data){
            return data.json()
        }).then(function(data){
            var workoutArray = [];
            for (let key in data){
                data[key].id = key;
                workoutArray.push(data[key]);
            }
            this.workouts = workoutsArray;
            //console.log(this.workouts);
        });
    },
    mixins: [searchMixin]
}
</script>

<style scoped>
#show-workouts{
    max-width: 800px;
    margin: 0px auto;
}
.single-workout{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
    border: 1px dotted #aaa;
}
#show-workouts a{
    color: #444;
    text-decoration: none;
}
input[type="text"]{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
}
</style>
