<template>
    <section class="album-cover">
        <div>{{fullname}}</div>
        <div>{{coverImgUrl}}</div>
    </section>
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

.album-cover {
    width: 300px;
    heigth: 300px;
    background-color: antiquewhite;
}

</style>