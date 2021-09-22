<template>
<DafaultLayout>
    <div class="p-p-5 p-my-5 page-item">
        <VRWLogo />
    </div>
</DafaultLayout>
</template>

<script>
import VRWLogo from "@/components/01_Atoms/B-Logo.vue"
import DafaultLayout from "@/components/04_Templates/DefaultLayout.vue"

export default {
    components: {
        VRWLogo,
        DafaultLayout
    }
}
</script>

<style scoped>
.page-item {
    background-color: #fff
}
</style>