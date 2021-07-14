<template>
<div v-for="(item, key) in items" :key="key">
    <EventListItem v-if="item.type !== 'launch'" :item="item"/>
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