<template>
    <div v-if="user" class="portfolio page">
        <PortfolioCover :fullname="user.fullName" :coverImgUrl="user.coverImgUrl" />
        <AlbumList :albums="user.albums"/>
    </div>
</template>

<script>
import AlbumList from '../components/AlbumList.vue'
import PortfolioCover from '../components/PortfolioCover.vue'
import { userService } from '../services/userService'

export default {
    data() {
        return {
            user : null    
        }
    },
    methods: {
    },
    async created() {
        const  { id } = this.$route.params
        this.user = await userService.getUserById(id)
    },
    components: {
        PortfolioCover,
        AlbumList
    }
}
</script>

<style lang='scss' scoped>

</style>