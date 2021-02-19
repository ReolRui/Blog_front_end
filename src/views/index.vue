<template>
    <div class="index">
        <Head></Head>
        <div class="body">
            <Sider v-on:itemClick="siderClick"></Sider>
            <ArticleList v-bind:articleList="list"></ArticleList>
            <Profile> </Profile>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Head from '../components/head'
import Sider from '../components/sider'
import Profile from '../components/profile'
import ArticleList from '../components/articlesList'

export default {
    components: {
        Sider,
        Profile,
        Head,
        ArticleList
    },
    data() {
        return {
            list: []
        }
    },
    methods: {
        async siderClick(item) {
            console.log(item);
            let res = await axios.get('http://127.0.0.1:3000/getList', { params: { category: item } });
            this.list = res.data.data;
            console.log(this.list);
        }
    },
    beforeCreate () {
        document.querySelector('body').setAttribute('style', 'width: 100%; background:#c1d4e6; height: 100%;');
}
    
}
</script>

<style scoped>
.index{
    width: 100%;
    height: 100%;
    margin: 0;
    /* position: page; */
}
.head{
    margin-top: 0px;
}
.body{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
/* .body{
    display: flex;
    justify-content: space-between;
} */
.sider{
    margin: 100px 20px 0 10px;
}
.profile{
    margin: 100px 0 0 0;
}
.active{
    align-self: center;
}
</style>