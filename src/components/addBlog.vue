<template>
     <div>
          <div id="add-blog">
               <h1>Blog editor</h1>
                    <div slot="form-header">
                         <h3>Add a New Blog Post</h3>
                    </div>
                    <form v-if="!submitted">
                         <label>Blog Title: </label>
                         <input type="text" placeholder="Title" v-model.lazy="blog.blogTitle" required />
                         <label>Blog Content: </label>
                         <textarea v-model.lazy="blog.content"></textarea>
                         <div id="checkboxes">
                              <label>Ninjas</label>
                              <input type="checkbox" value="ninjas" v-model="blog.categories"/>
                              <label>Wizards</label>
                              <input type="checkbox" value="wizards" v-model="blog.categories"/>
                              <label>Mario</label>
                              <input type="checkbox" value="mario" v-model="blog.categories"/>
                              <label>Pizza</label>
                              <input type="checkbox" value="pizza" v-model="blog.categories"/>
                         </div>
                         <label>Author:</label>
                         <select v-model="blog.author">
                              <option v-for="author in authors">{{ author }}</option>
                         </select>
                         <button v-on:click.prevent="post">Add blog</button>
                    </form>
                    <div v-if="submitted">
                         <h3> Your blog has been submitted! </h3>
                    </div>
               <div id="preview">
                    <h3>Preview Blog</h3>
                    <p>Blog title: {{ blog.blogTitle }}</p>
                    <p>Blog content:</p>
                    <p>{{ blog.content }}</p>
                    <p>Blog categories:</p>
                    <ul>
                         <li v-for="category in blog.categories">{{ category }}</li>
                    </ul>
                    <p>Author: {{ blog.author }}</p>
               </div>
          </div>
     </div>
</template>

<script>
     export default{
          data(){
               return{
                    blog:{
                         blogTitle:"",
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
                    this.$http.post('https://workout-journal-5e5ea.firebaseio.com/posts.json', this.blog).then(function(data){
                         console.log(data);
                         this.submitted = true;
                    });
               }
          }
     }
</script>

<style scoped>
     #add-blog *{
          box-sizing: border-box;
     }
     #add-blog{
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
