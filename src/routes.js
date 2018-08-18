import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import singleBlog from './components/singleBlog.vue';
import ninjas from './components/Ninjas.vue';
import htmlEditor from './components/htmlEditor.vue';
import addWorkout from './components/addWorkout.vue';
import todoList from './components/todoList.vue';

export default [
     { path: '/', component: showBlogs },
     { path: '/add', component: addBlog },
     { path: '/blog/:id', component:singleBlog },
     { path: '/ninjas', component:ninjas },
     { path: '/htmlEditor', component:htmlEditor },
     { path: '/addWorkout', component:addWorkout },
     { path: '/todoList',component:todoList }

]
