<template lang="pug">
.p-text-left(v-for="(item, key) in items" :key="key")
    SlideListItem(:item="item")
</template>

<script>
import SlideListItem from "@/components/02_Molecules/SlideListItem.vue"

export default {
    components: {
        SlideListItem,
    },
    props: [
        "items"
    ]
}
</script>