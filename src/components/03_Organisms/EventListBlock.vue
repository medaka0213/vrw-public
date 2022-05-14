<template lang="pug">
.grid
    div(v-for="(item, key) in items" :key="key" class="text-left col-12 md:col-6 lg:col-3")
        EventListItem(:item="item")
</template>

<script>
import EventListItem from "@/components/02_Molecules/EventListItem"

export default {
    components: {
        EventListItem, 
    },
    props: [
        "items"
    ]
}
</script>