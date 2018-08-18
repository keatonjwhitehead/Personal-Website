<template>
<nav>
     <ul>
          <li>
               <router-link to="/" exact>Blog</router-link>
          </li>
          <li>
               <router-link to="/add" exact>Add a new Blog</router-link>
          </li>
          <li>
               <router-link to="/ninjas" exact>Ninja Profiles</router-link>
          </li>
          <li>
               <router-link to="/htmlEditor" exact>Html Editor</router-link>
          </li>
          <li>
               <router-link to="/addWorkout" exact>Add Workout</router-link>
          </li>
          <li>
               <router-link to="/todoList" exact>Todo List</router-link>
          </li>
     </ul>
</nav>
</template>

<script>
export default {
     props: {

     },
     data() {
          return {

          }
     },
     methods: {

     }
}
</script>

<style scoped>
ul {
     list-style-type: none;
     text-align: center;
     margin: 0;
}

li {
     display: inline-block;
     margin: 0 10px;
}

a {
     color: #fff;
     text-decoration: none;
     padding: 6px 8px;
     border-radius: 10px;
}

nav {
     background: #444;
     padding: 14px 0;
     margin-bottom: 40px;
}

.router-link-active {
     background: #eee;
     color: #444;
}
</style>
