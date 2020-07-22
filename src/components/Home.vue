<template>
    <div>
        <navbar></navbar>
        <router-view></router-view>
    </div>
</template>

<script>
import AddPost from './AddBlog';
import Posts from './Posts'
import Navbar from './Navbar'
export default {
    name:'home',
    components:{
        'posts':Posts,
        'add-post':AddPost,
        'navbar':Navbar
    }
}
</script>

<style>

</style>