<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">Vue js</a>
            </div>
            <ul class="nav navbar-nav">
                <li><router-link :to="{name:'posts'}">صفحه اصلی</router-link></li>
                <li><router-link :to="{name:'insert'}">افزودن نوشته</router-link></li>
            </ul>

        </div>
        </nav>
</template>
<script>
export default {
    name:'navbar'
}
</script>
<style>
        @font-face {
  font-family: Vibes;
  src: url(Scheherazade-Regular.ttf);
}
nav{
font-family:Vibes;
font-size:20px;
}

</style>