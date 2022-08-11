<template lang="pug">
p.my-1.text-left(v-if="items") {{items.length}}件が見つかりました
.row
    .text-left.col-xl-4.col-lg-6.my-2(v-for="(item, key) in items" :key="key")
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