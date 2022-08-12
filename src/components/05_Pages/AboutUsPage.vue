<template lang="pug">
DafaultLayout
    AboutUsBlock
</template>

<script>
import { defineComponent} from "vue";
import DafaultLayout from "@/components/04_Templates/DefaultLayout.vue";
import AboutUsBlock from "@/components/03_Organisms/AboutUsBlock.vue";
export default defineComponent({
    name: "App",
    components: {
        DafaultLayout,
        AboutUsBlock
    },
});

</script>