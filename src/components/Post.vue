<template>
    <div>
        <h1>{{post.title}}</h1>
        <h4>{{post.content}}</h4>
        <hr>
        <router-link :to="{name:'posts'}">Back</router-link>

    </div>
</template>

<script>
import Http from 'axios'
    export default {
        name:'post',
        data(){
            return{
               postid:this.$route.params.post_id,
               post:{}
            }
        },
        created(){
            this.getPost();
        },
        methods:{
            getPost(){
                   Http.get('https://vuejs-weblog.firebaseio.com/posts/'+ this.postid + '.json')
            .then(response => {
                this.post = response.data;
            })
            .catch(error => {
                console.log(error.response.data)
            })
            }
        }
    }
</script>

<style>
    @font-face {
  font-family: Vibes;
  src: url(Scheherazade-Regular.ttf);
} 
div{
    font-family: Vibes;
    text-align: center;
    margin: 20px;
}
</style>