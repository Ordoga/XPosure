<template>
    <div v-if="album" class="album-view">
        <input @change="handleUploadImages" type="file" multiple>
        <div class="album-name">{{ album.name }}</div>
        <div class="album-name">{{ album.photos }}</div>

        <div class="img-container" v-for="photo in album.photos" :key="photo">


                <img class="img" :src="photo" />
                
            </div>
        </div>
</template>

<script>
import { albumService } from '../services/album.service'
import { uploadService } from '../services/upload.service'

export default {
    data() {
        return {
            album : null
        }
    },
    methods: {
        async handleUploadImages(ev){
            ev.preventDefault()
            const  { files } = ev.target
            const urlList = await uploadService.uploadImages(this.album.id, files)
            this.album.push(...urlList)
        }
    },
    async created() {
        const { albumId } = this.$route.params
        this.album = await albumService.getAlbumById(albumId)
        console.log(this.album)

    },
    computed: {
        photos(){
            return this.photos
        }
    },
    components: {
    }
}
</script>

<style lang='scss' scoped>

.img-container {
    width: 400px;
    height: 300px;

    & .img {
        width: 100%;
        height: 100%;
    }
}

</style>