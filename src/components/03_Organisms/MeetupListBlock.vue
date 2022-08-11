<template lang="pug">
p.my-1.text-left(v-if="items") {{items.length}}件が見つかりました
.grid
    div(v-for="(item, key) in items" :key="key" class="text-left col-12 md:col-6 lg:col-3")
        MeetupListItem(:item="item")
</template>

<script>
import MeetupListItem from "@/components/02_Molecules/MeetupListItem"

export default {
    components: {
        MeetupListItem
    },
    props: [
        "items"
    ]
}
</script>