Hello, 
  This is Harshita Bilgaiyan sharing my knowledge about "Front End Developer Assessment - Blogging Platform". In this application, I am trying to display the list of all posts by searching with the title of posts and pagination functionality. And for viewing single post detail here I use vuex State Management System. To complete and achieve the project I follow the below step:

1. Create a new project with "vue create Blogging-Application" and pick preset "n (babel, router, vuex, eslint)".
2. Instal Axios with the command "npm install --save axios vue-axios".
3. Import libraries in main.js like: import Axios from "axios"; and use "axios" inside new Vue({}) instance.
4. For using bootstrap4 here I use CSS link in index.html file in :
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  </head>  
5. Create two components 
    a. PostDetail.vue - Detail view of a single post.
	b. PostList.vue - List of all posts.
6. Add routes inside index.js and define path, name, components address, and by using "Vue Router" for routing create router link for navigation with the tag of <router-link></router-link> inside the App.vue .
7. For first page which is "PostList.vue" display list of all post. In UI table contains two columns with the names "Post Id" and "Title". Inside this page there are following functionalities are working:
 a. Implementation of a search filter that searching with titles on keyup in the placeholder of search area.
 b. In list page of post here i am showing 10 posts per page with pagination.
 c. All post titles are hyperlinked with the post details (PostDetail.vue) and details showing by using "Vuex State Management System(vuex)".
8. For getting the list of all posts here I use Axios async library.
9. For viewing single post detail here I am using vuex state, getters, mutations and action functionalities.