<template>
    <div> Porfolio </div>
    <div v-if="user" class="portfolio page">
        <div>Title</div>
        <div class="name"> {{ user.fullName }}</div>
    </div>
</template>

<script>
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
    }
}
</script>

<style lang='scss' scoped>

</style>