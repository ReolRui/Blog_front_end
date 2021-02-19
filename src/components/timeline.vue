<template>
    <div class="block">
    <el-timeline>
        <div v-for="item in cards" :key="item">
            <el-timeline-item placement="top">
                {{formatDate}}
                <el-card>
                    <p>{{item.content}}</p>
                </el-card>
            </el-timeline-item>
        </div>
    </el-timeline>
    <el-button type="primary" @click="add()">添加</el-button>

    <div id="editor">
        <mavon-editor
            style="height: 100%"
            v-model="content"
            :ishljs="true"
            ref=md>
        </mavon-editor>
    </div>
</div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
    data() {
        return {
            cards: [],
            card: {
                content: '',
                date:''
            },
            content: ''
        }
    },
    filters: {
        formatDate: function (value) {
            let date = new Date(value);
            let y = date.getFullYear();
            let MM = date.getMonth() + 1;
            MM = MM < 10 ? ('0' + MM) : MM;
            let d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            let h = date.getHours();
            h = h < 10 ? ('0' + h) : h;
            let m = date.getMinutes();
            m = m < 10 ? ('0' + m) : m;
            let s = date.getSeconds();
            s = s < 10 ? ('0' + s) : s;
            return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
        }
    },
    methods: {
        add() {
            this.card.content = this.content;
            console.log(this.card);
            this.cards.push(this.card)
        }
    },
    components: {
        mavonEditor
    }
}
</script>

<style scoped>

</style>