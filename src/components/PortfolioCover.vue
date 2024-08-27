<template>
    <section class="album-cover">
        <div class="img-container" :style="{backgroundImage: `url(${coverImgUrl ? coverImgUrl : '/defaultCover.jpg'})`}">
            <div class="overlay">
                <div class="user-details">
                    <div class="fullname">{{fullname}}</div>
                    <div class="title">{{title}}</div>

                </div>

            </div>
        </div>
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
        },
        title: {
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
    width: 100%;
    aspect-ratio: 4/1;
}

.img-container {
    position: relative;

    width: 100%;
    height: 100%;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    & .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
    }

    & .user-details {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: Arial, Helvetica, sans-serif;
        color: white;
        z-index: 1;
        white-space: nowrap;
        overflow: hidden;
        text-shadow: rgb(0, 0, 0) 0px 5px 15px;
        
        
        & .fullname {
            font-size: 5rem;
        }
        
        & .title {
            font-size: 2rem;
        }
    }
}

</style>