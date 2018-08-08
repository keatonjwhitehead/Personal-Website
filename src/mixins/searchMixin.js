export default{
     computed:{
          filteredBlogs:function(){
               return this.blogs.filter((blog) => {
                    return blog.blogTitle.match(this.search);
               });
          }
     }
}
