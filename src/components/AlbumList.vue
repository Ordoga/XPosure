<template>
    <section class="album-list">
            <AlbumPreview v-for="album in albums" :key="album.name" :album="album"/>
    </section>
</template>

<script>
import AlbumPreview from './AlbumPreview.vue'

export default {
    props: {
        albums: {
            type: Array,
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
        AlbumPreview
    }
}
</script>

<style lang='scss' scoped>
.album-list {
    height: 15vw;
    width: 80vw;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.2rem;
}
</style>