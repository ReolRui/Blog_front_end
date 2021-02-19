<template>
    <div class="welcome">
        <div class="hello">
            <img :src="imgURL" alt="" width="332px">
        </div>
        <div class="form">
            <router-link to="/welcome/register">注册</router-link>
            <router-link to="/welcome/login">登录</router-link>
            <router-view></router-view>
        </div>
       
    </div>
</template>

<script>
// import login from '../components/login'
// import register from '../components/register'
import imgURL from '@/assets/img11.jpg'

export default {
    data() {
        return {
            imgURL
        }
    },
    // components: {
    //     login,
    //     register
    // },
    mounted() {
        document.querySelector('body').setAttribute('style', 'background-color:SteelBlue')
    },
    beforeDestroy() {
        document.querySelector('body').removeAttribute('style')
    },
}
</script>

<style scoped>
.welcome{
    display: flex;
    /* justify-content: flex-start; */
    align-items: auto;
}
.hello{
    /* width: 50%; */
    /* height: 50%; */
    /* align-self: center; */
    /* background-color: blue; */
    margin: 150px 150px 0 300px;
}
.form{
    /* width: 50%;
    height: 100%; */
    /* background-color: bisque; */
    /* border: 1px solid; */
    margin-top: 50px;
}
button{
    font-size: larger;
}
a{
    text-decoration: none;
    font-size: large;
    color:	LightGray;
}
a:hover{
    color: aliceblue;
}

</style>