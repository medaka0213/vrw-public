<template>
<div v-for="(item, key) in items" :key="key" class="p-text-left">
    <SlideListItem :item="item"/>
</div>
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