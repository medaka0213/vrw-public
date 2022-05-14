<template>
<div v-for="(item, key) in items" :key="key" class="p-text-left">
    <EventListItem v-if="item.pk.startsWith('event')" :item="item"/>
    <LaunchListItem v-else :item="item"/>
</div>
</template>

<script>
import LaunchListItem from "@/components/02_Molecules/LaunchListItem"
import EventListItem from "@/components/02_Molecules/EventListItem"

export default {
    components: {
        EventListItem, 
        LaunchListItem
    },
    props: [
        "items"
    ]
}
</script>