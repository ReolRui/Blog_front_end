<template>
    <div>
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in imgs" :key="item.id">
                <!-- <h3 class="medium">{{ img }}</h3> -->
                <img :src="item.url" alt="imgs">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            imgs: [
                { id: '1', url: "../assets/img01.JPG"},
                { id: '2', url: '../assets/img02.JPG'},
                { id: '3', url: '../assets/img03.JPG'},
                { id: '4', url: '../assets/img04.JPG'},
                { id: '5', url: '../assets/img05.JPG'},
                { id: '6', url: '../assets/img06.JPG'},
            ]
        }
    }
}
</script>

<style scoped>
.home{
    width: 500px;
    height: 500px;
    background-color: aquamarine;
}
.el-carousel__item img {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>