<template>
    <div>albumView</div>
</template>

<script>
import { albumService } from '../services/album.service'

export default {
    data() {
        return {
            album : null
        }
    },
    methods: {
    },
    async created() {
        this.album = await albumService.getAlbumById(123)
    },
    components: {
    }
}
</script>

<style lang='scss' scoped>

</style>