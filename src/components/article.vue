<template>
    <div class="article-box">
        <div class="options">
            <el-button type="primary" icon="el-icon-edit" circle @click="edit"></el-button>
            <el-button type="success" icon="el-icon-check" circle @click="submit"></el-button>
            <el-button type="danger" icon="el-icon-delete" circle @click="del"></el-button>
        </div>
        <div class="article">
            <h2>{{article.title}}</h2>
            <div class="content">
                {{article.content}}
            </div>
        </div>
        <mavon-editor
            style="height: 100%"
            v-model="content"
            v-show="isEdit"
            :ishljs="true"
            ref=md
            @imgAdd="imgAdd"
            @imgDel="imgDel"
            @save="save">
        </mavon-editor>
    </div>
</template>

<script>
import axios from 'axios'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
    data() {
        return {
            article: {

            },
            isEdit: false,
            content: '',
            toolbars: {
                bold: true, // 粗体
                italic: true, // 斜体
                header: true, // 标题
                underline: true, // 下划线
                strikethrough: true, // 中划线
                mark: true, // 标记
                superscript: true, // 上角标
                subscript: true, // 下角标
                quote: true, // 引用
                ol: true, // 有序列表
                ul: true, // 无序列表
                link: true, // 链接
                imagelink: true, // 图片链接
                code: true, // code
                table: true, // 表格
                fullscreen: true, // 全屏编辑
                readmodel: true, // 沉浸式阅读
                htmlcode: true, // 展示html源码
                help: true, // 帮助
                /* 1.3.5 */
                undo: true, // 上一步
                redo: true, // 下一步
                trash: true, // 清空
                save: false, // 保存（触发events中的save事件）
                /* 1.4.2 */
                navigation: true, // 导航目录
                /* 2.1.8 */
                alignleft: true, // 左对齐
                aligncenter: true, // 居中
                alignright: true, // 右对齐
                /* 2.2.1 */
                subfield: true, // 单双栏模式

            }
        }
    },
    methods: {
        edit() {
            this.isEdit = true;
            console.log(this.article.content);
            this.content = this.article.content
        },
        async submit() {
            console.log(this.article.content);
            await axios.get('http://127.0.0.1:3000/updateArticle',{ params: {title: this.article.title, content: this.article.content,id: this.article._id}})
                .then( res => {
                    console.log(res.data.msg);
                })
            this.isEdit = false
        },
        async del() {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });
            await axios.get('http://127.0.0.1:3000/delArticle',{ params: {id: this.article._id}})
                .then( res => {
                    console.log(res.data.msg);
                })
        },
        save(markdown, html) {
            this.article.content = markdown;
        },
        // 绑定@imgAdd event
        imgAdd(pos, $file){
            // 第一步.将图片上传到服务器.
           let formdata = new FormData();
           formdata.append('image', $file);
           axios({
               url: 'server url',
               method: 'post',
               data: formdata,
               headers: { 'Content-Type': 'multipart/form-data' },
           }).then((url) => {
               // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
               // $vm指为mavonEditor实例，可以通过如下两种方式获取
               //通过引入对象获取: import {mavonEditor} from ... 等方式引入后，此时$vm即为mavonEditor
               //通过$refs获取: html声明ref : <mavon-editor ref=md ></mavon-editor>， 此时$vm为 this.$refs.md`
               $vm.$img2Url(pos, url);
           })
        }
    },
    created() {
        this.article = this.$route.query.article

        // this.$route.params.article
    },
    components: {
        mavonEditor
    }
}
</script>

<style scoped>
.article-box{
    /* display: flex; */
    width: 900px;
    /* background-color: aqua; */
    margin: 30px auto;
    color: #544a4a;
    
    border-radius: 4px

}
.options{
    width: 200px;
    /* padding-right: 0px; */
    /* float: right; */
}
.article{
    /* width: 500px; */
    /* height: 600px; */
    background-color: azure;
}
h2{
    padding-top: 35px;
    text-align: center;
}
.content{
    padding: 0 50px 80px 50px;
}
</style>