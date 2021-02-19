<template>
    <div>
        <el-row class="tac">
            <el-col :span="12">
                <h3>了解我</h3>
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#e8ebf0"
                text-color="#544a4a"
                active-text-color="#8b1a1a">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title">文章</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item v-for="item in category" :key="item" @click="itemClick(item.name)">
                                {{item.name}}
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="2" @click="toTimeLine()">
                        <i class="el-icon-menu"></i>
                        <span slot="title">时间戳</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-setting"></i>
                        <span slot="title">留言板</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">自我介绍</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
        return {
            category: []
        }
    },
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },
      itemClick(item) {
          this.$emit('itemClick', item)
      },
      toTimeLine() {
          this.$router.push({path: '/timeline'})
      }
    },
    async created() {
        axios.get('http://127.0.0.1:3000/getCategory').then( res => {
            // console.log(res);
            // console.log(res.data.data);
            this.category = res.data.data
        })
    },

  }
</script>

<style>
h3{
    margin-left: 20px;
}
.el-col-12{
    width: 100%;
}

.tac{
    width: 220px;
    height: 100%;
}
</style>