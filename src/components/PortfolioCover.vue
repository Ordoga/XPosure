<template>
    <div>{{fullname}}</div>
    <div>{{coverImgUrl}}</div>
</template>

<script>
export default {
    props :{
        fullname: {
            type: String,
            required: true
        },
        coverImgUrl: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
    },
    created() {
    },
    components: {
    }
}
</script>

<style lang='scss' scoped>

</style>