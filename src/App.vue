<template>
     <div>
          <app-header></app-header>
          <keep-alive>
               <router-view></router-view>
          </keep-alive>
     </div>

</template>

<script>
     import Header from './components/Header.vue'
     import Ninjas from './components/Ninjas.vue'
     import formHelper from './components/formHelper.vue'
     import formOne from './components/formOne.vue'
     import formTwo from './components/formTwo.vue'
     import addBlog from'./components/addBlog.vue'
     import showBlogs from'./components/showBlogs.vue'
     import listBlogs from'./components/listBlogs.vue'
     import Footer from './components/Footer.vue'
     import htmlEditor from './components/htmlEditor.vue'
     import addWorkout from './components/addWorkout.vue'

     export default {
          components:{
               'app-header':Header,
               'app-footer':Footer,
               'app-ninjas':Ninjas,
               'form-helper':formHelper,
               'form-one':formOne,
               'form-two':formTwo,
               'add-blog':addBlog,
               'show-blogs':showBlogs,
               'list-blogs':listBlogs,
               'html-editor':htmlEditor,
               'add-workout':addWorkout
          },
          data () {
              return {
                    counter:0,
                    component:'form-two',
                    formTitle:'I am a dynamic slot title',
                    title:'Elliot',
              }
          },
          methods:{
               updateTitle:function(updatedTitle){
                    this.title = updatedTitle;
               },
               handleSubmit:function(){
                    alert('thanks for login in (from two)');
               }
          }
     }
</script>

<style scoped>
     body{
          maring:0;
          font-family:'Nunito SemiBold'
     }
</style>
