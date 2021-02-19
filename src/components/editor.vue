<template>
    <div class="editor">
        <el-button plain @click="saveBtn(),toIndex()">保存退出</el-button>
        <mavon-editor
            style="height: 100%"
            v-model="content"
            :ishljs="true"
            ref=md
            @imgAdd="imgAdd"
            @imgDel="imgDel">
        </mavon-editor>
    </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import axios from 'axios'
export default {
    data() {
        return {
            article: {
                category: '',
                title: '',
                content: ''
            },
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
    created() {
        this.article.category = this.$route.query.article.category;
        this.article.title = this.$route.query.article.title;

    },
    methods: {
        imgAdd (pos, $file) {
        },
        imgDel () {

        },
        async saveBtn() {
            this.article.content = this.content;
            await axios.get('http://127.0.0.1:3000/newArticle', { params: this.article})
                .then( res => {
                    console.log(res.data.msg);
                })
        },
        toIndex() {
            this.$router.push({path: '/index'})
        }
    },
    components: {
        mavonEditor
    }
}
</script>

<style scoped>
.editor{
    width: 1000px;
    height: 600px;
    margin: 30px auto;
}
.el-button{
    margin-bottom: 10px;
}

</style>