<template>
        <div className="album-preview">
            <div className="img-container" :style="{ backgroundImage: `url(${album.coverImgUrl})`}">
                <div className="overlay">
                    <div className="album-title">{{album.name}}</div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    props: {
        album: {
            type: Object,
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
.album-preview {

flex: 1 1 20%;
/* Initial flex-basis set to 20% of the container */
position: relative;


/* Minimum width for responsiveness */
overflow: hidden;
transition: flex 0.3s ease;

&:hover {
    flex: 3 1 20%;
    /* Grow on hover */
}

& .img-container {
    position: relative;

    width: 100%;
    height: 100%;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex: 1;



    & .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        /* Dark overlay */
        transition: background 0.3s ease;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    &:hover .overlay {
        background: rgba(0, 0, 0, 0);
        cursor: pointer;
    }

    & .album-title {
        font-family: Arial, Helvetica, sans-serif;
        color: white;
        font-size: 2.4rem;
        z-index: 1;
    }
}
}
</style>