<template>
     <div>
          <app-header></app-header>
          <keep-alive>
               <router-view></router-view>
          </keep-alive>
          <workout-template></workout-template>
          <app-footer></app-footer>
     </div>

</template>

<script>
     import Header from './components/Header.vue'
     import Ninjas from './components/Ninjas.vue'
     import formHelper from './components/formHelper.vue'
     import addBlog from'./components/addBlog.vue'
     import showBlogs from'./components/showBlogs.vue'
     import listBlogs from'./components/listBlogs.vue'
     import Footer from './components/Footer.vue'
     import htmlEditor from './components/htmlEditor.vue'
     import addWorkout from './components/addWorkout.vue'
     import workoutFormTemplate from './components/workoutFormTemplate.vue'

     export default {
          components:{
               'app-header':Header,
               'app-footer':Footer,
               'app-ninjas':Ninjas,
               'form-helper':formHelper,
               'add-blog':addBlog,
               'show-blogs':showBlogs,
               'list-blogs':listBlogs,
               'html-editor':htmlEditor,
               'add-workout':addWorkout,
               'workout-template':workoutFormTemplate
          },
          data () {
              return {
                    counter:0,
                    component:'form-two',
                    formTitle:'I am a dynamic slot title',
                    title:'Elliot',
                    ninjas: [
                         {name: 'Ryu', speciality: 'Vue Components', show: false},
                         {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
                         {name: 'Hitoshi', speciality: 'Click Events', show: false},
                         {name: 'Tango', speciality: 'Conditionals', show: false},
                         {name: 'Kami', speciality: 'Webpack', show: false},
                         {name: 'Yoshi', speciality: 'Data Diggin', show: false}
                    ]
              }
          },
          methods:{
               updateTitle:function(updatedTitle){
                    this.title = updatedTitle;
               },
               handleSubmit:function(){
                    alert('thanks for logging in (from two)');
               }
          }
     }
</script>

<style scoped>
     body{
          maring:0;
          font-family:'Nunito SemiBold';
     }
</style>
