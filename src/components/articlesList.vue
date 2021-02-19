<template>
    <div class="articleList">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>文章列表</span>
                <el-button style="float: right; padding: 3px 0" type="text" @click="dialogFormVisible = true">新建文档</el-button>
                <div class="new">
                    <el-dialog title="新建文档" :visible.sync="dialogFormVisible">
                    <el-form :model="article">
                        <el-form-item label="文章类别" :label-width="formLabelWidth">
                        <el-input v-model="article.category" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="文章标题" :label-width="formLabelWidth">
                        <el-input v-model="article.title" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogFormVisible = false, toEdit()">确 定</el-button>
                    </div>
                </el-dialog>
                </div>
                
            </div>
            <div v-for="item in articleList" :key="item" class="text item" @click="articleClick(item)">
                <div class="article" >
                    <h2>{{item.title}}</h2>
                    <div class="preview">
                        {{item.content}}
                    </div>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            list: [],
            dialogTableVisible: false,
            dialogFormVisible: false,
            article: {
                category: '',
                title: '',
            },
            formLabelWidth: '120px'
        }
    },
    props:{
        articleList: {
            type: Array,
        }
    },
    methods: {
        articleClick(item) {
            this.$router.push({path: '/article', query: {article: item}})
        },
        toEdit() {
            this.$router.push({path: '/editor', query: {article: this.article}})
        }
    }
}
</script>

<style scoped>
.articleList{
    /* text-align: center; */
    display: flex;
    justify-content: center;
    
}
.article{
    text-align: center;
    color: #544a4a;
}
h2{
    /* margin-top: 20px; */
    padding-top: 10px;
}
.preview{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    font-size: 16px;
    margin: 0 25px 0 25px;
}
.text {
    font-size: 14px;
  }

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both
}
.box-card {
    width: 750px;
    background-color: #e8ebf0;
}
.article{
    width: 700px;
    height: 150px;
    background-color: #c1d4e6;
    border-radius: 4px
}
.article:hover{
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

</style>