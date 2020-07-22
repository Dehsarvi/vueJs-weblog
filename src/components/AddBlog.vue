<template>
    <div class="col-md-8 col-md-push-2">
    <form class="form-horizontal" @submit.prevent="createArticle" v-if="!submited">
        <fieldset class="wraper">

            <!-- Form Name -->
            <legend>وبلاگ - افزودن نوشته</legend>

            <!-- Text input-->
            <div class="form-group">
                <label class="col-md-4 control-label" for="firstName">عنوان:</label>
                <div class="col-md-4">
                    <input type="text" v-model="article.title" placeholder="عنوان را وارد کنید" class="form-control input-md">
                </div>
            </div>

            <!-- Text input-->
            <div class="form-group">
                <label class="col-md-4 control-label" for=" lastName">محتوای نوشته:</label>
                <div class="col-md-4">
                    <textarea rows="8" type="text" v-model="article.content"  placeholder="محتوا را وارد کنید" class="form-control input-md"></textarea>
                </div>
            </div>

            <!-- Multiple Checkboxes (inline) -->
            <div class="form-group">
                <label class="col-md-4 control-label" for="checkboxes">موضوع : </label>
                <div class="col-md-4">
                    <label class="checkbox-inline" for="checkboxes-0">
                          <input type="checkbox"  value="وب برنامه نویسی" v-model="article.categories"> وب برنامه نویسی
                    </label>
                    <label class="checkbox-inline" for="checkboxes-1" >
                          <input type="checkbox"  value="طراحی وب" v-model="article.categories" >
                            طراحی وب
                    </label>
                    <label class="checkbox-inline" for="checkboxes-2" >
                          <input type="checkbox"  value="معماری وب" v-model="article.categories" >
                            معماری وب
                    </label>
                    <label class="checkbox-inline" for="checkboxes-3" >
                          <input type="checkbox"  value="مدیریت سرور" v-model="article.categories" >
                            مدیریت سرور
                    </label>
                    <label class="checkbox-inline" for="checkboxes-3" >
                          <input type="checkbox"  value="مارکتینگ" v-model="article.categories" >
                            مارکتینگ
                    </label>
                    <label class="checkbox-inline" for="checkboxes-3" >
                          <input type="checkbox"  value="سئو" v-model="article.categories" >
                            سئو
                    </label>
                </div>
            </div>

            <!-- Select Basic -->
            <div class="form-group">
                <label class="col-md-4 control-label" for="selectbasic">نویسنده</label>
                <div class="col-md-4">
                    <select id="selectbasic" v-model="article.author" name="selectbasic" class="form-control">
                        <option v-for="author in authors" :key="author" >{{author}}</option>
                    </select>
                </div>
            </div>


            <!-- Button -->
            <div class="form-group">
                <div class="col-md-4">
                    <button id="singlebutton" type="submit" name="singlebutton" class="btn btn-warning">ارسال درخواست</button>
                </div>
            </div>
        </fieldset>
    </form>
                <div class="row" v-if="submited">
                <h3>نوشته شما با موفقیت ذخیره شد.</h3>
            </div>

            <!-- preview section -->
            <div class="form-group preview">
                <div class="col-md-12">
                    <h3>پیش نمایش نوشته</h3>
                    <hr>
                    <div class="row  ">
                        <div class="col-md-2 bold">
                            <p>عنوان: </p>
                        </div>
                        <div class="col-md-10">
                            <p>{{article.title}}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2 bold">
                            <p>محتوای نوشته: </p>
                        </div>
                        <div class="col-md-10">
                            <p>{{article.content}}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2 bold">
                            <p>دسته بندی: </p>
                        </div>
                        <div class="col-md-10">
                            <ul>
                                <li v-for="category in article.categories" :key="category" >{{category}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2 bold">
                            <p>نویسنده: </p>
                        </div>
                        <div class="col-md-10">
                            <p>{{article.author}}</p>
                        </div>
                    </div>
                </div>
            </div>

</div>
</template>
<script>
import Http from 'axios';

export default {
    name:'addBlog',
    data(){
        return{
            article:{
                title:'',
                content:'',
                author:'آتوسا ده سروی',
                categories:[]
            },
            authors:[  'حافظ دیواندری',' آتوسا ده سروی'],
            submited:false
        }
    },
    methods:{
        createArticle(){
            Http.post('https://vuejs-weblog.firebaseio.com/posts.json', this.article)
            .then(response =>{
                this.submited = response.status;
            })
            .catch(error =>{
                console.log(error.response)
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
.wraper {
    padding: 5px;
    background: #878E88;
    border: 1px solid rgb(71,71, 71);
    border-radius: 5px;
    font-family: Vibes;
    font-size: 28px;
    color: #F7CB15;
}

legend {
    background: #878E88;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid rgb(71, 71, 71);
    font-size: 28px;
    color: #F7CB15;
}

.preview {
    background: #878E88;
    margin: 5px !important;
    border: 1px solid rgb(71, 71, 71);
    border-radius: 5px;
    font-size: 28px;
    color: #F7CB15;
}

.preview p {
    padding: 15px;
    font-size: 28px;
    color: #F7CB15;
}

.bold p {
    font-weight: 800;
    font-size: 28px;
    color: #F7CB15;
}
</style>
