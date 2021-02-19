<template>
    <div class="profile">
        <div class="info">
            <img src="../assets/img11.jpg" alt="" width="100px" height="100px">
            <div class="userInfo">
                <div>
                    <span>昵称</span>
                    <span>{{name}}</span>
                </div>
                <div>
                    <span>年龄</span>
                    <span>{{age}}</span>
                </div>
            </div>
        </div>
        <div class="recent">
            <span>相关文章</span>
            <ul>
                <li>文章链接1</li>
                <li>文章链接2</li>
                <li>文章链接3</li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "profile",
    data() {
        return {
            name: 'Rui',
            age: '18',
            recent: []
        }
    }
}
</script>

<style scoped>
.profile{
    width: 300px;
    height: 300px;
    /* border: 1px solid rgb(176,196,222); */
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    background-color: #e8ebf0;
    box-shadow: rgb(176,196,222);
    color: #544a4a;
    display: flex;
    flex-direction: column;
}
.info{
    display: flex;
    flex-direction: row;
}
.userInfo{
    width: 150px;
    height: 50px;
    justify-content: center;
    margin: 30px 30px 0 20px;
    
}
.userInfo div{
    padding-bottom: 10px;
}
.recent{
    margin-top: 30px;
}
</style>