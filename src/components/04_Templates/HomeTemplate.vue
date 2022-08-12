<template lang="pug">
DafaultLayout
    .p-4.my-3.page-item
        VRWLogo
    AboutUsBlock

</template>

<script>
import VRWLogo from "@/components/01_Atoms/B-Logo.vue"
import DafaultLayout from "@/components/04_Templates/DefaultLayout.vue"
import AboutUsBlock from "@/components/03_Organisms/AboutUsBlock.vue";

export default {
    components: {
        VRWLogo,
        DafaultLayout,
        AboutUsBlock
    }
}
</script>

<style scoped>
.page-item {
    background-color: #fff;
}
</style>