<template>
    <div>
        <h1>二次封装element自定义按钮</h1>
        <EleBtn type="success" icon="el-icon-delete" size="minni" title="删除按钮" txt="删除" @click="handler"/>
    </div>
</template>

<script>
import EleBtn from './EleBtn'
export default {
    data() {
        return {

        };
    },
    components:{
        EleBtn
    },
    created() {

    },
    mounted() {
        console.log(this.$attrs);//{type: 'success', icon: 'el-icon-delete', size: 'minni'}
        console.log(this.$listeners);
    },
    methods: {
        handler(){
            console.log('点击了按钮')
        }
    }
};
</script>

<style scoped lang="less">

</style>
