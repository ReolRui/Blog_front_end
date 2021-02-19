<template>
    <div class="head">
        <!-- <img :src="imgURL" alt="" width="100%"> -->
    </div>
</template>

<script>
import imgURL from '../assets/img13.jpg'
export default {
    name: 'head',
    data() {
      return {
        imgURL
      };
    },
}
</script>

<style scoped>
.head{
    /* display: flex;
    justify-content: center; */
    height: 100px;
    /* background-color: aqua; */
    background: url('../assets/img13.jpg');
}

</style>