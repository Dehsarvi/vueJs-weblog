<template>
    <div class="container">
    <div class="row">
      <h1 class="title-logo">وبسایت ویو جی اس</h1>
    </div>

    <div class="row">
      <div class="col-md-8 col-md-push-2">
        <div class="row">
            <input type="text" v-model="search" class="col-md-8 col-md-push-2 search" placeholder="به دنبال چه میگردی . . . ؟ " >
        </div>
        <div v-for="post in filtredPosts" :key="post.id" class="row post">
            <router-link :to="{name:'post',params:{post_id:post.id}}">{{post.title}}</router-link>
          <!-- <h3 v-multicolor >{{post.title}}</h3>
          <p v-bolder = "post.id" >{{post.body}}</p> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Http from 'axios';
import finderMixin from '../mixins/finderMixin';
export default {
    name:'posts',
    mixins:[finderMixin],
    data(){
        return{
            posts:[],
            search:''
        }
    },
    methods:{
        getPosts(){
            Http.get('https://vuejs-weblog.firebaseio.com/posts.json')
            .then(response => {
                return response.data;
            })
            .then(data =>{
              let allPost=[]
              for(let key in data){
                  data[key].id = key;
                  allPost.push(data[key])
              }
              this.posts = allPost;
            })
            .catch(error => {
                console.log(error.response.data)
            })
        }
    },
    created(){
        this.getPosts();    
    },
   
    directives:{
        multicolor:{
            bind(el,binding){
                el.style.color = '#' + Math.random().toString().slice(2,8)
            }
        },
        bolder:{
            bind(el,binding){
                if(binding.value %2 == 0){
                    el.style.fontWeight = 600
                }
            }
        }
    }
}
</script>
<style>
    @font-face {
  font-family: Vibes;
  src: url(Scheherazade-Regular.ttf);
} 
    body{
      font-family: Vibes;
      background: #fafafa;
      font-family: iransans;
    }
    .title-logo{
      font-weight: 900;
      text-align: center;
      margin: 30px 0;
    }
    .post{
      background: #fff;
      margin: 15px 0;
      padding: 15px;
      border: 2px solid #f8f8f8;
      border-radius: 5px;
    }
    .post p{
      color: #888;
      font-size: 14px;
      font-weight: 100;
    }
    
    .post h3{
      font-weight: 800;
      font-size: 20px
    }
    .search{
      height: 45px;
      border: 0;
      font-size: 14px;
      border-radius: 4px;
    }
</style>
